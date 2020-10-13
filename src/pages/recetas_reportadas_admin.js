import React from "react";
import "../style/style.css";
import { Nav } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { BsArrowLeft } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

import ReactPlayer from "react-player";

import {} from "react-bootstrap";

class Receta_reportadas_admin extends React.Component {
  render() {
    return (
      <div>
        <Nav className="justify-content-center " activeKey="/home">
          <Nav.Item>
            <Nav.Link href="mensajes_radmin " className="encabezado">
              
              <h1>
                <BsArrowLeft />
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
            <Nav.Link
              href="buscar_admin"
              eventKey="Busqueda"
              className="encabezado "
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
                  href="perfil2"
                  className="perfil-enlace  black"
                >
                  <img
                    className="foto-perfil-2"
                    alt="foto de perfil 2"
                    src="https://www.lapi.com.mx/image.ashx?s=57067&im=115321&t=p"
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
              <ul>
                <li>Una taza de azucar</li>
                <li>Cacao</li>
                <li>1 huevo</li>
                <li>Polvo para hornear</li>
              </ul>
            </Card.Body>
          </Card>
          <br />
          <Card border="success" style={{ width: "18rem" }}>
            <Card.Header>Receta</Card.Header>
            <Card.Body>
              <Card.Title>Preparación</Card.Title>
              <Card.Text>
                -Mezclamos todo hasta obtener una masita y luego lo ponemos en
                el horno por 15 minutos.
          <Nav.Link href="mensajes_radmin " className="encabezado">
          
                <h1>
                  <BsArrowLeft />
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
            <Nav.Link
              href="buscar_admin"
              eventKey="Busqueda"
              className="encabezado "
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
                  href="perfil2"
                  className="perfil-enlace  black"
                >
                  <img
                    className="foto-perfil-2"
                    alt="foto de perfil 2"
                    src="https://www.lapi.com.mx/image.ashx?s=57067&im=115321&t=p"
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
              <ul>
                <li>Una taza de azucar</li>
                <li>Cacao</li>
                <li>1 huevo</li>
                <li>Polvo para hornear</li>
              </ul>
            </Card.Body>
          </Card>
          <br />
          <Card border="success" style={{ width: "18rem" }}>
            <Card.Header>Receta</Card.Header>
            <Card.Body>
              <Card.Title>Preparación</Card.Title>
              <Card.Text>
               -Mezclamos todo hasta obtener una masita y luego lo ponemos en el horno por 15 minutos.
              
          <Nav.Link href="mensajes_radmin " className="encabezado">
          
       <div
    
       <div
    
       <div
    
    );
  }
}

export default Receta_reportadas_admin;
