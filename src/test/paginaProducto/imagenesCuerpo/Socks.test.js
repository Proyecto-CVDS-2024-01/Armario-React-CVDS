import {render, screen, cleanup} from '@testing-library/react'
import Socks from '../../../components/paginaProducto/imagenesCuerpo/Socks'
import '@testing-library/jest-dom'

afterEach(() => {
    cleanup();
});


test('should render Socks component', () => { 
    render(<Socks/>);
    const socksElement = screen.getByTestId("socks-1");
    expect(socksElement).toBeInTheDocument();
    expect(socksElement).toHaveTextContent('Socks');
})