import {useState} from "react"
import { pizzaCart, pizzas } from "../assets/pizzas"
import { faDiagramNext } from "@fortawesome/free-solid-svg-icons/faDiagramNext";

function cart() {
const [cart, setCart] = useState(pizzaCart);

const handleQuantityChange = (id, delta) => {
  setCart((prevCart) =>
    prevCart.map((item) =>
      item.id === id ? { ...item, count: Math.max(1, item.count + delta) } : item
    )
  );
};

const aumentarCantidad = () => {
  handleQuantityChange(pizzaCart[0].id, 1);
}
const disminuirCantidad = () => {
  handleQuantityChange(pizzaCart[0].id, -1);
}

const cantidad = cart[0].count;

const subtotal = cart[0].price * cantidad;
const total = cart.reduce((acc, item) => acc + item.price * item.count, 0);


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
          {pizzaCart.map((pizza) => (
            <tr key={pizza.id}>
              <td>
                <img
                  src={pizza.img}
                  alt={pizza.name}
                  style={{ width: "50px", height: "50px", marginRight: "10px", borderRadius: "5px" }}
                />
                {pizza.name}
              </td>
              <td> 
                <button type="button" className="btn btn-danger mx-3" onClick={disminuirCantidad}> - </button>
                {cantidad}
                <button type="button" className="btn btn-success mx-3" onClick={aumentarCantidad}> + </button>
              </td>
              <td>${pizza.price.toLocaleString("es-CL")}</td>
              <td>${subtotal.toLocaleString("es-CL")}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h4>Total: ${total.toLocaleString("es-CL")}</h4>
      <button type="button" className="btn btn-success">
        Confirmar Pedido
      </button>
    </div>
  )
}

export default cart
