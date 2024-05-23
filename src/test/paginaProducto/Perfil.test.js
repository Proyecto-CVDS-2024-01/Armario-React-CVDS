import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Perfil from '../../components/paginaProducto/Perfil';
import { BrowserRouter } from 'react-router-dom';


afterEach(() => {
    cleanup();
});

test('should render Perfil component', () => { 
    render(<BrowserRouter><Perfil /></BrowserRouter>);
    const PerfilElement = screen.getByTestId('perfil-1');
    expect(PerfilElement).toBeInTheDocument();
    expect(PerfilElement).toHaveTextContent("Mi Perfil")
});
