// components/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Auth.css'; // Reuse the same CSS for consistent styling

const Login = () => {
    const navigate = useNavigate(); // Initialize useNavigate hook
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage(''); // Clear previous error message
        try {
            const response = await axios.post('http://localhost:5000/api/users/login', { email, password });
            localStorage.setItem('token', response.data.token);
            alert('Logged in successfully!');
            navigate('/home', { replace: true }); // Navigate to home on success
        } catch (error) {
            if (error.response) {
                if (error.response.status === 404) {
                    setErrorMessage('Invalid Email');
                } else if (error.response.status === 401) {
                    setErrorMessage('Invalid password');
                } else {
                    setErrorMessage('Error logging in');
                }
            } else {
                setErrorMessage('An unexpected error occurred');
            }
        }
    };

    return (
        <div className="container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
            <p>
                Don’t have an account? 
                <span 
                    className="text-link" 
                    onClick={() => navigate('/register')}
                >
                    Register
                </span>
            </p>
            <p>
                <span 
                    className="text-link" 
                    onClick={() => navigate('/reset-password')} // Switch to forgot password
                >
                    Forgot password?
                </span>
                </p>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
    );
};

export default Login;
