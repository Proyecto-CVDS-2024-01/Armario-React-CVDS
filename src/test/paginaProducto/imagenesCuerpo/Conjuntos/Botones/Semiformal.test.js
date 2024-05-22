import {render, screen, cleanup} from '@testing-library/react'
import Semiformal from '../../../../../components/paginaProducto/imagenesCuerpo/Conjuntos/Botones/Semiformal';
import '@testing-library/jest-dom'

afterEach(() => {
    cleanup();
});

test('should render Semiformal component', () => { 
    render(<Semiformal/>);
    const SemiformalElement = screen.getByTestId('Semiformal-1');
    expect(SemiformalElement).toBeInTheDocument();
    expect(SemiformalElement).toHaveTextContent('Semiformal');
    expect(SemiformalElement).toHaveTextContent('Story');
})