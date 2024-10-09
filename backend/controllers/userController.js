const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/db');

const registerUser = (req, res) => {
    const { email, password } = req.body;
    
    if (!validateEmail(email)) {
        return res.status(400).send('Invalid email format');
    }

    const hashedPassword = bcrypt.hashSync(password, 8);
    
    const sql = 'INSERT INTO users (email, password) VALUES (?, ?)';
    db.query(sql, [email, hashedPassword], (err, result) => {
        if (err) return res.status(500).send('Error registering user');
        res.status(201).send({ message: 'User registered successfully!' });
    });
};

const loginUser = (req, res) => {
    const { email, password } = req.body;

    const sql = 'SELECT * FROM users WHERE email = ?';

    db.query(sql, [email], (err, results) => {
        if (err) {
            return res.status(500).send({ message: 'Server error' });
        }

        if (results.length === 0) {
            // User not found
            return res.status(404).send({ message: 'User not found' });
        }

        const user = results[0];
        const isValidPassword = bcrypt.compareSync(password, user.password);

        if (!isValidPassword) {
            // Invalid password
            return res.status(401).send({ message: 'Invalid password' });
        }

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: 86400 });
        res.status(200).send({ auth: true, token });
    });
};
const resetPassword = (req, res) => {
    const { email, newPassword } = req.body;

    const sql = 'SELECT * FROM users WHERE email = ?';
    db.query(sql, [email], (err, results) => {
        if (err) {
            return res.status(500).send({ message: 'Server error' });
        }

        if (results.length === 0) {
            // User not found
            return res.status(404).send({ message: 'User not found' });
        }

        const hashedPassword = bcrypt.hashSync(newPassword, 8);
        const updateSql = 'UPDATE users SET password = ? WHERE email = ?';
        db.query(updateSql, [hashedPassword, email], (updateErr) => {
            if (updateErr) {
                return res.status(500).send({ message: 'Error updating password' });
            }
            const newToken = jwt.sign({ id: results[0].id }, process.env.JWT_SECRET, { expiresIn: 86400 });
            res.status(200).send({ message: 'Password reset successfully', token: newToken });
        });
    });
};


// Helper function to validate email format
const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

module.exports = { registerUser, loginUser, resetPassword };
