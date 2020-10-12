import React from "react";
import "../style/style.css";
import { Spinner } from "react-bootstrap";
import { Nav } from "react-bootstrap";

class Inicio extends React.Component {
  render() {
    return (
      <div className="container-fluid fondoInicio" >
        <div className="row">
          <div className="col-sm-4 col-md-4 col-lg-4"></div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <div className="row">
              <div className="col text-center">
                <br />
                <br />
                <br />
                <img
                  className="icon-p"
                  src="https://raw.githubusercontent.com/Saracas-022/holamundo/main/logotipo.jpeg"
                  alt="logo"
                  width="200"
                  height="150"
                />
              </div>
            </div>
            <div className="row">
              <div className="col text-center">
                <br />
                <br />
                <br />
                <h3>Clic aquí!</h3>
              </div>
            </div>
            <div className="row">
              <div className="col text-center">
                <br />
                <br />
                <br />
                <Nav.Link href="/menu" className="black">
                  <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                  </Spinner>
                </Nav.Link>
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
