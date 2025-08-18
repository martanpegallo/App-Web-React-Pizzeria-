function CardPizza({name,price,ingredients,img}) {
    return (
        <div className="card m-2 g-1" style={{maxWidth: '540px'}}>
            <div className="row g-0">
                <div className="col-md-12">
                    <img src={img} className="img-fluid rounded-start" alt={name}/>
                </div>
                <div className="col-md-12">
                    <div className="card-body">
                        <h5 className="card-title fs-2">{name}</h5>
                        <p className="card-text">{ingredients}</p>
                        <p className="card-text fs-4"><small className="text-muted">Precio: ${price.toLocaleString('es-CL')}</small></p>
                    </div>
                    <div>
                        <button type="button" className="btn btn-outline-secondary btn-sm m-1">
                            <a className="nav-link active" aria-current="page" href="#">Agregar al carrito</a>
                        </button>
                        <button type="button" className="btn btn-outline-secondary btn-sm m-1">
                            <a className="nav-link active" aria-current="page" href="#">ver mas</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CardPizza;