import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from './Form';

test('updates input value and displays submitted value', () => {
  render(<Form />);

 
  const inputElement = screen.getByLabelText(/input/i);
  const submitButton = screen.getByText(/submit/i);
  
  expect(screen.queryByText(/submitted value:/i)).toBeNull();

  // Simulate user typing into the input field
  fireEvent.change(inputElement, { target: { value: 'Test value' } });
  expect(inputElement.value).toBe('Test value');
  
  // Simulate form submission
  fireEvent.click(submitButton);

  // Verify that the submitted value is displayed
  expect(screen.getByText(/submitted value: test value/i)).toBeInTheDocument();
});