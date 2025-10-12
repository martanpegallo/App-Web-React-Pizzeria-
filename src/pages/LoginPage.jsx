import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const { login } = useContext(UserContext);
 
  const validarDatos = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("Todos los campos son obligatorios");
      setError(true);
      return;
    }
    if (password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres");
      setError(true);
      return;
    }
    alert("Usuario logueado exitosamente");
    setEmail("");
    setPassword("");
    setError(false);
    login(); // Actualiza el estado de autenticación en el contexto

  };
  return (
    <form
      className="formulario container m-3 p-5 border border-2 rounded shadow bg-success text-dark"
      onSubmit={validarDatos}
    >
      <h2 className="text-center mb-4">Login</h2>
      <div className="form-group mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Correo electronico
        </label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control w-50 align-middle"
          placeholder="nombre@mail.com"
        ></input>
      </div>
      <div className="form-group mb-3">
        <label for="exampleInputPassword1" className="form-label">
          Contraseña
        </label>
        <input
          type="text"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control w-50"
          placeholder="minimo 6 caracteres"
        ></input>
      </div>
      <button type="submit" className="btn btn-dark m-3 shadow"
      onClick={Login}>
        Login
      </button>
    </form>
  );
}

export default Login;
