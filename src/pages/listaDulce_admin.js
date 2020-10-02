import React from "react";
import "../style/style.css";
import { BsList } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { Nav } from "react-bootstrap";
import { Card } from "react-bootstrap";

class listaDulce_admin extends React.Component {
  render() {
    return (
      <div>
        <>
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
        </>
        <>
          <Card>
            <Card.Body>
              <Card.Text>RECETAS</Card.Text>
            </Card.Body>
            <Card.Img variant="bottom" src="holder.js/100px180" />
          </Card>
          <br />
          <Card>
            <Card.Body>
              <Card.Text>RECETAS</Card.Text>
            </Card.Body>
            <Card.Img variant="bottom" src="images/100px180" />
          </Card>
          <br />
          <Card>
            <Card.Body>
              <Card.Text>RECETAS</Card.Text>
            </Card.Body>
            <Card.Img variant="bottom" src="holder.js/100px180" />
          </Card>
          <br />
          <Card>
            <Card.Body>
              <Card.Text>RECETAS</Card.Text>
            </Card.Body>
            <Card.Img variant="bottom" src="holder.js/100px180" />
          </Card>
          <br />
          <Card>
            <Card.Body>
              <Card.Text>RECETAS</Card.Text>
            </Card.Body>
            <Card.Img variant="bottom" src="holder.js/100px180" />
          </Card>
          <br />
          <Card>
            <Card.Body>
              <Card.Text>RECETAS</Card.Text>
            </Card.Body>
            <Card.Img variant="bottom" src="holder.js/100px180" />
          </Card>
        </>
      </div>
    );
  }
}

export default listaDulce_admin;
