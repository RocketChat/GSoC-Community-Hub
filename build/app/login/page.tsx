'use client';
import React, { useState } from 'react';
import { faunaClient } from 'build/fauna/fauna-client';
import { useRouter } from 'next/navigation';
import { Container, Card } from 'react-bootstrap'; // Updated imports
import { NavigationMenuDemo } from 'navbar-cms';
import { navItems } from 'src/projects';
import LoginForm from '../../components/forms/login-form';
import { query as q } from 'faunadb'; // Import the new component

export default function Login() {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  type UserType = {
    ref: {
      id: string;
    };
    data: {
      email: string;
      password: string;
    };
  };

  const handleSubmit = async (email: string, password: string) => {
    try {
      const users: { data: UserType[] } = await faunaClient.query(
        q.Map(
          q.Paginate(q.Documents(q.Collection('User'))),
          q.Lambda('userRef', q.Get(q.Var('userRef')))
        )
        
      );

      const user = users.data.find((user: any) => user.data.email === email);

      if (user) {
        if (user.data.password === password) {
          console.log('Login successful');
          router.push('/');
        } else {
          setError('Invalid password');
        }
      } else {
        setError('User not found');
      }
    } catch (error) {
      console.error(error);
      setError('An unexpected error occurred');
    }
  };

  return (
    <>
      <NavigationMenuDemo data={navItems} />
      <Container className='d-flex justify-content-center align-items-center min-vh-100'>
        <div
          className='w-100'
          style={{ maxWidth: '400px' }}
        >
          <Card>
            <Card.Header className='bg-primary text-white text-center'>
              <h3>Login</h3>
            </Card.Header>
            <Card.Body>
              <LoginForm
                onSubmit={handleSubmit}
                error={error}
                setError={setError}
              />
              <div className='text-center mt-3'>
                <p>
                  Don't have an account? <a href='/register'>Register here</a>
                </p>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </>
  );
}
