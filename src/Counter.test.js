// Counter.test.js
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Counter from './Counter';

describe('Counter Component', () => {
    test('initial count is 0 and shows even', () => {
        render(<Counter />);
        expect(screen.getByText(/count:/i)).toHaveTextContent('Count: 0');
        expect(screen.getByText(/even/i)).toBeInTheDocument();
    });

    test('increments the count', () => {
        render(<Counter />);
        fireEvent.click(screen.getByText(/increment/i));
        expect(screen.getByText(/count:/i)).toHaveTextContent('Count: 1');
        expect(screen.getByText(/odd/i)).toBeInTheDocument();
    });

    test('decrements the count', () => {
        render(<Counter />);
        fireEvent.click(screen.getByText(/increment/i)); // Increment first
        fireEvent.click(screen.getByText(/decrement/i));
        expect(screen.getByText(/count:/i)).toHaveTextContent('Count: 0');
        expect(screen.getByText(/even/i)).toBeInTheDocument();
    });

    test('does not go below 0', () => {
        render(<Counter />);
        fireEvent.click(screen.getByText(/decrement/i)); // Decrement
        expect(screen.getByText(/count:/i)).toHaveTextContent('Count: 0'); // Should stay at 0
    });
});
