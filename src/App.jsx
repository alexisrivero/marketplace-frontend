import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './Views/NavBar/Navbar';
import Home from './Views/Home/Home';
import SignUp from './Views/SignUp/SignUp';
import SignIn from './Views/SignIn/SignIn';
import Footer from './Views/Footer/Footer';
import Contacto from './Views/Contacto/Contacto';
import AboutUs from './Views/AboutUs/AboutUs';
import Product from './Views/Product/Product';
import Category from './Views/Category/Category';
import Carrito from './Views/Carrito/Carrito';
import PrivateRoute from './Componentes/PrivateRoute/PrivateRoute';
import User from './Views/User/User';
import AddProduct from './Views/Admin/AddProduct';
import EditProduct from './Views/Admin/EditProduct/EditProduct';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/contact" element={<Contacto />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/category/:category" element={<Category />} />
        <Route path="/carrito" element={<PrivateRoute />}>
          <Route path='' element={<Carrito />} />
        </Route>
        <Route path="/user" element={<PrivateRoute />}>
          <Route path='' element={<User />} />
        </Route>
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/edit-product" element={<EditProduct />} />

      </Routes>
      <Footer />
    </>
  ); 
}

export default App
