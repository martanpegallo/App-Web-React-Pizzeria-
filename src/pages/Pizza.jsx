import React from "react";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link, useParams } from "react-router-dom";

const Pizza = () => {
  const { agregarAlCarrito } = useContext(CartContext);
  const [pizza, setPizza] = useState([]);
  const { id } = useParams();
  console.log(pizza);

  useEffect(() => {
    async function fetchPizza() {
      try {
        const res = await fetch(`http://localhost:5000/api/pizzas/${id}`);
        const data = await res.json();
        setPizza(data);
      } catch (error) {
        console.error("Error fetching pizza data:", error);
      }
    }
    fetchPizza();
  }, [id]);

  if (!pizza) {
    return <div>Cargando...</div>;
  }
  const { name, desc, price, ingredients, img } = pizza;

  return (
    <div>
      <Link to={"/"} className="btn btn-outline-secondary m-4"> Volver</Link>
      <div
        key={id}
        className="card g-1 mx-auto m-4 "
        style={{ maxWidth: "520px" }}
      >
        <div className="row g-0">
          <div className="col-md-12">
            <img
              src={img}
              className="img-fluid rounded-start"
              alt={name}
            />
          </div>
          <div className="col-md-12">
            <div className="card-body">
              <h5 className="card-title fs-2">{name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{desc}</h6>
              <ul className="border-top">
                {ingredients &&
                  ingredients.map((ingredient, index) => (
                    <li key={index} className="list-group list-group-flush">
                      {ingredient}
                    </li>
                  ))}
              </ul>
            </div>
            <div className="border-top">
              <p className="card-text fs-4">
                <small className="text-muted">
                  Precio: ${price && price.toLocaleString("es-CL")}
                </small>
              </p>
              <button
                type="button"
                className="btn btn-outline-secondary btn-sm m-1"
                onClick={() => agregarAlCarrito({ id, nombre, descripcion, precio, ingredientes, imagen })}
              >
                <Link className="nav-link active" aria-current="page" to={"/cart"}>
                  {" "}
                  Agregar al carrito
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
