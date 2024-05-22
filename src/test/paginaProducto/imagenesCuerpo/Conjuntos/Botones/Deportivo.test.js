import {render, screen, cleanup} from '@testing-library/react'
import Deportivo from '../../../../../components/paginaProducto/imagenesCuerpo/Conjuntos/Botones/Deportivo';
import '@testing-library/jest-dom'

afterEach(() => {
    cleanup();
});

test('should render Deportivo component', () => { 
    render(<Deportivo/>);
    const DeportivoElement = screen.getByTestId('Deportivo-1');
    expect(DeportivoElement).toBeInTheDocument();
    expect(DeportivoElement).toHaveTextContent('Deportivo');
    expect(DeportivoElement).toHaveTextContent('Story');
})