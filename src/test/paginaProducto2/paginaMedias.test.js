import {render, screen, cleanup} from '@testing-library/react'
import PaginaMedias from '../../components/paginaProducto2/paginaMedias'
import '@testing-library/jest-dom'

jest.mock('../../components/paginaPrincipal/Top', () => () => <div>Top</div>);

afterEach( () => {
    cleanup();
})

test('should render PaginaMedias component', () => { 
    render(<PaginaMedias/>);
    const PaginaMediasElement = screen.getByTestId('PaginaMedias-1');
    expect(PaginaMediasElement).toBeInTheDocument();

    
})

test('should render Top', () => {
    render(<PaginaMedias />);
    expect(screen.getByText('Top')).toBeInTheDocument();

});

