import { render, screen, within } from '@testing-library/react';
import UserList from './UserList';

function renderComponent() {
    const users = [
        { name: 'Sandeep', email: 'sandeep@sandeep.com'},
        { name: 'Kumar', email: 'kumar@kumar.com' }
    ];
    
    // render the component
    render(<UserList users={users} />);
    return {
        users,
    }
}

test('render one row per user', () => {
    renderComponent();

    // Find all the rows in a table
    // screen.logTestingPlaygroundURL();
    // const rows = screen.getAllByRole('row');
    const rows = within(screen.getByTestId('rows')).getAllByRole('row');
    // const rows = container.querySelectorAll('tbody tr');

    // assertions 
    expect(rows).toHaveLength(2);
    //expect(rows).toHaveLength(2);

})

test('render name and email for each user', () => {
   const {users} = renderComponent();

    for(let user of users) {
        const name = screen.getByRole('cell', {name: user.name});
        const email = screen.getByRole('cell', {name: user.email});

        expect(name).toBeInTheDocument();
        expect(email).toBeInTheDocument();
    }
})