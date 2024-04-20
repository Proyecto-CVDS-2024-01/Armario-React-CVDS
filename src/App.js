import React from 'react';
import Testimonios from './components/Testimonios';
import About from './components/About';
import './App.css'
import Top from './components/Top';

function App() {
  return (
    <>
      <div>
        <Top />
      </div>
      <div className='App'>
        <About />
        <Testimonios/>
      </div>
    </>
  );
}

export default App;
