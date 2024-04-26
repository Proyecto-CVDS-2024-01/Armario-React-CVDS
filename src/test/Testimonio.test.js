import {render, screen} from '@testing-library/react'
import MuestraProducto from '../components/paginaPrincipal/MuestraProducto'
import '@testing-library/jest-dom'
test('should render Testimonio component', () => { 
    render(<MuestraProducto/>);
    const MuestraProductoElement = screen.getByTestId('testimonios-1');
    expect(MuestraProductoElement).toBeInTheDocument();
    //expect(testimonioElement).toHaveTextContent('testimonio');
})