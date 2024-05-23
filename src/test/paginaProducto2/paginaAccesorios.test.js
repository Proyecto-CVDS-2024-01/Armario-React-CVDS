import {render, screen, cleanup} from '@testing-library/react'
import PaginaAccesorios from '../../components/paginaProducto2/paginaAccesorios'
import '@testing-library/jest-dom'

jest.mock('../../components/paginaPrincipal/Top', () => () => <div>Top</div>);

afterEach( () => {
    cleanup();
})

test('should render PaginaAccesorios component', () => { 
    render(<PaginaAccesorios />);
    const PaginaAccesoriosElement = screen.getByTestId('PaginaAccesorios-1');
    expect(PaginaAccesoriosElement).toBeInTheDocument();

    
})

test('should render Top', () => {
    render(<PaginaAccesorios />);
    expect(screen.getByText('Top')).toBeInTheDocument();

});
