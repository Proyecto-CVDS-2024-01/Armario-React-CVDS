import {render, screen, cleanup} from '@testing-library/react'
import Pants from '../../../components/paginaProducto/imagenesCuerpo/Pants'
import '@testing-library/jest-dom'

afterEach(() => {
    cleanup();
});

test('should render Pants component', () => { 
    render(<Pants/>);
    const pantsElement = screen.getByTestId("pants-1");
    expect(pantsElement).toBeInTheDocument();

})