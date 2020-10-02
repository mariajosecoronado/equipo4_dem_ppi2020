import React from "react";
import "../style/style.css";

class IniciarS extends React.Component {
  render() {
    return (
      <div className="container-fluid ">
        <div className="row">
          <div className="col">
            <h1>soy la vista de iniciar sesión</h1>
            <button type="button" className="btn btn-dark">
              <a href="/inicio">Devolver</a>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default IniciarS;
