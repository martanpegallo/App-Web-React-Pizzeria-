import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter} from 'react-router-dom';
import CartProvider from './context/CartContext.jsx';
import APIProvider from './context/APIContext.jsx';

createRoot(document.getElementById('root')).render(
<BrowserRouter>
    <APIProvider>
    <CartProvider>
        <App />
    </CartProvider>
    </APIProvider>
</BrowserRouter>
)
