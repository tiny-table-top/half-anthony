import { render, screen } from '@testing-library/react';
import App from './App';

test('renders my name', () => {
  render(<App />);
  const nameElement = screen.getByText(/Hello, my name is Anthony Half/i);
  expect(nameElement).toBeInTheDocument();
});
