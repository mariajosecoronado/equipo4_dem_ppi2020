import React from "react";
import "../style/style.css";
import { BsList } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { Nav } from "react-bootstrap";
import { Card } from "react-bootstrap";

class listaSalado extends React.Component {
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
              <Card.Text>RECETA DULCE</Card.Text>
            </Card.Body>
            <Card.Img variant="bottom" />
            <img
              className="d-block w-100"
              src="https://image.freepik.com/vector-gratis/chica-profesional-chef-cucharon-manos-ocupacion-cocina-menu-cocina-vajilla-cocina-panaderia-caricatura-ilustracion-logotipo_56104-57.jpg"
              alt=""
              width="200"
              height="400"
            />
          </Card>
          <br />
          <Card>
            <Card.Body>
              <Card.Text>RECETA DULCE</Card.Text>
            </Card.Body>
            <Card.Img variant="bottom" />
            <img
              className="d-block w-100"
              src="https://image.freepik.com/vector-gratis/chica-profesional-chef-cucharon-manos-ocupacion-cocina-menu-cocina-vajilla-cocina-panaderia-caricatura-ilustracion-logotipo_56104-57.jpg"
              alt=""
              width="200"
              height="400"
            />
          </Card>
          <br />
          <Card>
            <Card.Body>
              <Card.Text>RECETA DULCE</Card.Text>
            </Card.Body>
            <Card.Img variant="bottom" />
            <img
              className="d-block w-100"
              src="https://image.freepik.com/vector-gratis/chica-profesional-chef-cucharon-manos-ocupacion-cocina-menu-cocina-vajilla-cocina-panaderia-caricatura-ilustracion-logotipo_56104-57.jpg"
              alt=""
              width="200"
              height="400"
            />
          </Card>
          <br />
          <Card>
            <Card.Body>
              <Card.Text>RECETA DULCE</Card.Text>
            </Card.Body>
            <Card.Img variant="bottom" />
            <img
              className="d-block w-100"
              src="https://image.freepik.com/vector-gratis/chica-profesional-chef-cucharon-manos-ocupacion-cocina-menu-cocina-vajilla-cocina-panaderia-caricatura-ilustracion-logotipo_56104-57.jpg"
              alt=""
              width="200"
              height="400"
            />
          </Card>
          <br />
          <Card>
            <Card.Body>
              <Card.Text>RECETA DULCE</Card.Text>
            </Card.Body>
            <Card.Img variant="bottom" />
            <img
              className="d-block w-100"
              src="https://image.freepik.com/vector-gratis/chica-profesional-chef-cucharon-manos-ocupacion-cocina-menu-cocina-vajilla-cocina-panaderia-caricatura-ilustracion-logotipo_56104-57.jpg"
              alt=""
              width="200"
              height="400"
            />
          </Card>
          <br />
          <Card>
            <Card.Body>
              <Card.Text>RECETA DULCE</Card.Text>
            </Card.Body>
            <Card.Img variant="bottom" />
            <img
              className="d-block w-100"
              src="https://image.freepik.com/vector-gratis/chica-profesional-chef-cucharon-manos-ocupacion-cocina-menu-cocina-vajilla-cocina-panaderia-caricatura-ilustracion-logotipo_56104-57.jpg"
              alt=""
              width="200"
              height="400"
            />
          </Card>
        </>
      </div>
    );
  }
}

export default listaSalado;
