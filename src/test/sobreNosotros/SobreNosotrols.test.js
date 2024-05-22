import {render, screen, cleanup} from '@testing-library/react'
import SobreNosotros from '../../components/SobreNosotros/SobreNosotros'
import '@testing-library/jest-dom'

jest.mock('../../components/paginaPrincipal/Top', () => () => <div>Top</div>);

afterEach( () => {
    cleanup();
})

test('should render SobreNosotros component', () => { 
    render(<SobreNosotros />);
    const SobreNosotrosElement = screen.getByTestId('sobrenosotros-1');
    expect(SobreNosotrosElement).toBeInTheDocument();
    expect(SobreNosotrosElement).toHaveTextContent("SOBRE NOSOTROS");

})

test('should render Top', () => {
    render(<SobreNosotros /> );
    expect(screen.getByText('Top')).toBeInTheDocument();

});