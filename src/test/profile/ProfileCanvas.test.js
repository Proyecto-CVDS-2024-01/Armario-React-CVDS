import {render, screen, cleanup} from '@testing-library/react'
import Profile from '../../components/profile/ProfileCanvas'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom';

afterEach( () => {
    cleanup();
})

test('should render Profile component', () => { 
    render(<BrowserRouter><Profile/></BrowserRouter>);
    const ProfileElement = screen.getByTestId('profilecanvas-1');
    expect(ProfileElement).toBeInTheDocument();

})
