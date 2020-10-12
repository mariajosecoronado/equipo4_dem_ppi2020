import React from "react";
import "../style/style.css";
import { Nav } from "react-bootstrap";
import { BsList } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import ReactPlayer from "react-player";

import {} from "react-bootstrap";

class recetaDulce extends React.Component {
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
        <div>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=JuewYWvosn4"
            className="react-player"
            playing
            width="100%"
            height="270px"
          />
          <p className="text-muted"> Publicado el 11/09/2020</p>
          <div>
            <Nav className="justify-content-end" activeKey="/home">
              <Nav.Item>
                <Nav.Link
                  eventKey="link-1"
                  href="Perfil"
                  className="perfil-enlace  black"
                >
                  Mi perfil{" "}
                  <img
                    className="foto-perfil"
                    alt="foto de perfil"
                    src="https://benidorm.org/wp-content/img/cabecera/perfil-anonimo.jpg"
                  />
                </Nav.Link>
              </Nav.Item>
              <div></div>
              <Nav.Item></Nav.Item>
            </Nav>
          </div>
        </div>
      </div>
    );
  }
}

export default recetaDulce;
