import {render, screen, cleanup} from '@testing-library/react'
import LogIn from '../../components/paginaPrincipal/LogIn'
import '@testing-library/jest-dom';


afterEach( () => {
    cleanup();
})

test('should render LogIn component', () => { 
    render(<LogIn/>);
    const LogInElement = screen.getByTestId('LogIn-1');
    expect(LogInElement).toBeInTheDocument();
    expect(LogInElement).toHaveTextContent("Inicio Sesion");
});
