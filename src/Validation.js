// validation.js
export const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email) ? '' : 'Invalid email format';
};

export const validatePassword = (password) => {
    return password.length >= 6 ? '' : 'Password must be at least 6 characters long';
};

export const validateUsername = (username, existingUsernames) => {
    return username && !existingUsernames.includes(username) ? '' : 'Username already taken or invalid';
};
