import React, { useState } from 'react';
import { Form, Button, Alert, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "./LogReg.css"

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password) {
        setError('Please fill in all fields.');
        return;
    }

    setLoading(true);
    setError('');
    setPasswordError(false);   

    try {
<<<<<<< HEAD
        const response = await fetch('http://localhost:4000/auth/login', {
=======
        const response = await fetch('https://records-saver.onrender.com/auth/login', {
>>>>>>> 6bc9f88eb4c03e712036bba2232ef9f5c1fe7007
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
        }

        const result = await response.json();
        console.log(result);

        if (response.ok) {
            localStorage.setItem('token', result.token);
            navigate('/');
            
            swal({
              title: "Logged in successfully",
              icon: "success",
              button: "OK",
            }) 
        } else {
            console.error('Login failed:', result.message);
            if (result.message === 'Incorrect email and password') {
                setPasswordError(true); 
            }
            setError(result.message || 'Login failed. Please enter the correct Email and Password.');
        }
    } catch (error) {
        console.error('Error:', error.message);
        setError('An error occurred. Please try again later.');
    } finally {
        setLoading(false);
        setFormData({
            email: '',
            password: ''
        });
    }
};

  return (
    <Form onSubmit={handleSubmit}>
    <h2>Login</h2>

    {error && <Alert variant="danger">{error}</Alert>}
    {loading && <Spinner animation="border" role="status"><span className="sr-only"></span></Spinner>}

    <Form.Group controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control
        type="email"
        name="email"
        placeholder="Enter email"
        value={formData.email}
        onChange={handleChange}
        required
        style={{ borderColor: passwordError ? 'red' : '' }}
      />
    </Form.Group>

    <Form.Group controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control
        type="password"
        name="password"
        placeholder="Enter password"
        value={formData.password}
        onChange={handleChange}
        required
        style={{ borderColor: passwordError ? 'red' : '' }}
      />
    </Form.Group>

    <Button variant="dark" type="submit" className="w-100">
      Login
    </Button>
  </Form>
 )};

export default Login;
