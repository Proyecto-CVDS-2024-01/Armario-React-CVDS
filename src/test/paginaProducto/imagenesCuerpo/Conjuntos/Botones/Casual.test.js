import {render, screen, cleanup} from '@testing-library/react'
import Casual from '../../../../../components/paginaProducto/imagenesCuerpo/Conjuntos/Botones/Casual';
import '@testing-library/jest-dom'

afterEach(() => {
    cleanup();
});

test('should render Casual component', () => { 
    render(<Casual/>);
    const CasualElement = screen.getByTestId('casual-1');
    expect(CasualElement).toBeInTheDocument();
    expect(CasualElement).toHaveTextContent('Casual');
    expect(CasualElement).toHaveTextContent('Story');
})