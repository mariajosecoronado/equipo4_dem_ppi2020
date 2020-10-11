import React from "react";
import "../style/style.css";
import { Form, Button } from "react-bootstrap";

class iniciarS extends React.Component {
  render() {
    return (
      <div className="container-fluid ">
        <div className="row">
          <div className="col">
            <img
              className="d-block w-100"
              src="https://raw.githubusercontent.com/Saracas-022/holamundo/main/logotipo.jpeg"
              alt="logo"
              width="100"
              height="250"
            />

            <h1>
              BIENVENID@ A COOK TO WORK <br />
              INICIE SESIÓN AQUÍ
            </h1>
            <div>
              <Form >
                <Form.Group controlId="formBasicEmail" className="correo-I">
                  <Form.Control type="email" placeholder="Correo:" />
                </Form.Group>

                <Form.Group
                  controlId="formBasicPassword"
                  className="contraseña-I"
                >
                  <Form.Control type="password" placeholder="Contraseña:" />
                </Form.Group>
                
                <p className="O-contraseña">¿Has olvidado tu contraseña?</p>

                <Button type="button" className="btn btn-dark">
                  <a href="/inicio">INICIAR SESIÓN COMO USUARIO</a>
                </Button>
                <br />
                <Button type="button" className="btn btn-dark">
                  <a href="/inicio_admin">INICIAR SESIÓN COMO ADMINISTRADOR </a>
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
