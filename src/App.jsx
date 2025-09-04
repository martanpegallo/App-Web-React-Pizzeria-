import React from 'react'
import './App.css'
import './index.css' 
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
// import Home from './components/Home'
import Footer from './components/Footer'
// import RegisterPage from './components/RegisterPage'
// import LoginPage from './components/LoginPage'
import Cart from './components/Cart'

function App() {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      {/* <RegisterPage /> */}
      {/* <LoginPage /> */}
      <Cart />
      <Footer />
    </>
  )
}

export default App