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
    <Dropdown.Item href="#/action-2">PERFIL</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    <Dropdown.Item href="#/action-3">RECETAS</Dropdown.Item>
    <Dropdown.Divider />
  <Dropdown.Item eventKey="4">SALADAS</Dropdown.Item>
   <Dropdown.Item eventKey="4">DULCES</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link eventKey="link-1" className="encabezado">
              <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Menú
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">PRINCIPAL</Dropdown.Item>
    <Dropdown.Item href="#/action-2">PERFIL</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    <Dropdown.Item href="#/action-3">RECETAS</Dropdown.Item>
    <Dropdown.Divider />
  <Dropdown.Item eventKey="4">SALADAS</Dropdown.Item>
   <Dropdown.Item eventKey="4">DULCES</Dropdown.Item>
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

