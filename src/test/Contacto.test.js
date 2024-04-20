import {render, screen} from '@testing-library/react'
import Contacto from '../components/Contacto'
import '@testing-library/jest-dom'
test('should render Contacto component', () => { 
    render(<Contacto/>);
    const aboutElement = screen.getByTestId('contacto-1');
    expect(aboutElement).toBeInTheDocument();
    expect(aboutElement).toHaveTextContent('Contacto');
})