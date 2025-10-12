import { useState } from "react";
import { pizzaCart, pizzas } from "../assets/pizzas";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

const cart = () => {
  const { cart, aumentarCantidad, disminuirCantidad, totalFinal } =
    useContext(CartContext);

  const { token } = useContext(UserContext);

  return (
    <div className="container mt-3 mb-5 p-3 border rounded shadow">
      <h2>Carrito de Compras</h2>
      <h3>Detalle del pedido:</h3>
      <table className="table table-striped mt-3 mb-3 border rounded">
        <thead>
          <tr>
            <th scope="col">Producto</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Precio Unitario</th>
            <th scope="col">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {
          cart.lenght === 0 ?(
            <tr>
              <td colSpan="4" className="text-center">
                <p> No hay productos en el carrito </p> 
              </td>
            </tr>
          ):(
          cart.map((item) => (
            <tr key={item.id}>
              <td>
                <img
                  src={item.img}
                  alt={item.name}
                  style={{
                    width: "50px",
                    height: "50px",
                    marginRight: "10px",
                    borderRadius: "5px",
                  }}
                />
                {item.name}
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger mx-3"
                  onClick={() => disminuirCantidad(item.id)}
                >
                  {" "}
                  -{" "}
                </button>
                {item.count}
                <button
                  type="button"
                  className="btn btn-success mx-3"
                  onClick={() => aumentarCantidad(item.id)}
                >
                  {" "}
                  +{" "}
                </button>
              </td>
              <td>${item.price.toLocaleString("es-CL")}</td>
              <td>${(item.price * item.count).toLocaleString("es-CL")}</td>
            </tr>
          )))}
        </tbody>
      </table>
      <h4>Total: ${totalFinal.toLocaleString("es-CL")}</h4>
      <button type="button" className="btn btn-success"
      disabled={cart.length === 0 || !token}>
        Confirmar Pedido
      </button>
      {!token && (
        <p className="text-danger mt-2">
          Debes iniciar sesión para confirmar tu pedido.
        </p>
      )}
    </div>
  );
};

export default cart;
