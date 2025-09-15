import React from "react";

const Profile = () => {
  return (
    <div>
      <h2 className="fst-italic text-dark m-2"> Tu perfil </h2>
      <img className="w-25 p-3 border border-success img-thumbnail rounded-circle" src="src/assets/icono-perfil-avatar_188544-4755.jpg" alt="foto de usuario" />
      <p className="fst-italic text-dark m-2">Nombre de usuario: usuario@mail.com</p>
      <button className="btn btn-success m-2">Editar Perfil</button>
      <button className="btn btn-success m-2">Ver tus pedidos anteriores</button>
      <button className="btn btn-success m-2">Cerrar sesion</button>
    </div>
  );
};

export default Profile;
