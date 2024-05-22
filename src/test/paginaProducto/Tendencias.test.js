import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Tendencias from '../../components/paginaProducto/Tendencias';

afterEach(() => {
    cleanup();
});

test('should render Tendencias component', () => { 
    render(<Tendencias />);
    const TendenciasElement = screen.getByTestId('Tendencias-1');
    expect(TendenciasElement).toBeInTheDocument();
    expect(TendenciasElement).toHaveTextContent('TRENDING');
});
