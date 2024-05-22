import {render, cleanup} from '@testing-library/react'
import SliderBox from '../../components/paginaPrincipal/SliderBox'
import '@testing-library/jest-dom'

afterEach( () => {
    cleanup();
})


test('should render SliderBox component with UncontrolledCarousel containing images', () => {
    const { container } = render(<SliderBox />);
    // Verifica que el UncontrolledCarousel contiene imágenes
    const images = container.querySelectorAll('img');
    expect(images.length).toBeGreaterThan(0); 
    images.forEach(img => {
        expect(img).toHaveAttribute('src');
    });
});