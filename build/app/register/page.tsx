// TODO: validations for the input fields
'use client';
import React, { useState } from 'react';
import { faunaClient } from 'build/fauna/fauna-client';
import { query as q } from 'faunadb';
import { NavigationMenuDemo } from 'navbar-cms';
import { navItems } from 'src/projects';
import { useRouter } from 'next/navigation';
import { Container, Card } from 'react-bootstrap';
import RegistrationForm from '../../components/forms/registration-form';
import { setCookie } from 'cookies-next';

const registerUser = async (username: string, password: string, email: string) => {
  try {
    const doesCollectionExist = await faunaClient.query(q.Exists(q.Collection('User')));

    if (!doesCollectionExist) {
      await faunaClient.query(q.CreateCollection({ name: 'User' }));
    } else {
      console.log('exists');
    }
    //TODO:hashed password
    // const hashedPassword = await bcrypt.hash(password, 10);
    const user = { username, email, password };

    const response = await faunaClient.query(q.Create(q.Collection('User'), { data: user }));
    setCookie('username', username ); 
    setCookie('email', email ); 

    return response;
  } catch (error) {
    console.error('Registration failed', error);
    return null;
  }
};

export default function Auth() {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (username: string, password: string, email: string) => {
    const response = await registerUser(username, password, email);
    console.log('res', response);
    if (response) {
      // Redirect to home after successful registration
      router.push('/');
    } else {
      console.log('error', error);
      setError('Failed to register. Please try again.');
    }
  };

  return (
    <>
      <NavigationMenuDemo data={navItems} />
      <Container className='d-flex justify-content-center align-items-center min-vh-100'>
        <div
          className='w-100'
          style={{ maxWidth: '500px' }}
        >
          <Card>
            <Card.Header className='bg-primary text-white text-center'>
              <h3>Register</h3>
            </Card.Header>
            <Card.Body>
              <RegistrationForm
                onSubmit={handleSubmit}
                error={error}
                setError={setError}
              />
              <div className='text-center mt-3'>
                <p>
                  Already registered? <a href='/login'>Login here</a>
                </p>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </>
  );
}
