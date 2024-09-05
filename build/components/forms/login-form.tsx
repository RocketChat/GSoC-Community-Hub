// LoginForm.tsx
import React, { useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';

interface LoginFormProps {
  onSubmit: (email: string, password: string) => void;
  error: string | null;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, error, setError }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(email, password);
  };

  return (
    <Form onSubmit={handleLogin}>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form.Group controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group controlId="formPassword" className="mt-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit" className="mt-4 w-100">
        Login
      </Button>
    </Form>
  );
};

export default LoginForm;
