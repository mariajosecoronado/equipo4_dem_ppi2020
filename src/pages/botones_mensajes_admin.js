import React from "react";
import "../style/style.css";
import { BsArrowLeft } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { Nav,Button } from "react-bootstrap";

class botones_mensajes_admin extends React.Component {
  render() {
    return (
      <div>
       <>
          <Nav className="justify-content-center " activeKey="/home">
            <Nav.Item>
              <Nav.Link eventKey="link-1" className="encabezado">
                <h1>
                <BsArrowLeft />
                </h1>
              </Nav.Link>
            </Nav.Item>
            <img
              className="icon-p"
              src="https://raw.githubusercontent.com/Saracas-022/holamundo/main/logotipo.jpeg"
              alt="logo"
              width="200"
              height="150"
            />



            <Nav.Item>
              <Nav.Link eventKey="Busqueda" className="encabezado">
                <h1>
                  {" "}
                  <BsSearch />{" "}
                </h1>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          </>   
<br/>
<br/>
<br/>

          <Button href="./mensajes_admin" className="boton-mensajes_admin">
         
                 VER MENSAJES DE LOS USUARIOS
                </Button> 
   <br/>

                <Button href="./mensajes_admin" className="boton-reportes_admin">
         
         VER REPORTE DE RECETAS
        </Button>
      </div>
    );
  }
}

export default botones_mensajes_admin;
