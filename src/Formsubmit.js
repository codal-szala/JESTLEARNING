// Form.js
import React, { useState } from 'react';

const Form = ({ existingUsernames }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [errors, setErrors] = useState({});

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const validatePassword = (password) => {
        return password.length >= 6;
    };

    const validateUsername = (username) => {
        return username.length > 0 && !existingUsernames.includes(username);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newErrors = {};

        if (!validateEmail(email)) {
            newErrors.email = 'Invalid email format';
        }
        if (!validatePassword(password)) {
            newErrors.password = 'Password must be at least 6 characters long';
        }
        if (!validateUsername(username)) {
            newErrors.username = 'Username already taken or invalid';
        }

        if (Object.keys(newErrors).length === 0) {
            // Submit form
            console.log({ email, password, username });
            setErrors({});
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <span>{errors.email}</span>}
            </div>
            <div>
            <label htmlFor="password">Password:</label>
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && <span>{errors.password}</span>}
            </div>
            <div>
            <label htmlFor="username">Username:</label>

                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                {errors.username && <span>{errors.username}</span>}
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;
