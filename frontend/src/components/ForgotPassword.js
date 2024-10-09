import React, { useState } from 'react';  
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import axios from 'axios'; // Import axios for API calls
import './Auth.css'; 

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');

        if (newPassword !== confirmPassword) {
            setErrorMessage("Passwords don't match");
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/api/users/reset-password', {
                email,
                newPassword,
            });
            alert(response.data.message); // Show success message
            navigate('/'); // Redirect back to login after password reset
        } catch (error) {
            if (error.response) {
                setErrorMessage(error.response.data.message); // Set error message from the response
            } else {
                setErrorMessage('An unexpected error occurred');
            }
        }
    };

    return (
        <div className="container">
            <h1>Reset Password</h1>
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
                    placeholder="Set New Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Confirm New Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
                <button type="submit">Reset Password</button>
            </form>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
    );
};

export default ForgotPassword;
