import {render, screen, cleanup} from '@testing-library/react'
import Contactanos from '../../components/SobreNosotros/contactanos'
import '@testing-library/jest-dom'

jest.mock('../../components/paginaPrincipal/Top', () => () => <div>Top</div>);

afterEach( () => {
    cleanup();
})

test('should render contactanos component', () => { 
    render(<Contactanos />);
    const contactanosElement = screen.getByTestId('contactanos-1');
    expect(contactanosElement).toBeInTheDocument();

})

test('should render Top', () => {
    render(<Contactanos /> );
    expect(screen.getByText('Top')).toBeInTheDocument();

});