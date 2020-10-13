import React from "react";
import "../style/style.css";
import { Dropdown } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { Nav } from "react-bootstrap";

class inicio extends React.Component {


  render() {
    return (
      <div>
        
        <>
          <Nav className="justify-content-center " activeKey="/home">
            <Nav.Item>
              <Nav.Link eventKey="link-1" className="encabezado">
              <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Menú
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">PRINCIPAL</Dropdown.Item>
    <Dropdown.Item href="#/action-2">MI PERFIL</Dropdown.Item>
    <Dropdown.Item href="#/action-3">RECETAS</Dropdown.Item>
    <Dropdown.Divider />
  <Dropdown.Item eventKey="4">RECETAS SALADAS</Dropdown.Item>
   <Dropdown.Item eventKey="5">RECETAS DULCES</Dropdown.Item>
   <Dropdown.Divider />
   <Dropdown.Item eventKey="6">CERRAR SESIÓN</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
              </Nav.Link>
            </Nav.Item>
          
          </Nav>
          <Nav className="justify-content-center " activeKey="/home">
            <Nav.Item>
              <Nav.Link eventKey="link-1" className="encabezado">
              <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Menú
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/inicioanonimo">PRINCIPAL</Dropdown.Item>
    <Dropdown.Item href="#/iniciarS">MI PERFIL</Dropdown.Item>
    <Dropdown.Item href="#/iniciarS">RECETAS</Dropdown.Item>
    <Dropdown.Item href="#/i">RECETAS</Dropdown.Item>
    <Dropdown.Divider />
  <Dropdown.Item href="#/i">RECETAS</Dropdown.Item>

    <Dropdown.Item href="#/i">RECETAS</Dropdown.Item>
    <Dropdown.Item href="#/i">RECETAS</Dropdown.Item>
    <Dropdown.Divider />
 
   <Dropdown.Divider />
  <Dropdown.Item href="#/i">RECETAS</Dropdown.Item>

    <Dropdown.Item href="#/i">RECETAS</Dropdown.Item>
    <Dropdown.Item href="#/i">RECETAS</Dropdown.Item>
    <Dropdown.Divider />
 
   <Dropdown.Divider />
   <Dropdown.Item href="#/iniciarS">INICIAR SESIÓN</Dropdown.Item>
   <Dropdown.Item href="#/registro">REGISTRARSE</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
              </Nav.Link>
            </Nav.Item>
          
          </Nav>
          <Nav className="justify-content-center " activeKey="/home">
            <Nav.Item>
              <Nav.Link eventKey="link-1" className="encabezado">
              <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Menú
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">PRINCIPAL</Dropdown.Item>
    <Dropdown.Item href="#/action-2">MENSAJES</Dropdown.Item>
    <Dropdown.Item href="#/action-3">RECETAS</Dropdown.Item>
    <Dropdown.Divider />
  <Dropdown.Item eventKey="4"> RECETAS SALADAS</Dropdown.Item>
   <Dropdown.Item eventKey="5"> RECETAS DULCES</Dropdown.Item>
   <Dropdown.Divider />
   <Dropdown.Item eventKey="6">CERRAR SESIÓN</Dropdown.Item>
   
  </Dropdown.Menu>
</Dropdown>
              </Nav.Link>
            </Nav.Item>
          
          </Nav>
          </>   

          

      </div>
        );
  }
}

export default inicio;

