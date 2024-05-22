import {render, screen, cleanup} from '@testing-library/react'
import Jackets from '../../../components/paginaProducto/imagenesCuerpo/Jackets'
import '@testing-library/jest-dom'

afterEach(() => {
    cleanup();
});

test('should render Jacket component', () => { 
    render(<Jackets/>);
    const jacketsElement = screen.getByTestId("jackets-1");
    expect(jacketsElement).toBeInTheDocument();
    expect(jacketsElement).toHaveTextContent('Jackets');
})