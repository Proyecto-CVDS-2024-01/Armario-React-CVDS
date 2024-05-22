
import {render, screen, cleanup} from '@testing-library/react'
import Clean from '.../../../components/paginaProducto/imagenesCuerpo/Clean'
import '@testing-library/jest-dom'

afterEach(() => {
    cleanup();
});

test('should render Clean component', () => { 
    render(<Clean/>);
    const CleanElement = screen.getByTestId('clean-1');
    expect(CleanElement).toBeInTheDocument();

})
