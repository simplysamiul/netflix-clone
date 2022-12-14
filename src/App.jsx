import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './app.scss';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Watch from './pages/watch/Watch';

const App = () => {
  const user = true;
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element = 
          {user ? <Home /> : <Navigate to="/register" />} />
          <Route path="/register" element = 
          {!user ? <Register /> : <Navigate to="/" />} />
          <Route path="/login" element = 
          {!user ? <Login /> : <Navigate to="/" />} />
          {user && (
          <>
          <Route path="/movies" element = {<Home type="movies" />} />
          <Route path="/series" element = {<Home type="series" />} />
          <Route path="/watch" element = {<Watch />} />
          </>
          )}
        </Routes>
      </BrowserRouter>
  );
};

export default App;