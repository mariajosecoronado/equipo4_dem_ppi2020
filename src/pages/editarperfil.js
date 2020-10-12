import React from "react";
import "../style/style.css";
import { BsList } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { Nav } from "react-bootstrap";
import { BsFillChatQuoteFill } from "react-icons/bs";

class editarPerfil extends React.Component {
  render() {
    return (
      <div>
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
        <div className="fotoperfil">
          <img
            className="fotoperfil"
            src="https://elhombreconfuso.files.wordpress.com/2010/11/alejandrosalgueirosexyhunk01.jpg"
            alt="logo"
            width="130"
            height="150"
          />
        </div>
        <div className="unotitulo">
          <h6> Alejandro Pérez </h6>
        </div>
        <div className="input">
          <BsFillChatQuoteFill />

          <input placeholder="Edita tu nombre"></input>
        </div>
        <br></br>

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
      </div>
    );
  }
}

export default editarPerfil;
