import Header from "../components/Header";
import CardPizza from "../components/CardPizza";
import { useState, useEffect } from "react";
// import { pizzas } from "../assets/pizzas";



function Home() {

  const [pizzaList, setPizzaList] = useState([]);
  console.log(pizzaList);

  useEffect (() => {
    async function fetchPizzas() {
      const res = await fetch("http://localhost:5000/api/pizzas")
      const data = await res.json()
      setPizzaList(data)
    }
    fetchPizzas()
  }, []);
// 
  return (
    <>
      <Header />
      <div className="container mt-4">
        <h2 className="text-center mb-4">Nuestra seleccion de Pizzas</h2>
        <div className="row">
          {pizzaList.map(pizzas => (
            <CardPizza 
            key={pizzas.id}
            id={pizzas.id}
            nombre={pizzas.name}
            descripcion={pizzas.desc}
            precio={pizzas.price}
            ingredientes={pizzas.ingredients}
            imagen={pizzas.img}
            />
          ))}
          
        </div>
      </div>
    </>
  );
}

export default Home;
