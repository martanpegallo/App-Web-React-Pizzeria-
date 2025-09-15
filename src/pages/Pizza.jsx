import React from "react";
import { useState, useEffect } from "react";

const Pizza = () => {
  const [pizza, setPizza] = useState([]);
  console.log(pizza);

  useEffect(() => {
    async function fetchPizza() {
      const res = await fetch("http://localhost:5000/api/pizzas/p001");
      const data = await res.json();
      setPizza(data);
    }
    fetchPizza();
  }, []);

  return (
    <div>
      <div
        key={pizza.id}
        className="card g-1 mx-auto m-4 "
        style={{ maxWidth: "520px" }}
      >
        <div className="row g-0">
          <div className="col-md-12">
            <img
              src={pizza.img}
              className="img-fluid rounded-start"
              alt={pizza.name}
            />
          </div>
          <div className="col-md-12">
            <div className="card-body">
              <h5 className="card-title fs-2">{pizza.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{pizza.desc}</h6>
              <ul className="border-top">
                {pizza.ingredients &&
                  pizza.ingredients.map((ingredient, index) => (
                    <li key={index} className="list-group list-group-flush">
                      {ingredient}
                    </li>
                  ))}
              </ul>
            </div>
            <div className="border-top">
              <p className="card-text fs-4">
                <small className="text-muted">
                  Precio: ${pizza.price && pizza.price.toLocaleString("es-CL")}
                </small>
              </p>
              <button
                type="button"
                className="btn btn-outline-secondary btn-sm m-1"
              >
                <a className="nav-link active" aria-current="page" href="#">
                  {" "}
                  Agregar al carrito
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
