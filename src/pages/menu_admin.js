import React from "react";
import "../style/style.css";
import { Dropdown } from "react-bootstrap";
import { Nav } from "react-bootstrap";

class inicio extends React.Component {


  render() {
    return (
      <div>
        
        <>
          <Nav className="justify-content-center " activeKey="/home">
            <Nav.Item>
              <Nav.Link eventKey="link-1" className="encabezado">
              </Nav.Link>
              <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Menú
  </Dropdown.Toggle>

  <Dropdown.Menu>
  <Dropdown.Item href="inicio_admin">PRINCIPAL</Dropdown.Item>
    <Dropdown.Item href="perfil">MENSAJES</Dropdown.Item>
    <Dropdown.Divider />
  <Dropdown.Item href="/listaSalad_admin">RECETAS SALADAS</Dropdown.Item>
   <Dropdown.Item href="/listaDulce_admin">RECETAS DULCES</Dropdown.Item>
   <Dropdown.Divider />
   <Dropdown.Item href="/apertura">CERRAR SESIÓN</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
            </Nav.Item>
          </Nav>

          <Nav className="justify-content-center " activeKey="/home">
            <Nav.Item>
              <Nav.Link eventKey="link-1" className="encabezado">
              </Nav.Link>
              <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Menú
  </Dropdown.Toggle>

  <Dropdown.Menu>
  <Dropdown.Item href="inicio_admin">PRINCIPAL</Dropdown.Item>
    <Dropdown.Item href="perfil">MENSAJES</Dropdown.Item>
    <Dropdown.Divider />
  <Dropdown.Item href="/listaSalad_admin">RECETAS SALADAS</Dropdown.Item>
   <Dropdown.Item href="/listaDulce_admin">RECETAS DULCES</Dropdown.Item>
   <Dropdown.Divider />
   <Dropdown.Item href="/apertura">CERRAR SESIÓN</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
            </Nav.Item>
          </Nav>

          <Nav className="justify-content-center " activeKey="/home">
            <Nav.Item>
              <Nav.Link eventKey="link-1" className="encabezado">
              </Nav.Link>
              <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Menú
  </Dropdown.Toggle>

  <Dropdown.Menu>
  <Dropdown.Item href="inicio_admin">PRINCIPAL</Dropdown.Item>
    <Dropdown.Item href="perfil">MENSAJES</Dropdown.Item>
    <Dropdown.Divider />
  <Dropdown.Item href="/listaSalad_admin">RECETAS SALADAS</Dropdown.Item>
   <Dropdown.Item href="/listaDulce_admin">RECETAS DULCES</Dropdown.Item>
   <Dropdown.Divider />
   <Dropdown.Item href="/apertura">CERRAR SESIÓN</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
            </Nav.Item>
          </Nav>

        
          </>   

          

      </div>
        );
  }
}

export default inicio;

