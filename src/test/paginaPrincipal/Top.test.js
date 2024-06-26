import {render, screen, cleanup} from '@testing-library/react'
import Top from '../../components/paginaPrincipal/Top'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom';

afterEach( () => {
    cleanup();
})

test('should render Top component', () => { 
    render(
        <BrowserRouter>
            <Top />
        </BrowserRouter>
    );
    const TopElement = screen.getByTestId('Top-1');
    expect(TopElement).toBeInTheDocument();
    expect(TopElement).toHaveTextContent('opciones ropa armario virtual');
    expect(TopElement).toHaveTextContent('Productos');
    expect(TopElement).toHaveTextContent('Sobre Nosotros');
    expect(TopElement).toHaveTextContent('Inicio');

})

