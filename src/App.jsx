import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './Componentes/NavBar/Navbar';
import Carrusel from './Componentes/Carrusel';
import SignUp from './Componentes/SignUp/SignUp';
import SignIn from './Componentes/SignIn/SignIn';

function App() {

  const slides = [

  ]

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Carrusel slides={slides} />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </Router>
  ); //tengo que retornar dentro de app el componente en forma de etiqueta html siempre
}

export default App
