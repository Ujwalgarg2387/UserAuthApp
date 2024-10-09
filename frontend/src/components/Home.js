import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Remove the token from localStorage
        localStorage.removeItem('token');
        // Redirect to the login page
         navigate('/', { replace: true });
    };

    return (
        <div style={styles.container}>
            <h1>Welcome to the Home Page</h1>
            <p>You are successfully logged in!</p>
            <button style={styles.logoutButton} onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw', 
        height: '100vh',
        backgroundColor: '#f7f9fc',
        textAlign: 'center',
        overflow: 'hidden',
    },
    logoutButton: {
        marginTop: '20px',
        padding: '20px 20px',
        border: 'none',
        borderRadius: '25px',
        background: 'linear-gradient(45deg, rgb(16, 137, 211) 0%, rgb(18, 177, 209) 100%)',
        color: '#fff',
        cursor: 'pointer',
        fontSize: '20px',
        width: 'auto', 
        maxWidth: '200px',
        paddingLeft: '30px', 
        paddingRight: '30px',
    }
};

export default Home;