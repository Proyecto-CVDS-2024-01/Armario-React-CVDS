import {render, screen} from '@testing-library/react'
import Product from '../../components/paginaProducto/Product'
import '@testing-library/jest-dom'
test('should render Product component', () => { 
    render(<Product/>);
    const productElement = screen.getByTestId('product-1');
    expect(productElement).toBeInTheDocument();
    expect(productElement).toHaveTextContent('¿Con qué estilo quieres destacar hoy?');
})