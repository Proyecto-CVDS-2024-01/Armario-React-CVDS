import {render, screen, cleanup} from '@testing-library/react'
import Profile from '../../components/profile/Profile'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom';

afterEach( () => {
    cleanup();
})

test('should render Profile component', () => { 
    render(<BrowserRouter><Profile/></BrowserRouter>);
    const ProfileElement = screen.getByTestId('profile-1');
    expect(ProfileElement).toBeInTheDocument();
    expect(ProfileElement).toHaveTextContent('Tu armario virtual');

})
