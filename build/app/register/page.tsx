// "use client";
// import React, { useState } from 'react';
// import { NavigationMenuDemo } from 'navbar-cms';
// import { navItems } from 'src/projects';
// import { useRouter } from 'next/navigation'; 
// import { Container, Card, Alert, Button, Form } from 'react-bootstrap'; // Updated imports

// const registerUser = async (username: string, password: string, email: string) => {
//   try {
//     const res = await fetch('/api/auth', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ username, password, email }),
//     });

//     if (res.ok) {
//       return await res.json();
//     }
//     throw new Error('Registration failed');
//   } catch (error) {
//     console.error(error);
//     return null;
//   }
// };

// export default function Auth() {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState<string | null>(null);
//   const router = useRouter();

//   // Handle form submission
//   const handleRegister = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       setError('Passwords do not match.');
//       return;
//     }

//     const response = await registerUser(username, password, email);
//     if (response) {
//       // Redirect to home after successful registration
//       router.push('/');
//     } else {
//       setError('Failed to register. Please try again.');
//     }
//   };

//   return (
//     <>
//       <NavigationMenuDemo data={navItems} />
//       <Container className="d-flex justify-content-center align-items-center min-vh-100">
//         <div className="w-100" style={{ maxWidth: '500px' }}>
//           <Card>
//             <Card.Header className="bg-primary text-white text-center">
//               <h3>Register</h3>
//             </Card.Header>
//             <Card.Body>
//               {error && <Alert variant="danger">{error}</Alert>}
//               <Form onSubmit={handleRegister}>
//                 <Form.Group className="mb-3" controlId="formUsername">
//                   <Form.Label>Username</Form.Label>
//                   <Form.Control
//                     type="text"
//                     placeholder="Enter username"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     required
//                   />
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formEmail">
//                   <Form.Label>Email</Form.Label>
//                   <Form.Control
//                     type="email"
//                     placeholder="Enter email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                   />
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formPassword">
//                   <Form.Label>Password</Form.Label>
//                   <Form.Control
//                     type="password"
//                     placeholder="Enter password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                   />
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formConfirmPassword">
//                   <Form.Label>Confirm Password</Form.Label>
//                   <Form.Control
//                     type="password"
//                     placeholder="Confirm password"
//                     value={confirmPassword}
//                     onChange={(e) => setConfirmPassword(e.target.value)}
//                     required
//                   />
//                 </Form.Group>
//                 <Button type="submit" variant="primary" className="w-100">
//                   Register
//                 </Button>
//               </Form>
//               <div className="text-center mt-3">
//                 <p>Already registered? <a href="/login">Login here</a></p>
//               </div>
//             </Card.Body>
//           </Card>
//         </div>
//       </Container>
//     </>
//   );
// }




// TODO: validations for the input fields
"use client";
import React, { useState } from 'react';
import { NavigationMenuDemo } from 'navbar-cms';
import { navItems } from 'src/projects';
import { useRouter } from 'next/navigation'; 
import { Container, Card } from 'react-bootstrap'; // Updated imports
import RegistrationForm from '../../components/forms/registration-form'; // Import the new component

const registerUser = async (username: string, password: string, email: string) => {
  try {
    const res = await fetch('/api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password, email }),
    });

    if (res.ok) {
      return await res.json();
    }
    throw new Error('Registration failed');
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default function Auth() {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (username: string, password: string, email: string) => {
    const response = await registerUser(username, password, email);
    if (response) {
      // Redirect to home after successful registration
      router.push('/');
    } else {
      setError('Failed to register. Please try again.');
    }
  };

  return (
    <>
      <NavigationMenuDemo data={navItems} />
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="w-100" style={{ maxWidth: '500px' }}>
          <Card>
            <Card.Header className="bg-primary text-white text-center">
              <h3>Register</h3>
            </Card.Header>
            <Card.Body>
              <RegistrationForm
                onSubmit={handleSubmit}
                error={error}
                setError={setError}
              />
              <div className="text-center mt-3">
                <p>Already registered? <a href="/login">Login here</a></p>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </>
  );
}

