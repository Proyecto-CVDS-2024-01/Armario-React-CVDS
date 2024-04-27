import {render, screen} from '@testing-library/react'
import About from '../components/paginaPrincipal/About'
import '@testing-library/jest-dom'
test('should render Aboutoo component', () => { 
    render(<About/>);
    const aboutElement = screen.getByTestId('about-1');
    expect(aboutElement).toBeInTheDocument();
    expect(aboutElement).toHaveTextContent('SOBRE NOSOTROS');
})