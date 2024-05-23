import {render, screen, cleanup} from '@testing-library/react'
import PaginaPantalones from '../../components/paginaProducto2/paginaPantalones'
import '@testing-library/jest-dom'

jest.mock('../../components/paginaPrincipal/Top', () => () => <div>Top</div>);

afterEach( () => {
    cleanup();
})

test('should render PaginaPantalones component', () => { 
    render(<PaginaPantalones/>);
    const PaginaPantalonesElement = screen.getByTestId('PaginaPantalones-1');
    expect(PaginaPantalonesElement).toBeInTheDocument();

    
})

/*test('should render Top', () => {
    render(<PaginaPantalones />);
    expect(screen.getByText('Top')).toBeInTheDocument();

});

test('should render multiple images', () => {
    render(<PaginaPantalones />);
    const images = screen.getAllByRole('img');
    expect(images.length).toBeGreaterThan(0);
});*/