import React from "react";
import { Nav } from "react-bootstrap";
import "../style/style.css";

class Menu extends React.Component {
  render() {
    return (
      <div className="flex" >
soy menu
    <Nav.Link className="black" href="">
PRINCIPAL
    </Nav.Link>
    <Nav.Link className="black" href="mensaje">
MENSAJES
    </Nav.Link>
    <Nav.Link className="black" href="inicio">
RECETAS
    </Nav.Link>
    <br>
    </br>
    <br>
    </br>
    <Nav.Link className="black">
CERRAR SESIÓN
    </Nav.Link>
      </div>
    );
  }
}

export default Menu;
