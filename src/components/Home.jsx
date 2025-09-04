import Header from "./Header";
import CardPizza from "./CardPizza";
import { pizzas } from "../assets/pizzas";

function Home() {
  return (
    <>
      <Header />
      <div className="container mt-4">
        <h2 className="text-center mb-4">Nuestra seleccion de Pizzas</h2>
        <div className="row">
          {pizzas.map(pizzas => (
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
