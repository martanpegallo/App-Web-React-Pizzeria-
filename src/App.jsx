import React from 'react'
import './App.css'
import './index.css' 
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route, Navigate} from 'react-router-dom';
import { UserContext } from './context/UserContext';

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
  const {token} = React.useContext(UserContext);
  return (
    <>
        <Navbar />
        <Routes>
          <Route path ='/' element ={<Home />}></Route>
          <Route path ='/register' element ={token? <Navigate to={'/'} replace /> : <RegisterPage />}></Route>
          <Route path ='/login' element ={token? <Navigate to={'/'} replace /> : <LoginPage />}></Route>
          <Route path ='/cart' element ={<Cart />}></Route>
          <Route path ='/pizza/:id' element={<Pizza />}></Route>
          <Route path ='/profile' element={token? <Profile /> : <LoginPage/> }></Route>
          <Route path ='*' element={<NotFound />}></Route>
        </Routes>
        <Footer />
    </>
  )
}

export default App