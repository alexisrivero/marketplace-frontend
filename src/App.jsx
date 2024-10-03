import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './Componentes/Navbar';
import Carrusel from './Componentes/Carrusel';
import SignUp from './Componentes/SignUp';


function App() {

  const slides = [

  ]

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Carrusel slides={slides} />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  ); //tengo que retornar dentro de app el componente en forma de etiqueta html siempre
}

export default App
