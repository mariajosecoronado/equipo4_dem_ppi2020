import React from "react";
import "../style/style.css";
import { Nav } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { BsList } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { BsFillChatDotsFill } from "react-icons/bs";
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
          <div className="public-flex">
            <Nav className="justify-content-end" activeKey="/home">
              <Nav.Item>
                <Nav.Link
                  eventKey="link-1"
                  href="Perfil"
                  className="perfil-enlace  black"
                >
                  <img
                    className="foto-perfil"
                    alt="foto de perfil"
                    src="https://image.freepik.com/vector-gratis/retrato-perfil-mujer-labios-rojos_8262-104.jpg"
                  />
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <p className="nombre-receta">Galletas de chocolate</p>
          </div>
        </div>
        <div className="punt">
          <p>Puntuación</p>
          <p>
            <BsStarFill />
            <BsStarFill />
            <BsStarHalf />
            <BsStar />
            <BsStar />
          </p>
          <div></div>
        </div>
        <div className="public-flex">
          <Card border="success" style={{ width: "18rem" }}>
            <Card.Header>Ingredientes</Card.Header>
            <Card.Body>
              <Card.Title>Success Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <br />
          <Card border="success" style={{ width: "18rem" }}>
            <Card.Header>Receta</Card.Header>
            <Card.Body>
              <Card.Title>Success Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="boton">
          <button className="button">Descargar</button>
          <button className="report">Reportar</button>
        </div>

        <div>
          <BsFillChatDotsFill />
          <input placeholder="Deja un comentario" />
        </div>
        <br />
        <br />
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
