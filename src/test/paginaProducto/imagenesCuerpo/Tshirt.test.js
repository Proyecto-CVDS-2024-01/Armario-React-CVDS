import {render, screen} from '@testing-library/react'
import TShirts from '../../../components/paginaProducto/imagenesCuerpo/TShirts';
import '@testing-library/jest-dom'
test('should render Tshirt component', () => { 
    render(<TShirts/>);
    const tshirtElement = screen.getByTestId('tshirt-1');
    expect(tshirtElement).toBeInTheDocument();
    expect(tshirtElement).toHaveTextContent('T-shirts');
})