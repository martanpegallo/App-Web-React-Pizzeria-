import React from 'react'
import './App.css'
import './index.css' 
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import Cart from './pages/Cart'
import Pizza from './pages/Pizza';
import NotFound from './vistas/NotFound';
import Profile from './pages/Profile';

function App() {
  return (
    <>
      
        <Navbar />
        <Routes>
          <Route path ='/' element ={<Home />}></Route>
          <Route path ='/register' element ={<RegisterPage />}></Route>
          <Route path ='/login' element ={<LoginPage />}></Route>
          <Route path ='/cart' element ={<Cart />}></Route>
          <Route path ='/pizza/p001' element={<Pizza />}></Route>
          <Route path ='/profile' element={<Profile />}></Route>
          <Route path ='*' element={<NotFound />}></Route>
        </Routes>
        <Footer />
    </>
  )
}

export default App