import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  )
}

export default App
