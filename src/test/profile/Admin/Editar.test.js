import {render, screen, cleanup} from '@testing-library/react'
import Editar from '../../../components/profile/Admin/Editar'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom';

afterEach( () => {
    cleanup();
})

test('should render Editar component', () => { 
    render(<BrowserRouter><Editar/></BrowserRouter>);
    const EditarElement = screen.getByTestId('Editar-1');
    expect(EditarElement).toBeInTheDocument();

})


