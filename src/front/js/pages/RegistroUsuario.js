import React, { useContext, useState } from 'react'
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../styles/Registros.css";

const RegistroUsuario = () => {
  const navigate = useNavigate()
  const { store, actions } = useContext(Context);
  const [passwordVisible, setPasswordVisible] = useState(false); 

  store.signup ? navigate('/iniciarsesion') : null
  const handleChangeSignIn = (e) => {
    actions.handleChange(e, "signup")
  }

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div>
      <div
        className=" RegistroUsuarioDiv container d-flex justify-content-center align-items-center"
        style={{
          height: "32rem",
        }}
      >
        <form noValidate onSubmit={e => { e.preventDefault(); actions.signUpUser(), e.target.reset() }}>
          <h2 className="tituloRegistro mb-4">Registrar Usuario</h2>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Nombre
            </label>
            <input
              name='name'
              type="name"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Ingrese su Nombre"
              onChange={handleChangeSignIn}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Apellido
            </label>
            <input
              name="last_name"
              type="lastName"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Ingrese su Apellido"
              onChange={handleChangeSignIn}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Correo
            </label>
            <input
              name='email'
              type="email"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Ingrese su correo"
              onChange={handleChangeSignIn}
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
              onChange={handleChangeSignIn}
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
      <div id="customAlertSignUp" className="alertMissing container justify-content-center align-items-center"></div>
    </div>
  );
};

export default RegistroUsuario;
