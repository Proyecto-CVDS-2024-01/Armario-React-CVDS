import {render, screen, cleanup} from '@testing-library/react'
import Slogan from '../../components/paginaPrincipal/Slogan'
import '@testing-library/jest-dom'

afterEach( () => {
    cleanup();
})

test('should render Slogano component', () => { 
    render(<Slogan/>);
    const SloganElement = screen.getByTestId('Slogan-1');
    expect(SloganElement).toBeInTheDocument();
})

