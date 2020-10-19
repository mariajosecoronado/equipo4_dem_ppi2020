import React from "react";
import "../style/style.css";
import { Form, Button } from "react-bootstrap";

class olvidarC extends React.Component {
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
           ¿OLVIDASTE TU CONTRASEÑA?   
            </h1>
          Escribe tu correo de usuario de COOK TO WORK
            <div>
              <Form >
                <Form.Group controlId="formBasicEmail" className="campo-iniciarS">
                  <Form.Control type="email" placeholder="Correo:" />
                </Form.Group>
                <br />
                <br/>
                
                <Button  href="/confirmar_contraseña" className="boton-I">
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

export default olvidarC;
