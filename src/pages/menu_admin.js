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
              <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Menú
  </Dropdown.Toggle>

  <Dropdown.Menu>
  
    <Dropdown.Item href="perfil">MI PERFIL</Dropdown.Item>
    <Dropdown.Item href="#/action-3">RECETAS</Dropdown.Item>
    <Dropdown.Divider />
  <Dropdown.Item href="/listaSalado">RECETAS SALADAS</Dropdown.Item>
   <Dropdown.Item href="/listaDulce">RECETAS DULCES</Dropdown.Item>
   <Dropdown.Divider />
   <Dropdown.Item href="/apertura">CERRAR SESIÓN</Dropdown.Item>
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
  
  <Dropdown.Item href="#/iniciarS"><Nav><Nav.Link>MI PERFIL</Nav.Link></Nav></Dropdown.Item>
 
    <Dropdown.Item href="#/iniciarS">MI PERFIL</Dropdown.Item>
    <Dropdown.Item href="#/iniciarS">RECETAS</Dropdown.Item>
    
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
    <Dropdown.Item href="#/inicio_admin">PRINCIPAL</Dropdown.Item>
    <Dropdown.Item href="#/botones_mensajes_admin">MENSAJES</Dropdown.Item>
    <Dropdown.Item href="#/action-3">RECETAS</Dropdown.Item>
    <Dropdown.Divider />
  <Dropdown.Item href="#/listaSalado_admin"> RECETAS SALADAS</Dropdown.Item>
   <Dropdown.Item href="#/listaDulce_admin"> RECETAS DULCES</Dropdown.Item>
   <Dropdown.Divider />
   <Dropdown.Item href="#/apertura">CERRAR SESIÓN</Dropdown.Item>
   
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

