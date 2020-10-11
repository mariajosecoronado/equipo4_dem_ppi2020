import React from "react";
import "../style/style.css";
import { Nav } from "react-bootstrap";
import { BsArrowLeft } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
class Mensajes_admin extends React.Component {
  render() {
    return (
      <div>
        {" "}
        <>
          <Nav className="justify-content-center " activeKey="/devolver">
            <Nav.Item>
              <Nav.Link eventKey="link-1" className="encabezado">
                <h1>
                  <BsArrowLeft />
                </h1>
              </Nav.Link>
            </Nav.Item>
            <h1 className="titulo">COOK TO WORK</h1>
            <Nav.Item>
              <Nav.Link eventKey="Busqueda" className="encabezado">
                <h1>
                  {" "}
                  <BsSearch />{" "}
                </h1>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav className="justify-content-end" activeKey="/home">
            <Nav.Item></Nav.Item>
          </Nav>

          <Nav className="justify-content-end" href="/Perfil">
            <Nav.Item>
              <Nav.Link
                eventKey="link-1"
                className="perfil-enlace"
                href="Perfil"
              ></Nav.Link>
            </Nav.Item>
            <div></div>
            <Nav.Item></Nav.Item>
          </Nav>
        </>
        <h1 className="mensajes">Mensajes</h1>
        
      </div>
    );
  }
}
export default Mensajes_admin;
