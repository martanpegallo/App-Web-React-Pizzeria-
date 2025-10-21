import React from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Profile = () => {
  const {token, logout, email} = useContext(UserContext);

  return (
    <div>
      <h2 className="fst-italic text-dark m-2"> Tu perfil </h2>
      <img className="w-25 p-3 border border-success img-thumbnail rounded-circle" src="src/assets/icono-perfil-avatar_188544-4755.jpg" alt="foto de usuario" />
      <p className="fst-italic text-dark m-2">Nombre de usuario: {{email}}</p>
      <button className="btn btn-success m-2">Editar Perfil</button>
      <button className="btn btn-success m-2">Ver tus pedidos anteriores</button>
      <button className="btn btn-success m-2"
      onClick={logout}>
      Cerrar sesion</button>
    </div>
  );
};

export default Profile;
