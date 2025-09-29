import Header from "../components/Header";
import CardPizza from "../components/CardPizza";
import { useState, useEffect, useContext } from "react";
import { APIContext } from "../context/APIContext";
// import { pizzas } from "../assets/pizzas";

function Home() {
  const { pizzaList } = useContext(APIContext);
  console.log(pizzaList);

  // const [pizzaList, setPizzaList] = useState([]);
  // console.log(pizzaList);

  // useEffect (() => {
  //   async function fetchPizzas() {
  //     try {
  //       const res = await fetch("http://localhost:5000/api/pizzas")
  //       const data = await res.json()
  //       setPizzaList(data)
  //     } catch (error) {
  //       console.error("Error fetching pizza data:", error);
  //     }
  //   }
  //   fetchPizzas()
  // }, []);

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
