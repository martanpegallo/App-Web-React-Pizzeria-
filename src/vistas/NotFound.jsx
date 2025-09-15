import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
  let navigate = useNavigate();

  const [clima, setClima] = useState([]);
  console.log(clima);

  useEffect(() => {
    async function fetchClima() {
      const res = await fetch ("https://api.gael.cloud/general/public/clima")
      const data = await res.json()
      setClima(data)
    }
    fetchClima();
  }, []);

  return (
    <div>
      <strong className="fs-1 m-2 "> 404 Not Found</strong>
      <p className="m-2">
        Ups¡ No sabemos lo que estaba buscando, pero esta pagina no existe</p>
      <p className="m-2"> 
        Sin embargo le dejamos el estado del clima de ciudades de Chile al azar, mientras decide que hacer</p>
      <div className="d-flex flex-wrap justify-content-center">
        {clima.map((ciudad) => (
          <div key={ciudad.ID} className="card m-2" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">{ciudad.Estacion}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{ciudad.Estado}</h6>
              <img src={ciudad.Icono} alt="" />
              <p className="card-text">
                Temperatura: {ciudad.Temp}°C
                <br />
                Humedad: {ciudad.Humedad}%
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <button className="btn btn-danger m-2"> 
        <Link to={"/"} className="text-white text-decoration-none">
          Ir al Inicio
        </Link>
      </button>
    </div>
  );
};

export default NotFound;
