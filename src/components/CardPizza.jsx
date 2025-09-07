function CardPizza({ id, nombre, descripcion, precio, ingredientes, imagen }) {
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
            >
              <a className="nav-link active" aria-current="page" href="#">
                {" "}
                Agregar al carrito
              </a>
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-sm m-1"
            >
              <a className="nav-link active" aria-current="page" href="#">
                ver mas
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardPizza;
