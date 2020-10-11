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
                  <Form.Control type="email" placeholder="Correo:" />
                 
           
              
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Contraseña:" />
                </Form.Group>
                <p>¿Has olvidado tu contraseña?</p>

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
