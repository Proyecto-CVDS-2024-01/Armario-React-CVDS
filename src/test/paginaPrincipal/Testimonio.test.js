import {render, screen, cleanup} from '@testing-library/react'
import Testimonio from '../../components/paginaPrincipal/Testimonios'
import '@testing-library/jest-dom'

afterEach( () => {
    cleanup();
})

test('should render Testimonio component', () => { 
    render(<Testimonio/>);
    const testimonioElement = screen.getByTestId('testimonios-1');
    expect(testimonioElement).toBeInTheDocument();
    expect(testimonioElement).toHaveTextContent('Juan García');
})

test('should render an image in the Testimonios component', () => {
    render(<Testimonio />);
    const imgElement = screen.getByAltText('Imagen de moda');
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src');
});