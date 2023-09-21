import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../styles/Registros.css";

const IniciarSesionInstitucion = () => {
  const navigate = useNavigate()
  const { store, actions } = useContext(Context);
  const [passwordVisible, setPasswordVisible] = useState(false); 

  const handleChangeLoginInstitution = (e) => {
    actions.handleChange(e, "insLogin")
  }

  store.insLoged ? navigate('/') : null

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div>
      <div
        className=" RegistroUsuarioDiv container d-flex justify-content-center align-items-center"
        style={{
          height: "24rem",
        }}
      >
        <form noValidate onSubmit={e => { e.preventDefault(); actions.logInInstitution() }} >
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
              onChange={handleChangeLoginInstitution}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Contraseña
            </label>
            <input
              name="password"
              type={passwordVisible ? "text" : "password"}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Ingrese su contraseña"
              onChange={handleChangeLoginInstitution}
            />
          </div>
          <div className="mb-3">
              <input
                type="checkbox"
                onClick={togglePasswordVisibility}
              />
              <span> Mostrar</span>
          </div>
          <button type="submit" className="btn btn-primary">
            Iniciar Sesión
          </button>
        </form>
      </div>
      <div id="customAlertLogInInst" className="alertMissing container justify-content-center align-items-center"></div>
    </div>
  );
};

export default IniciarSesionInstitucion;
