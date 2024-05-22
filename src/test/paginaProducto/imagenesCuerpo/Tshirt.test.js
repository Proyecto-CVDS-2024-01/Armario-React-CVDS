import {render, screen, cleanup} from '@testing-library/react'
import TShirts from '../../../components/paginaProducto/imagenesCuerpo/TShirts';
import '@testing-library/jest-dom'

afterEach(() => {
    cleanup();
});

test('should render Tshirt component', () => { 
    render(<TShirts/>);
    const tshirtElement = screen.getByTestId('tshirts-1');
    expect(tshirtElement).toBeInTheDocument();
    expect(tshirtElement).toHaveTextContent('T-shirts');
})