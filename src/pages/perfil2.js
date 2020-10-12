import React from "react";
import "../style/style.css";
import { BsList } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { Nav } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

class perfil2 extends React.Component {
  render() {
    return <div>
        <Nav className="justify-content-center " activeKey="/home">
          <Nav.Item>
            <Nav.Link eventKey="link-1" className="encabezado" href="menu">
              <h1>
                <BsList />
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
            <Nav.Link eventKey="Busqueda" className="encabezado ">
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
        <br />
        <div className="fotoperfil">
          <img
            className="fotoperfil"
            src="https://www.lapi.com.mx/image.ashx?s=57067&im=115321&t=p"
            alt="logo"
            width="150"
            height="170"
          />
        </div>


<footer className="header">
  CONTÁCTENOS
  <button className="button">
    {" "}
    <Nav.Link href="/mensaje" className="black">
      CLICK AQUÍ
    </Nav.Link>{" "}
  </button>
  <Nav.Link href="/mensaje" className="black"></Nav.Link>{" "}
</footer>

    </div>;
  }
}
export default perfil2;
