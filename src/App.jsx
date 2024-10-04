import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './Componentes/NavBar/Navbar';
import Home from './Componentes/Home/Home';
import SignUp from './Componentes/SignUp/SignUp';
import SignIn from './Componentes/SignIn/SignIn';

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </Router>
  ); 
}

export default App
