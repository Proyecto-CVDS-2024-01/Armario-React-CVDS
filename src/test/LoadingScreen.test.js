import {render, screen, cleanup} from '@testing-library/react'
import LoadingScreen from '../components/LoadingScreen'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom';

afterEach( () => {
    cleanup();
})

test('should render LoadingScreen component', () => { 
    render(<BrowserRouter><LoadingScreen/></BrowserRouter>);
    const LoadingScreenElement = screen.getByTestId('LoadingScreen-1');
    expect(LoadingScreenElement).toBeInTheDocument();

})


