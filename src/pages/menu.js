import React from "react";
import { Nav } from "react-bootstrap";
import "../style/style.css";

class Menu extends React.Component {
  render() {
    return (
      <div className="menu">
        menu
        <Nav.Link href="inicio">PRINCIPAL</Nav.Link>
        <Nav.Link href="Perfil">MI PERFIL</Nav.Link>
        <Nav.Link href="inicio">RECETAS</Nav.Link>
        <br></br>
        <Nav.Link href="iniciarS">CERRAR SESIÓN</Nav.Link>
      </div>
    );
  }
}

export default Menu;
