import React from "react";
import "../style/style.css";
import { Nav } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { BsArrowLeft } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { BsExclamationCircleFill } from "react-icons/bs";

class Mensaje_reporte_admin extends React.Component {
  render() {
    return (
      <div>
        {" "}
        <>
          <Nav className="justify-content-center " activeKey="/devolver">
            <Nav.Item>
              <Nav.Link href="botones_mensajes_admin " className="encabezado">
                <h1>
                  <BsArrowLeft />
                </h1>
              </Nav.Link>
            </Nav.Item>
            <h1 className="titulo">COOK TO WORK</h1>
            <Nav.Item>
              <Nav.Link
                href="buscar_admin "
                eventKey="Busqueda"
                className="encabezado"
              >
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
        <h2 className="mensajes_admin">Recetas reportadas</h2>
        <div>
          <Card>
            <Card className="card_mensaje1_admin">
              <h1>
                <BsExclamationCircleFill />
                <p>Receta reportada</p>
              </h1>
            </Card>
            <Card className="card_mensaje2_admin">
              <h1>
                <BsExclamationCircleFill />
                <p>Receta reportada</p>
              </h1>
            </Card>
          </Card>
        </div>
      </div>
    );
  }
}
export default Mensaje_reporte_admin;
