import {render, screen, cleanup} from '@testing-library/react'
import SliderBox from '../../components/paginaPrincipal/SliderBox'
import '@testing-library/jest-dom'

afterEach( () => {
    cleanup();
})

test('should render images in the slider box componets', () => { 
    render(<SliderBox/>);
    const SliderBoxElement = screen.getByTestId('sliderbox-1');
    expect(SliderBoxElement).toBeInTheDocument();
})
