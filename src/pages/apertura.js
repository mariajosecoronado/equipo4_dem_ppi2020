import React from "react";
import "../style/style.css";
import {} from "react-bootstrap";

class Inicio extends React.Component {
  render() {
    return (
      <div className="container-fluid fondoInicio">
        <div className="row">
          <div className="col-sm-4 col-md-4 col-lg-4"></div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <div className="row">
              <div className="col text-center">
                <br />
                <br />
                <br />
                <h1>COOK TO WORK</h1>
              </div>
            </div>
            <div className="row">
              <div className="col text-center">
                <br />
                <br />
                <br />
                <h3>Click aquí!</h3>
              </div>
            </div>
            <div className="row">
              <div className="col text-center">
                <br />
                <br />
                <br />
                <button type="button" className="btn btn-dark">
                  <a href="/menu">Inicio</a>
                </button>
                <br />
                <br />
                <br />
              </div>
            </div>
            <div className="row">
              <div className="col text-center">
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </div>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Inicio;
