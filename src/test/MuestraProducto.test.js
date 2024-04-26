import {render, screen} from '@testing-library/react'
import AboutUs from '../components/AboutUs'
import '@testing-library/jest-dom'
test('should render AboutUs component', () => { 
    render(<AboutUs/>);
    const aboutElement = screen.getByTestId('aboutus-1');
    expect(aboutElement).toBeInTheDocument();
    expect(aboutElement).toHaveTextContent('Una pequeña muestra de nuestra producto');
})