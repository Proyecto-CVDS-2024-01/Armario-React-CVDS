import {render, screen, cleanup} from '@testing-library/react'
import PaginaChaquetas from '../../components/paginaProducto2/paginaChaquetas'
import '@testing-library/jest-dom'

jest.mock('../../components/paginaPrincipal/Top', () => () => <div>Top</div>);

afterEach( () => {
    cleanup();
})

test('should render PaginaChaquetas component', () => { 
    render(<PaginaChaquetas/>);
    const PaginaChaquetasElement = screen.getByTestId('PaginaChaquetas-1');
    expect(PaginaChaquetasElement).toBeInTheDocument();

    
})

/*test('should render Top', () => {
    render(<PaginaChaquetas />);
    expect(screen.getByText('Top')).toBeInTheDocument();

});

test('should render multiple images', () => {
    render(<PaginaChaquetas />);
    const images = screen.getAllByRole('img');
    expect(images.length).toBeGreaterThan(0);
});*/