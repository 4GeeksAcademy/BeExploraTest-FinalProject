import React from "react";
import "../../styles/Registros.css";

const RegistroUsuario = () => {
  return (
    <div
      className=" RegistroUsuarioDiv container d-flex justify-content-center align-items-center"
      style={{
        height: "32rem",
      }}
    >
      <form>
        <h2 className="tituloRegistro mb-4">Registrar Usuario</h2>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Nombre
          </label>
          <input
            type="name"
            class="form-control"
            id="exampleInputEmail1"
            placeholder="Ingrese su Nombre"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Apellido
          </label>
          <input
            type="lastName"
            class="form-control"
            id="exampleInputEmail1"
            placeholder="Ingrese su Apellido"
          />
        </div>

        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Correo
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Ingrese su correo"
          />
        </div>

        <div class="mb-4">
          <label for="exampleInputPassword1" class="form-label">
            Contraseña
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Ingrese una contraseña"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default RegistroUsuario;