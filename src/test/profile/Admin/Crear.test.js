import {render, screen, cleanup} from '@testing-library/react'
import Crear from '../../../components/profile/Admin/Crear'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom';

afterEach( () => {
    cleanup();
})

test('should render Crear component', () => { 
    render(<BrowserRouter><Crear/></BrowserRouter>);
    const CrearElement = screen.getByTestId('Crear-1');
    expect(CrearElement).toBeInTheDocument();

})
