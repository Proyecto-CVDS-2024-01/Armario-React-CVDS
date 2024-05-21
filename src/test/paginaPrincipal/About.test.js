import {render, screen, cleanup} from '@testing-library/react'
import About from '../../components/paginaPrincipal/About'
import '@testing-library/jest-dom'

afterEach( () => {
    cleanup();
})

test('should render Aboutoo component', () => { 
    render(<About/>);
    const aboutElement = screen.getByTestId('about-1');
    expect(aboutElement).toBeInTheDocument();
    expect(aboutElement).toHaveTextContent('SOBRE NOSOTROS');
})