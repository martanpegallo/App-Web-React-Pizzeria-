import React from 'react'
import { pizzaCart } from '../assets/pizzas';
import { createContext, useState, useEffect } from 'react'

export const APIContext = createContext();

function APIProvider({ children }) {

    const [pizzaList, setPizzaList] = useState([]);
    console.log(pizzaList);
  
    useEffect (() => {
      async function fetchPizzas() {
        try {
          const res = await fetch("http://localhost:5000/api/pizzas")
          const data = await res.json()
          setPizzaList(data)
        } catch (error) {
          console.error("Error fetching pizza data:", error);
        }
      }
      fetchPizzas()
    }, []);
  

  return (
    <APIContext.Provider value={{pizzaList, setPizzaList}}>
      {children}
    </APIContext.Provider>
  )
}

export default APIProvider;
