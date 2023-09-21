import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/perfil.css";
import CardAppli from "../component/CardAppli";

const Tracker = () => {
  const { store, actions } = useContext(Context);
  const [noScholarshipsMessage, setNoScholarshipsMessage] = useState(""); 

  useEffect(() => {
    if (store.my_tracker.length == 0) {
      setNoScholarshipsMessage("Ninguna beca guardada");
    } else {
      setNoScholarshipsMessage("");
    }
  }, [store.my_tracker]);

  return (
    <>
      <div className="container justify-content-column align-items-center contain">
        <CardAppli />
        <div className="d-flex flex-column align-items-center text-dark">
          <p className="mt-5 no-scholarships-message">{noScholarshipsMessage}</p>
          <Link to="/">
            <span className="btn btn-primary tracker__button">Ir a página principal</span>
          </Link>
        </div>


      </div>
    </>
  );
};

export default Tracker;
