import React from "react";
import "../style/style.css";
import { BsList } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { Nav } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { CardDeck } from "react-bootstrap";

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
        <br></br>
        <CardDeck>
          <Card>
            <Card.Title>RECETAS SALADAS</Card.Title>
            <Card.Img
              variant="top"
              src="https://live.mrf.io/statics/i/ps/www.cocinacaserayfacil.net/wp-content/uploads/2020/02/Almuerzos-faciles-y-rapidos-de-hacer.jpg?width=1200&enable=upscale"
            />

            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <br></br>
          <Card>
            <Card.Title>RECETAS SALADAS</Card.Title>
            <Card.Img
              variant="top"
              src="https://sevilla.abc.es/gurme/wp-content/uploads/sites/24/2014/04/receta-tortilla-calabacin.jpg"
            />

            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <br></br>
          <Card>
            <Card.Title>RECETAS SALADAS</Card.Title>
            <Card.Img
              variant="top"
              src="https://animalgourmet.com/wp-content/uploads/2020/04/recetas-faciles-y-economicas-1-e1586898220791.jpg"
            />

            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardDeck>
        <br></br>
        <CardDeck>
          <Card>
            <Card.Title>RECETAS SALADAS</Card.Title>
            <Card.Img
              variant="top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRYcrzVqHcrlaTt8V-jjJ9bbsQ-SsR5cWv_eA&usqp=CAU"
            />

            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <br></br>
          <Card>
            <Card.Title>RECETAS SALADAS</Card.Title>
            <Card.Img
              variant="top"
              src="https://www.clara.es/medio/2020/03/18/rollitos-de-tortilla_48273735_1280x720.jpg"
            />

            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <br></br>
          <Card>
            <Card.Title>RECETAS SALADAS</Card.Title>
            <Card.Img
              variant="top"
              src="https://agendadeisa.com/wp-content/uploads/2019/06/Huevos-rellenos.jpg"
            />

            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardDeck>
        <br></br>
        <footer className="header">
          CONTÁCTENOS<button> CLICK AQUÍ </button>
        </footer>
      </div>
    );
  }
}

export default listaSalado;
