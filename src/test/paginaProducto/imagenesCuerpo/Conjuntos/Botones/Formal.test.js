import {render, screen, cleanup} from '@testing-library/react'
import Formal from '../../../../../components/paginaProducto/imagenesCuerpo/Conjuntos/Botones/Formal';
import '@testing-library/jest-dom'

afterEach(() => {
    cleanup();
});

test('should render Formal component', () => { 
    render(<Formal/>);
    const FormalElement = screen.getByTestId('Formal-1');
    expect(FormalElement).toBeInTheDocument();
    expect(FormalElement).toHaveTextContent('Formal');
    expect(FormalElement).toHaveTextContent('Story');
})