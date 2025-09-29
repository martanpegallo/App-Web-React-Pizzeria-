import React from 'react'
import { createContext, useState } from 'react'
import { pizzaCart } from '../assets/pizzas';

export const CartContext = createContext();

function CartProvider({children}) {
    const [cart, setCart] = useState(pizzaCart);

// Funcion para agregar productos al carrito
    const agregarAlCarrito = (producto) => {
      const productoExistente = cart.find((item) => item.id === producto.id);
      if (productoExistente) {
        const newCart = cart.map((item) =>
          item.id === producto.id
            ? { ...item, count: item.count + 1 }
            : item
        );
        setCart(newCart);
      } else {
// Si es un producto nuevo, se agrega con count 1
        const nuevoProducto = { 
          id: producto.id,
          name: producto.nombre,
          desc: producto.descripcion,
          price: producto.precio,
          img: producto.imagen,
          count: 1 
        };
        setCart([...cart, nuevoProducto]);
      }
    };
// Funcion para aumentar coantidad
    const aumentarCantidad = (id) => {
      const newCart = cart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      );
      setCart(newCart);
    };
// Funcion para disminuir cantidad
    const disminuirCantidad = (id) => {
      const newCart = cart
        .map((item) =>
          item.id === id ? { ...item, count: item.count - 1 } : item
        )
        .filter((item) => item.count > 0);
      setCart(newCart);
    }
// Calculo del total final
    const totalFinal = cart.reduce((acc, item) => acc + item.price * item.count, 0);

  return (
      <CartContext.Provider value={{cart, setCart, agregarAlCarrito, aumentarCantidad, disminuirCantidad, totalFinal}}>
      {children}
      </CartContext.Provider>
  )
}

export default CartProvider
