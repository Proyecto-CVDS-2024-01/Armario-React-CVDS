import {render, screen, cleanup} from '@testing-library/react'
import Prueba from '../../components/paginaPrincipal/Prueba'
import '@testing-library/jest-dom'

afterEach( () => {
    cleanup();
})

test('should render Prueba component', () => { 
    render(<Prueba/>);
    const PruebaElement = screen.getByTestId('prueba-1');
    expect(PruebaElement).toBeInTheDocument();
    expect(PruebaElement).toHaveTextContent('Tu armario virtual está esperando para simplificar tu vida diaria. Organiza tu ropa, descubre nuevos looks y ahorra tiempo cada mañana.');
    expect(PruebaElement).toHaveTextContent('¡Qué esperas!');
    expect(PruebaElement).toHaveTextContent('Pruebalo Ahora');
});