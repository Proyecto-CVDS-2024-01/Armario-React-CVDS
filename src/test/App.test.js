import {render, screen, cleanup} from '@testing-library/react'
import App from '../App'
import '@testing-library/jest-dom'

afterEach( () => {
    cleanup();
})
test('should render App component', () => { 
    render(<App/>);
    const appElement = screen.getByTestId('App-1');
    expect(appElement).toBeInTheDocument();
    
})
