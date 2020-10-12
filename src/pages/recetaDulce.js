import React from "react";
import "../style/style.css";
import { Nav } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { BsList } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import ReactPlayer from "react-player";
import { BsFillChatQuoteFill } from "react-icons/bs";

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
          <div className="per">
            <Nav className="justify-content-end" activeKey="/home">
              <Nav.Item>
                <Nav.Link
                  eventKey="link-1"
                  href="Perfil2"
                  className="perfil-enlace  black"
                >
                  <img
                    className="foto-perfil"
                    alt="foto de perfil"
                    src="https://elhombreconfuso.files.wordpress.com/2010/11/alejandrosalgueirosexyhunk01.jpg"
                  />
                </Nav.Link>
              </Nav.Item>

              <div></div>
              <Nav.Item></Nav.Item>
            </Nav>
            <p className="nombre-receta">Galletas de chocolate</p>
          </div>
          <div className="public-flex">
            <p>Puntuación</p>
            <p>Estrellas</p>
          </div>
        </div>
        <div className="public-flex">
          <Card border="success" style={{ width: "18rem" }}>
            <Card.Header>Ingredientes</Card.Header>
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <br></br>
          <Card border="success" style={{ width: "18rem" }}>
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="public-flex">
          <button className="button">Descargar</button>
          <button className="report">Reportar</button>
        </div>
        <div className="input">
          <h5>
            <BsFillChatQuoteFill />
          </h5>
          <input placeholder="Deja un comentario aquí"></input>
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

export default recetaDulce;
