import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

test('renders button with initial text and changes text on click', () => {
 
  render(<Button />);
  
  
  const buttonElement = screen.getByText(/Click me!/i);
  expect(buttonElement).toBeInTheDocument();

 
  fireEvent.click(buttonElement);

 
  expect(screen.getByText(/Clicked!/i)).toBeInTheDocument();
});