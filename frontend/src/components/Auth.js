// components/Auth.js

import React, { useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Auth.css'; // Updated CSS
import Login from './Login'; // Import the Login component

const Auth = () => {
    const navigate = useNavigate(); // Initialize useNavigate hook
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            navigate('/home', { replace: true }); // Redirect to home if logged in
        }
    }, [navigate]);


    return (
        <Login/>
    );
};

export default Auth;
