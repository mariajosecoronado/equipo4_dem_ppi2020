import React from "react";
import "../style/style.css";
import { Form, Button } from "react-bootstrap";

class iniciarS extends React.Component {
  render() {
    return (
      <div className="container-fluid ">
        <div className="row">
          <div className="col">
            <h1>
              BIENVENID@ A COOK TO WORK <br />
              INICIE SESIÓN AQUÍ
            </h1>
            <div>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>CORREO</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>CONTRASEÑA</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button type="button" className="btn btn-dark">
                  <a href="/inicio">INICIAR SESÓN COMO USUARIO</a>
                </Button>
                <br />
                <Button type="button" className="btn btn-dark">
                  <a href="/inicio_admin">INICIAR SESÓN COMO ADMINISTRADOR </a>
                </Button>
                <br />
                <Button type="button" className="btn btn-dark">
                  <a href="/registro">REGISTRARSE</a>
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default iniciarS;
