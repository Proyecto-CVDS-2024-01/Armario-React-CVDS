import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import OtraPagina from '../../components/paginaProducto/OtraPagina';
import { BrowserRouter } from 'react-router-dom';

jest.mock('../../components/paginaPrincipal/Top', () => () => <div>Top Component</div>);
jest.mock('../../components/paginaProducto/Product', () => ({ selectedStyle, onStyleSelect }) => (<div>Product Component</div>));
jest.mock('../../components/paginaProducto/Tendencias', () => ({ selectedStyle }) => (<div>Tendencias Component</div>
));

afterEach(() => {
    cleanup();
});

test('should render OtraPagina component', () => { 
    render(<BrowserRouter><OtraPagina /></BrowserRouter>);
    const OtraPaginaElement = screen.getByTestId('otrapagina-1');
    expect(OtraPaginaElement).toBeInTheDocument();
});

test('should render Top, Product, and Tendencias components', () => {
    render(<OtraPagina />);
    expect(screen.getByText('Top Component')).toBeInTheDocument();
    expect(screen.getByText('Product Component')).toBeInTheDocument();
    expect(screen.getByText('Tendencias Component')).toBeInTheDocument();
});