import React from "react";
import "../style/style.css";
import { Nav } from "react-bootstrap";
import { BsList } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import ReactPlayer from "react-player";

class recetaDulce extends React.Component {
  render() {
    return (
      <div>
        <Nav className="justify-content-center " activeKey="/home">
          <Nav.Item>
            <Nav.Link eventKey="link-1" className="encabezado">
              <h1>
                <BsList />
              </h1>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <h1 className="titulo">COOK TO WORK</h1>
          </Nav.Item>
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
        <br></br>
        <div>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=JuewYWvosn4"
            className="react-player"
            playing
            width="100%"
            height="270px"
          />
          <p className="text-muted  derec">Publicado el 11/09/2020</p>
        </div>
      </div>
    );
  }
}

export default recetaDulce;
