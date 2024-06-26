import {render, screen, cleanup} from '@testing-library/react'
import PaginaZapatos from '../../components/paginaProducto2/paginaZapatos'
import '@testing-library/jest-dom'

jest.mock('../../components/paginaPrincipal/Top', () => () => <div>Top</div>);

afterEach( () => {
    cleanup();
})

test('should render PaginaZapatos component', () => { 
    render(<PaginaZapatos/>);
    const PaginaZapatosElement = screen.getByTestId('PaginaZapatos-1');
    expect(PaginaZapatosElement).toBeInTheDocument();

    
})

test('should render Top', () => {
    render(<PaginaZapatos />);
    expect(screen.getByText('Top')).toBeInTheDocument();

});

