import React from "react";
import "../style/style.css";
import { BsList } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { Nav } from "react-bootstrap";
import { Card,Button} from "react-bootstrap";

class perfil extends React.Component {
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

        <div className="fotoperfil">
          <img
            className="fotoperfil"
            src="https://www.lapi.com.mx/image.ashx?s=57067&im=115321&t=p"
            alt="logo"
            width="130"
            height="150"
          />
        </div>

        <div className="unotitulo">
          <h6> Valeria Gómez </h6>
        </div>
        <div className="tituloR">
          <h6> Recetas reportadas</h6>
        </div>
        <div className="public-flex">
          <Card style={{ width: "12rem" }}>
            <Card.Img
              width="50"
              height="100"
              src="https://recetasfacil.online/wp-content/uploads/2018/12/Recetas-f%C3%A1ciles-de-pollo-para-ni%C3%B1os-e1544662062923.jpg"
            />

            <Card.Body>
              <Card.Title>Rollos de Pollo</Card.Title>

              <Button href="/perfil2" className="botonR1">
              
              
              
              
              
              
                Ver más
              </Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "12rem" }}>
            <Card.Img
              width="50"
              height="100"
              src="https://t1.rg.ltmcdn.com/es/images/6/8/2/galletas_de_mantequilla_con_chocolate_55286_600.jpg"
            />

            <Card.Body>
              <Card.Title>Galletas de Chocolate</Card.Title>

              <Button href="" className="botonR">
                Ver más
              </Button>
            </Card.Body>
          </Card>
        </div>
       
      </div>
    );
  }
}

export default perfil;
