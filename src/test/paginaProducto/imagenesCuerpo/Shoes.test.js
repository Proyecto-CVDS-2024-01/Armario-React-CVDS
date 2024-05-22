import {render, screen, cleanup} from '@testing-library/react'
import Shoes from '../../../components/paginaProducto/imagenesCuerpo/Shoes'
import '@testing-library/jest-dom'

afterEach(() => {
    cleanup();
});

test('should render Shoes component', () => { 
    render(<Shoes/>);
    const shoesElement = screen.getByTestId("shoes-1");
    expect(shoesElement).toBeInTheDocument();
    expect(shoesElement).toHaveTextContent('Shoes');
})