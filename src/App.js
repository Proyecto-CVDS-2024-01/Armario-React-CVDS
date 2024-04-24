import React from 'react';
import {Testimonios} from './components/Testimonios';
import About from './components/About';
import './App.css'
import Top from './components/Top';

function App() {
  return (
    <div className='App'>
      <div className='Header'>
        <Top />
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
