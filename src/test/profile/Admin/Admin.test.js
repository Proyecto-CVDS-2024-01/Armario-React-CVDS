import {render, screen, cleanup} from '@testing-library/react'
import Admin from '../../../components/profile/Admin/Admin'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom';

afterEach( () => {
    cleanup();
})

test('should render Admin component', () => { 
    render(<BrowserRouter><Admin/></BrowserRouter>);
    const AdminElement = screen.getByTestId('Admin-1');
    expect(AdminElement).toBeInTheDocument();

})
