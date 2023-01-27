import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import UserForm from './UserForm';

test('it shows 2 inputs and 1 button', () => {
    render(<UserForm />)
    // get input fields
    const inputs = screen.getAllByRole('textbox');
    
    // get button
    const button = screen.getByRole('button');

    // assertion
    expect(inputs).toHaveLength(2);
    expect(button).toBeInTheDocument();
})

test('it calls onUserAdd when form is submitted!', () => {

    // mock function
    const mock = jest.fn();

    render(<UserForm onUserAdd={mock} />);

    //get the inputs
    const nameInput = screen.getByRole('textbox', {
        name: /name/i
    });

    const emailInput = screen.getByRole('textbox', {
        name: /email/i
    })

    //trigger name enter
    user.click(nameInput);
    user.keyboard('Sandeep');

    // trigger email enter
    user.click(emailInput);
    user.keyboard('sandeep2016shah@gmail.com');

    // get the button element
    const button = screen.getByRole('button');
    user.click(button);

    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledWith({name: "Sandeep", email: "sandeep2016shah@gmail.com"});
})

test('emties the input fields once form is submitted', () => {
    const mock = jest.fn();
    render(<UserForm onUserAdd={mock} />);

    const nameInput = screen.getByRole('textbox', {
        name: /name/i,
    })
    const emailInput = screen.getByRole('textbox', {
        name: /email/i,
    })
    const button = screen.getByRole('button');

    user.click(nameInput);
    user.keyboard("Sandeep");
    user.click(emailInput);
    user.keyboard("sandeep@sandeep.com");
    user.click(button);

    expect(nameInput).toHaveValue('');
    expect(emailInput).toHaveValue('');
})