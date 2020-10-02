import React from "react";
import "../style/style.css";

class perfil extends React.Component {
  render() {
    return (
      <div className="container-fluid ">
        <div className="row">
          <div className="col">
            <h1>Hola, soy la vista de menú</h1>
            <button type="button" className="btn btn-dark">
              <a href="/registro">Devolver</a>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default perfil;
