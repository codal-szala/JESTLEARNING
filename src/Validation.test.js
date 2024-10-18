import { validateEmail, validatePassword, validateUsername } from './Validation';

describe('Validation Functions', () => {
    test('validateEmail returns error for invalid email', () => {
        const result = validateEmail('invalidEmail');
        console.log('Validation result for invalid email:', result);
        expect(result).toBe('Invalid email format');
    });

    test('validateEmail returns empty string for valid email', () => {
        expect(validateEmail('user@example.com')).toBe('');
    });

    test('validatePassword returns error for short password', () => {
        const result = validatePassword('123');
        console.log('Result for short password validation:', result); 
        expect(result).toBe('Password must be at least 6 characters long');
    });

    test('validatePassword returns empty string for valid password', () => {
        const result = validatePassword('123456'); 
        console.log('Result for valid password validation:', result);
        expect(result).toBe('');
    });

    test('validateUsername returns error for taken username', () => {
        const existingUsernames = ['user1', 'user2'];
        expect(validateUsername('user1', existingUsernames)).toBe('Username already taken or invalid');
    });

    test('validateUsername returns empty string for valid username', () => {
        const existingUsernames = ['user1', 'user2'];
        expect(validateUsername('newuser', existingUsernames)).toBe('');
    });
});
