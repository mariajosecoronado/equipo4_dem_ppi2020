import React from "react";
import "../style/style.css";
import { Form, Button } from "react-bootstrap";

class registro extends React.Component {
  render() {
    return (
      <div className="container-fluid ">
        <div className="row">
          <div className="col">
            <h1>
              BIENVENID@ A COOK TO WORK <br />
              REGISTRESE AQUÍ
            </h1>
            <div>
              <Form>
                <Form.Group  controlId="formBasicEmail">
                  <Form.Label>NOMBRE</Form.Label>
                  <Form.Control className="campo-registro" type="email" placeholder="Ingrese su nombre" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>APELLIDO</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Ingrese su apellido"
                  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>CORREO</Form.Label>
                  <Form.Control type="email" placeholder="Ingrese su nombre" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>CONTRASEÑA</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Ingrese su contraseña"
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>CONFIRMAR CONTRASEÑA</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirme su contraseña"
                  />
                </Form.Group>

                <Button type="button" className="btn btn-dark">
                  <a href="/iniciarS">REGISTRARSE</a>
                </Button>
                <br></br>
                <br></br>
                <Button type="button" className="btn btn-dark">
                  <a href="/inicio">ATRÁS</a>
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default registro;
