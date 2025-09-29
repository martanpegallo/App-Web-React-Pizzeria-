import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CardPizza({ id, nombre, descripcion, precio, ingredientes, imagen }) {

  const { agregarAlCarrito } = useContext(CartContext);
  
  return (
    <div key={id} className="card m-2 g-1" style={{ maxWidth: "320px" }}>
      <div className="row g-0">
        <div className="col-md-12">
          <img src={imagen} className="img-fluid rounded-start" alt={nombre} />
        </div>
        <div className="col-md-12">
          <div className="card-body">
            <h5 className="card-title fs-2">{nombre}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{descripcion}</h6>
            <ul>
              {ingredientes.map((ingrediente, index) => (
                <li key={index} className="list-group list-group-flush">
                  {ingrediente}
                </li>
              ))}
            </ul>
            <p className="card-text fs-4">
              <small className="text-muted">
                Precio: ${precio.toLocaleString("es-CL")}
              </small>
            </p>
          </div>
          <div>
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
            <button
              type="button"
              className="btn btn-outline-secondary btn-sm m-1"
            >
              <Link className="nav-link active" aria-current="page" to={"/pizza/" + id}>
                {" "} 
                ver mas
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardPizza;
