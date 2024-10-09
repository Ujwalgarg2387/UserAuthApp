import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './components/Auth'; // Import the Auth component
import Home from './components/Home'; // Import the Home component
import ForgotPassword from './components/ForgotPassword';
import Login from './components/Login'; // Import the Login component
import Register from './components/Register'; // Import the Register component

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Auth />} /> {/* Set Auth as the default route */}
                <Route path="/login" element={<Login />} /> {/* Route for Login */}
                <Route path="/register" element={<Register />} /> {/* Route for Register */}
                <Route path="/home" element={<Home />} />
                <Route path="/reset-password" element={<ForgotPassword />} />
            </Routes>
        </Router>
    );
};

export default App;
