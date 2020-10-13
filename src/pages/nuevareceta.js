import React from "react";
import "../style/style.css";
import { BsList } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { Nav } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { BsStar } from "react-icons/bs";
import { AiOutlineFileAdd } from "react-icons/ai";
import { AiFillClockCircle} from "react-icons/ai";

class nuevaReceta extends React.Component {
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
        <Nav.Link className="black">
          <AiOutlineFileAdd className="edit-public" />
        </Nav.Link>
        <br />
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
                  src="https://elhombreconfuso.files.wordpress.com/2010/11/alejandrosalgueirosexyhunk01.jpg"
                />
                <input placeholder="¿Qué preparaste?" />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item></Nav.Item>
          </Nav>
        </div>
        <br />
        <Nav className="justify-content-end" activeKey="/home">
          <Nav.Item>
            <p className="nombredereceta">Nombre de tu receta</p>
            <BsStar />
            <BsStar />
            <BsStar />
            <BsStar />
            <BsStar />
          </Nav.Item>
          <Nav.Item></Nav.Item>
        </Nav>
        <br />
        <div className="public-flex">
          <Card border="success" style={{ width: "18rem" }}>
            <Card.Header>Ingredientes</Card.Header>
            <Card.Body>
              <Card.Text>
                Escribe aquí los ingredientes que se utilizaron para la
                elaboración de esta receta
              </Card.Text>
            </Card.Body>
          </Card>
          <br></br>
          <Card border="success" style={{ width: "18rem" }}>
            <Card.Header>Preparación  - Tiempo <AiFillClockCircle/></Card.Header>
           
            <Card.Body>
              <Card.Text>..</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="boton">
        
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
      </div>
    );
  }
}

export default nuevaReceta;
