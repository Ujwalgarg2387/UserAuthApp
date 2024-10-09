// components/Register.js

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Auth.css'; // Reuse the same CSS for consistent styling

const Register = () => {
    const navigate = useNavigate(); // Initialize useNavigate hook
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage(''); // Clear previous error message
        try {
            await axios.post('http://localhost:5000/api/users/register', { email, password });
            alert('User registered successfully! Please log in.');
            navigate('/home', { replace: true }); // Navigate back to login after successful registration
        } catch (error) {
            if (error.response) {
                setErrorMessage('Error registering user');
            } else {
                setErrorMessage('An unexpected error occurred');
            }
        }
    };

    return (
        <div className="container">
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <h1>Register</h1>
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
                <button type="submit">Register</button>
            </form>
            <p>
                Already have an account? 
                <span 
                    className="text-link" 
                    onClick={() => navigate('/login')}
                >
                    Login
                </span>
            </p>
        </div>
    );
};

export default Register;
