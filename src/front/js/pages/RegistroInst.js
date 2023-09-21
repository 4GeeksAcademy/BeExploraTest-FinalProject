import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../styles/Registros.css";

const RegistroInst = () => {
  const navigate = useNavigate()
  const { store, actions } = useContext(Context);
  const [passwordVisible, setPasswordVisible] = useState(false); 

  store.insSignup ? navigate('/iniciarsesion_institucion') : null
  const handleChangeSignInInstitution = (e) => {
    actions.handleChange(e, "insSignup")
  }

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div>
      <div
        className=" RegistroUsuarioDiv container d-flex justify-content-center align-items-center"
        style={{
          height: "30rem",
        }}
      >
        <form noValidate onSubmit={e => { e.preventDefault(); actions.signUpInstitution(), e.target.reset() }}>
          <h2 className="tituloRegistro mb-4">Registrar Institución</h2>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Nombre
            </label>
            <input
              name='institutional_name'
              type="name"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Nombre de la Institución"
              onChange={handleChangeSignInInstitution}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Correo Institucional
            </label>
            <input
              name='email'
              type="email"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Ingrese correo Institucional"
              onChange={handleChangeSignInInstitution}

            />
          </div>

          <div className="mb-2">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Contraseña
            </label>
            <input
              name='password'
              type={passwordVisible ? "text" : "password"}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Ingrese una contraseña"
              onChange={handleChangeSignInInstitution}

            />
          </div>
          <div className="mb-2">
              <input
                type="checkbox"
                onClick={togglePasswordVisibility}
              />
              <span> Mostrar</span>
          </div>
          <button type="submit" className="btn btn-primary">
            Registrarse
          </button>
        </form>
      </div>
      <div id="customAlertLogInInst" className="alertMissing container justify-content-center align-items-center"></div>
    </div>
  );
};

export default RegistroInst;
