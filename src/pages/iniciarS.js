import React from "react";
import "../style/style.css";
import { Form, Button } from "react-bootstrap";

class IniciarS extends React.Component {
  render() {
    return (
      <div className="container-fluid ">
        <div className="row">
          <div className="col">
            <h1>Bienvenid@ a COOK TO WORK</h1>
            <br/>
            <h1>Inicie sesión aquí</h1>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Correo</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            <button type="button" className="btn btn-dark">
              <a href="/inicio">Iniciar sesión como usuario</a>
            </button>
            <button type="button" className="btn btn-dark">
              <a href="/inicio">Iniciar sesión como administrador</a>
            </button>
            <button type="button" className="btn btn-dark">
              <a href="/inicio">Registrarse</a>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default IniciarS;
