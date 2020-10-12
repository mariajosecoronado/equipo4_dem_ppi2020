import React from "react";
import "../style/style.css";
import { Nav } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { BsList } from "react-icons/bs";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { BsFillChatQuoteFill } from "react-icons/bs";

import {} from "react-bootstrap";

class recetaSalada extends React.Component {
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
          <img
            src="https://i.blogs.es/b7ec34/crepes/1366_2000.jpg"
            alt="publicacion de receta salada"
            height="250px"
            width="100%"
          />
          <p className="text-muted"> Publicado el 09/05/2020</p>
          <div className="public-flex">
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
            </Nav>
            <p className="nombre-receta">Receceta de crepes</p>
          </div>
          <div className="punt">
            <p>Puntuación</p>
            <p>
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarHalf />
              <BsStar />
            </p>
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
        <div className="boton">
          <button className="button">Descargar</button>
          <button className="report">Reportar</button>
        </div>
        <div className="input">
          <BsFillChatQuoteFill />

          <input placeholder="Deja un comentario aquí"></input>
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

export default recetaSalada;
