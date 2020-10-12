import React from "react";
import "../style/style.css";
import { BsList } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { Nav } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { CardDeck } from "react-bootstrap";

class listaDulce extends React.Component {
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
        <br></br>
        <CardDeck>
          <Card>
            <Card.Title>RECETAS DULCES</Card.Title>
            <Card.Img
              variant="top"
              src="https://saposyprincesas.elmundo.es/wp-content/uploads/2019/04/golosinas-caseras-que-parecen-oreo.jpg"
            />

            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <br></br>
          <Card>
            <Card.Title>RECETAS DULCES</Card.Title>
            <Card.Img
              variant="top"
              src="https://buenavibra.es/wp-content/uploads/2019/01/bigstock-churros-dulces-postres-cosas-dulces-1170x600.jpg"
            />

            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <br></br>
          <Card>
            <Card.Title>RECETAS DULCES</Card.Title>
            <Card.Img
              variant="top"
              src="https://truffle-assets.imgix.net/1t1bxm43v4e3_7ffgxAJg64K8UAwOimWYya_twix-caseros_landscapeThumbnail_es.jpeg"
            />

            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardDeck>
        <br></br>
        <CardDeck>
          <Card>
            <Card.Title>RECETAS DULCES</Card.Title>
            <Card.Img
              variant="top"
              src="https://recetasdeisabel.com/wp-content/uploads/2017/05/Dulces-y-postres-de-vainilla-fa%CC%81ciles-de-hacer-6-860-X-573.jpg"
            />

            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <br></br>
          <Card>
            <Card.Title>RECETAS DULCES</Card.Title>
            <Card.Img
              variant="top"
              src="https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/bolitas-dulces-con-leche-condensada-trufas-de-leche-en-polvo.jpg"
            />

            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <br></br>
          <Card>
            <Card.Title>RECETAS DULCES</Card.Title>
            <Card.Img
              variant="top"
              src="https://i.pinimg.com/originals/0b/a1/56/0ba156a87b330fc6cb58b5a8b8ca0fb1.jpg"
            />

            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardDeck>
        <br></br>
        <footer className="header">
          CONTÁCTENOS<button className="button"> CLICK AQUÍ </button>
        </footer>
      </div>
    );
  }
}

export default listaDulce;
