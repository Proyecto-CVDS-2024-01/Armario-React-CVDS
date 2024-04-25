import React from 'react';
import {Testimonios} from './components/Testimonios';
import About from './components/About';
import Top from './components/Top';
import Slogan from './components/Slogan';
import './App.css'


function App() {
  return (
    <div className='App'>
      <div className='Header'>
        <Top />
        <Slogan />
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
