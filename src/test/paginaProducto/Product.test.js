import {render, screen, cleanup} from '@testing-library/react'
import Product from '../../components/paginaProducto/Product'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom';

jest.mock('../../components/paginaProducto/imagenesCuerpo/Accessories', () => () => <div>Accessories</div>);
jest.mock('../../components/paginaProducto/imagenesCuerpo/Jackets', () => () => <div>Jackets</div>);
jest.mock('../../components/paginaProducto/imagenesCuerpo/Conjuntos/Conjuntos1', () => ({ selectedStyle, onStyleSelect }) => (<div>Conjuntos1</div>));
jest.mock('../../components/paginaProducto/imagenesCuerpo/Conjuntos/Conjuntos2', () => ({ selectedStyle, onStyleSelect }) => (<div>Conjuntos2</div>));
jest.mock('../../components/paginaProducto/imagenesCuerpo/Socks', () => () => <div>Socks</div>);
jest.mock('../../components/paginaProducto/imagenesCuerpo/Shoes', () => () => <div>Shoes</div>);

afterEach(() => {
  cleanup();
});
test('should render Product component', () => { 
    render(<BrowserRouter><Product/></BrowserRouter>);
    const productElement = screen.getByTestId('product-1');
    expect(productElement).toBeInTheDocument();
    expect(productElement).toHaveTextContent('¿Con qué estilo quieres destacar hoy?');
})
test('should render clothing components', () => { 
    render(<BrowserRouter><Product/></BrowserRouter>);
    expect(screen.getByText('Accessories')).toBeInTheDocument();
    expect(screen.getByText('Jackets')).toBeInTheDocument();
    expect(screen.getByText('Accessories')).toBeInTheDocument();
    expect(screen.getByText('Conjuntos1')).toBeInTheDocument();
    expect(screen.getByText('Socks')).toBeInTheDocument();
    expect(screen.getByText('Shoes')).toBeInTheDocument();

})