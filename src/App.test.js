import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const nameInput = screen.getByRole('textbox', {
    name: /name/i,
  });
  const emailInput = screen.getByRole('textbox', {
    name: /email/i
  });
  const button = screen.getByRole('button');


  user.click(nameInput);
  user.keyboard('Sandeep');
  user.click(emailInput);
  user.keyboard("sandeep@sandeep.com");
  user.click(button);

  // screen.debug();
  const name = screen.getByRole('cell', {name: "Sandeep"});
  const email = screen.getByRole('cell', {name: "sandeep@sandeep.com"});

  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
});
