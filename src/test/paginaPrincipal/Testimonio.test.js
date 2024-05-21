import {render, screen} from '@testing-library/react'
import Testimonio from '../../components/paginaPrincipal/Testimonios'
import '@testing-library/jest-dom'
test('should render Testimonio component', () => { 
    render(<Testimonio/>);
    const testimonioElement = screen.getByTestId('testimonios-1');
    expect(testimonioElement).toBeInTheDocument();
    expect(testimonioElement).toHaveTextContent('Juan García');
})