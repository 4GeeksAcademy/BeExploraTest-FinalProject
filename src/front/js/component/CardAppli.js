import React, { useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/CardAppli.css";

const CardAppli = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      {store.my_tracker.map((value, index) => {
        return (
          <div className="card-appli" key={index}>
            <div className="card-body-appli">
              <div className="container-appli row">
                <div className="col">
                  <a href={value.url_to} target="_blank"><h5 className="card-title-appli">
                    {value.scholarship_name}
                  </h5></a>
                  <p className="card-text-appli">
                    <i className="fa-regular fa-circle-check" />
                    Beca {value.coverage} hasta el {value.deadline}
                  </p>

                  <p className="card-text-appli">
                    <i className="fa-solid fa-location-dot" />
                    {value.institution}
                  </p>
                  
                </div>
                <div className="col button-container-appli">
                  <button className="button-area-appli text-white">{value.professional_field}</button>
                  <button className="button-check-appli">Enviada ✔</button>
                </div>
              </div>
            </div>
          </div>)
      })}
    </>
  );
};

export default CardAppli;
