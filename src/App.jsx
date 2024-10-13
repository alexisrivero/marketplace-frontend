import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './Views/NavBar/Navbar';
import Home from './Views/Home/Home';
import SignUp from './Views/SignUp/SignUp';
import SignIn from './Views/SignIn/SignIn';
import Footer from './Views/Footer/Footer';
import Contacto from './Views/Contacto/Contacto';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/contact" element={<Contacto />} />
      </Routes>
      <Footer />
    </>
  ); 
}

export default App
