import React from 'react';
import {Testimonios} from './components/Testimonios';
import About from './components/About';
import Top from './components/Top';
import { SliderBox } from './components/SliderBox';
import './App.css'


function App() {
  return (
    <div className='App'>
      <div className='Header'>
        <Top />
      </div>
      <div className='ImagesHeader'>
        <SliderBox />
      </div>
      <div className='Body'>
        <About />
      </div>
      <div className='Footer'>
        <Testimonios />
      </div>
    </div>
  );
}

export default App;
