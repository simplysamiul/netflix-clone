import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './app.scss';
import Home from './home/Home';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;