import {render, screen, cleanup} from '@testing-library/react'
import Accessories from '../../../components/paginaProducto/imagenesCuerpo/Accessories'
import '@testing-library/jest-dom'

afterEach(() => {
    cleanup();
});

test('should render Accesories component', () => { 
    render(<Accessories/>);
    const accessoriesElement = screen.getByTestId("accessories-1");
    expect(accessoriesElement).toBeInTheDocument();
    expect(accessoriesElement).toHaveTextContent('Accessories');
})