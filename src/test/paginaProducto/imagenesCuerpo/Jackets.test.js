import {render, screen} from '@testing-library/react'
import Jackets from '../../../components/paginaProducto/imagenesCuerpo/Jackets'
import '@testing-library/jest-dom'
test('should render Jacket component', () => { 
    render(<Jackets/>);
    const jacketsElement = screen.getByTestId("jackets-1");
    expect(jacketsElement).toBeInTheDocument();
    expect(jacketsElement).toHaveTextContent('Jackets');
})