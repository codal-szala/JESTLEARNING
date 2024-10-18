import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Formsubmit from './Formsubmit';

describe('Form Component', () => {
    const existingUsernames = ['user1', 'user2'];

    test('validates email format', () => {
        render(<Formsubmit existingUsernames={existingUsernames} />);

        fireEvent.change(screen.getByLabelText(/email/i), {
            target: { value: 'invalidEmail' },
        });
        fireEvent.click(screen.getByText(/submit/i));

        expect(screen.getByText(/invalid email format/i)).toBeInTheDocument();
    });

    test('validates password length', () => {
        render(<Formsubmit existingUsernames={existingUsernames} />);

        fireEvent.change(screen.getByLabelText(/password/i), {
            target: { value: '123' },
        });
        fireEvent.click(screen.getByText(/submit/i));

        expect(screen.getByText(/password must be at least 6 characters long/i)).toBeInTheDocument();
    });

    test('validates username uniqueness', () => {
        render(<Formsubmit existingUsernames={existingUsernames} />);

        fireEvent.change(screen.getByLabelText(/username/i), {
            target: { value: 'user1' },
        });
        fireEvent.click(screen.getByText(/submit/i));

        expect(screen.getByText(/username already taken or invalid/i)).toBeInTheDocument();
    });

    test('submits valid form', () => {
        render(<Formsubmit existingUsernames={existingUsernames} />);

        fireEvent.change(screen.getByLabelText(/email/i), {
            target: { value: 'user@example.com' },
        });
        fireEvent.change(screen.getByLabelText(/password/i), {
            target: { value: '123456' },
        });
        fireEvent.change(screen.getByLabelText(/username/i), {
            target: { value: 'newuser' },
        });
        fireEvent.click(screen.getByText(/submit/i));

        // If console.log or other side-effects are needed, you can spy on them
        // expect(console.log).toHaveBeenCalledWith(...);
    });
});