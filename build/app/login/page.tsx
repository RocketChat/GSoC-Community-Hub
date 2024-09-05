// "use client";
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { Alert, Button, Card, Container, Form } from 'react-bootstrap';
// import { NavigationMenuDemo } from 'navbar-cms';
// import { navItems } from 'src/projects';

// export default function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState<string | null>(null);
//   const router = useRouter();

//   const handleLogin = async (event: React.FormEvent) => {
//     event.preventDefault();

//     try {
//       const response = await fetch('/api/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       if (response.ok) {
//         console.log('Login successful');
//         alert('Login successful');
//         // Handle success, e.g., redirect to home page
//         router.push('/home'); // Adjust the redirect path as needed
//       } else {
//         // Handle error
//         const result = await response.json();
//         setError(result.message || 'An error occurred');
//       }
//     } catch (error) {
//       console.error(error);
//       setError('An unexpected error occurred');
//     }
//   };

//   return (
//     <>
//       <NavigationMenuDemo data={navItems} />
//       <Container className="d-flex justify-content-center align-items-center min-vh-100">
//         <div className="w-100" style={{ maxWidth: '400px' }}>
//           <Card>
//             <Card.Header className="bg-primary text-white text-center">
//               <h3>Login</h3>
//             </Card.Header>
//             <Card.Body>
//               {error && <Alert variant="danger">{error}</Alert>}
//               <Form onSubmit={handleLogin}>
//                 <Form.Group controlId="formEmail">
//                   <Form.Label>Email address</Form.Label>
//                   <Form.Control
//                     type="email"
//                     placeholder="Enter email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                   />
//                 </Form.Group>
//                 <Form.Group controlId="formPassword" className="mt-3">
//                   <Form.Label>Password</Form.Label>
//                   <Form.Control
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                   />
//                 </Form.Group>
//                 <Button variant="primary" type="submit" className="mt-4 w-100">
//                   Login
//                 </Button>
//               </Form>
//               <div className="text-center mt-3">
//                 <p>Don't have an account? <a href="/register">Register here</a></p>
//               </div>
//             </Card.Body>
//           </Card>
//         </div>
//       </Container>
//     </>
//   );
// }

'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Container, Card } from 'react-bootstrap'; // Updated imports
import { NavigationMenuDemo } from 'navbar-cms';
import { navItems } from 'src/projects';
import LoginForm from '../../components/forms/login-form'; // Import the new component

export default function Login() {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (email: string, password: string) => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        console.log('Login successful');

        router.push('/');
      } else {
        const result = await response.json();
        setError(result.message || 'An error occurred');
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
