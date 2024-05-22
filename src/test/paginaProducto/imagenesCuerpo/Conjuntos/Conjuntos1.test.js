import {render, screen, cleanup} from '@testing-library/react'
import Conjuntos1 from '../../../../components/paginaProducto/imagenesCuerpo/Conjuntos/Conjuntos1';
import '@testing-library/jest-dom'

afterEach(() => {
    cleanup();
});

test('should render conjuntos1 component', () => { 
    render(<Conjuntos1/>);
    const conjuntos1Element = screen.getByTestId('Conjuntos1-1');
    expect(conjuntos1Element).toBeInTheDocument();

})