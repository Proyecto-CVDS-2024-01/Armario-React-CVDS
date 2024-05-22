import {render, screen, cleanup} from '@testing-library/react'
import Conjuntos2 from '../../../../components/paginaProducto/imagenesCuerpo/Conjuntos/Conjuntos2';
import '@testing-library/jest-dom'

afterEach(() => {
    cleanup();
});

test('should render conjuntos1 component', () => { 
    render(<Conjuntos2/>);
    const conjuntos2Element = screen.getByTestId('Conjuntos1-1');
    expect(conjuntos2Element).toBeInTheDocument();
})