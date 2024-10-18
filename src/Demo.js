// Form.js
import React, { useState } from 'react';
import { validateEmail, validatePassword, validateUsername } from './Validation';

const Demo = ({ existingUsernames }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        const newErrors = {};

        newErrors.email = validateEmail(email);
        newErrors.password = validatePassword(password);
        newErrors.username = validateUsername(username, existingUsernames);

        if (Object.values(newErrors).every((error) => !error)) {
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
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <span>{errors.email}</span>}
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && <span>{errors.password}</span>}
            </div>
            <div>
                <label htmlFor="username">Username:</label>
                <input
                    id="username"
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

export default Demo;
