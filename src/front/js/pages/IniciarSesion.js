import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../styles/Registros.css";

const IniciarSesion = () => {
  const navigate = useNavigate()
  const { store, actions } = useContext(Context);
  const handleChangeLogin = (e) => {
    actions.handleChange(e, "login")
  }
  store.isloged ? navigate('/') : null
  return (
    <div>
      <div
        className=" RegistroUsuarioDiv container d-flex justify-content-center align-items-center"
        style={{
          height: "24rem",
        }}
      >
        <form noValidate onSubmit={e => { e.preventDefault(); actions.logInUser() }}>
          <h2 className="tituloRegistro mb-4">Iniciar Sesión</h2>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Correo
            </label>
            <input
              name="email"
              type="email"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Ingrese su correo"
              onChange={handleChangeLogin}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Contraseña
            </label>
            <input
              name="password"
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Ingrese su contraseña"
              onChange={handleChangeLogin}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Iniciar Sesión
          </button>
        </form>
      </div>
      <div id="customAlertLogIn" className="alertMissing container justify-content-center align-items-center"></div>
    </div>
  );
};

export default IniciarSesion;
