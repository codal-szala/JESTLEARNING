import { render, screen } from '@testing-library/react';
import UserGreeting from './UserGreeting';

test('renders correct greeting when user is logged in', () => {
  const user = { name: 'Alice' };
  render(<UserGreeting user={user} />);
  console.log(screen.debug());

  const greetingElement = screen.getByText(/Welcome, Alice!/i);
  expect(greetingElement).toBeInTheDocument();
});

test('renders no user message when user is not logged in', () => {
  render(<UserGreeting user={null} />);

  const noUserElement = screen.getByText(/No user logged in/i);
  expect(noUserElement).toBeInTheDocument();
});
