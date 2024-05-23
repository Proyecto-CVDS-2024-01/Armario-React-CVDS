import {render, screen, cleanup} from '@testing-library/react'
import PaginaCamisas from '../../components/paginaProducto2/paginaCamisas'
import '@testing-library/jest-dom'

jest.mock('../../components/paginaPrincipal/Top', () => () => <div>Top</div>);

afterEach( () => {
    cleanup();
})

test('should render PaginaCamisas component', () => { 
    render(<PaginaCamisas/>);
    const PaginaCamisasElement = screen.getByTestId('PaginaCamisas-1');
    expect(PaginaCamisasElement).toBeInTheDocument();

    
})

test('should render Top', () => {
    render(<PaginaCamisas />);
    expect(screen.getByText('Top')).toBeInTheDocument();

});

