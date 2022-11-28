import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './About';
import Topics from './Topics';

const AppRouter = () => {

  return (
    <Routes >
      <Route path='/' element={<h2 style={{ textAlign: 'center' }}>Home</h2>} />
      <Route path='about' element={<About />} />
      <Route path='/topics' element={<Topics />} />

    </Routes >
  );
}

export default AppRouter;