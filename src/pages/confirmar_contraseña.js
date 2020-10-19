import React from "react";
import "../style/style.css";
import Swal from "sweetalert2";;
import { Form, Button } from "react-bootstrap";

class confirmarC extends React.Component {
  _Alerta()  {
    Swal.fire("Tu contraseña se ha recuperado con éxito");;
  }
  render() {
    return (
      <div className="container-fluid ">
        <div className="row">
          <div className="col">
            <img
              className="d-block w-50"
              src="https://raw.githubusercontent.com/Saracas-022/holamundo/main/logotipo.jpeg"
              alt="logo"
              width="100"
              
            />

            <h1 className="titulo-IR">
           
              INGRESA TU NUEVA CONTRASEÑA
            </h1>
            <div>
              <Form >
              <Form.Group
                  controlId="formBasicPassword"
                  className="campo-iniciarS"
                >
                  <Form.Control type="password" placeholder="Contraseña:" />
                </Form.Group>

                <Form.Group
                  controlId="formBasicPassword"
                  className="campo-iniciarS"
                >
                  <Form.Control type="password" placeholder="Confirmar contraseña:" />
                </Form.Group>
                
                <br />
                <br />
                <Button onClick={this._Alerta} href="/iniciarS" className="boton-I">
                 Confirmar
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default confirmarC;
