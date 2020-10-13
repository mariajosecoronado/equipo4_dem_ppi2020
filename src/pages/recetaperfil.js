import React from "react";
import "../style/style.css";
import { Nav } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { BsList } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { BsFillChatDotsFill } from "react-icons/bs";
import { AiFillClockCircle } from "react-icons/ai";
import ReactPlayer from "react-player";
import { BsArrowLeft } from "react-icons/bs";
import Swal from "sweetalert2";;

import {} from "react-bootstrap";

class recetaDulce extends React.Component {
  _Alert()  {
    Swal.fire("Está publicación ha sido eliminada");;
  }
  _Alerta()  {
    Swal.fire("Está publicación ha sido eliminada");;
  }
  render() {
    return (
      <div>
        s
        <Nav className="justify-content-center " activeKey="/devolver">
          <Nav.Item>
            <Nav.Link href="perfil" eventKey="link-1" className="encabezado">
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
            url="https://www.youtube.com/watch?v=aBcr5Wa1yHo"
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
                    src="https://elhombreconfuso.files.wordpress.com/2010/11/alejandrosalgueirosexyhunk01.jpg"
                  />
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <p className="nombre-receta">Palitos de queso</p>
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
              <Card.Text>
                <p>
                  - 500g de queso blando, tipo mozzarella - 3 huevos - Pan
                  rallado - Aceite
                </p>{" "}
              </Card.Text>
            </Card.Body>
          </Card>
          <br />
          <Card border="success" style={{ width: "18rem" }}>
            <Card.Header>Receta - Tiempo < AiFillClockCircle/></Card.Header>
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="boton">
          <Button onClick={this._Alert} href="/Perfil" className="boton-I">
            Eliminar
          </Button>
          <Button href="/nuevareceta" className="boton-I">
  
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
            url="https://www.youtube.com/watch?v=aBcr5Wa1yHo"
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
                    src="https://elhombreconfuso.files.wordpress.com/2010/11/alejandrosalgueirosexyhunk01.jpg"
                  />
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <p className="nombre-receta">Palitos de queso</p>
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
              <Card.Text>
                <p>
                  - 500g de queso blando, tipo mozzarella - 3 huevos - Pan
                  rallado - Aceite
                </p>{" "}
              </Card.Text>
            </Card.Body>
          </Card>
          <br />
          <Card border="success" style={{ width: "18rem" }}>
            <Card.Header>Receta - Tiempo < AiFillClockCircle/></Card.Header>
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="boton">
          <Button onClick={this._Alert} href="/Perfil" className="boton-I">
            Eliminar
          </Button>
          <Button onClick={this._Alert} href="/nuevareceta" className="boton-I">
  _Alert()  {
    Swal.fire("Está publicación ha sido eliminada");;
  }
  _Alerta()  {
    Swal.fire("Está publicación ha sido eliminada");;
  }
  render() {
    return (
      <div>
        s
        <Nav className="justify-content-center " activeKey="/devolver">
          <Nav.Item>
            <Nav.Link href="perfil" eventKey="link-1" className="encabezado">
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
            url="https://www.youtube.com/watch?v=aBcr5Wa1yHo"
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
                    src="https://elhombreconfuso.files.wordpress.com/2010/11/alejandrosalgueirosexyhunk01.jpg"
                  />
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <p className="nombre-receta">Palitos de queso</p>
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
              <Card.Text>
                <p>
                  - 500g de queso blando, tipo mozzarella - 3 huevos - Pan
                  rallado - Aceite
                </p>{" "}
              </Card.Text>
            </Card.Body>
          </Card>
          <br />
          <Card border="success" style={{ width: "18rem" }}>
            <Card.Header>Receta - Tiempo < AiFillClockCircle/></Card.Header>
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="boton">
          <Button onClick={this._Alert} href="/Perfil" className="boton-I">
            Eliminar
          </Button>
          <Button onClick={this._Alert} href="/nuevareceta" className="boton-I">
Está publicación ha sido eliminada
  _Alerta()  {
    Swal.fire("Está publicación ha sido eliminada");;
  } onClick={this._Alerta}            Editar
          <Button href="/nuevareceta" className="boton-I">
  
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
            url="https://www.youtube.com/watch?v=aBcr5Wa1yHo"
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
                    src="https://elhombreconfuso.files.wordpress.com/2010/11/alejandrosalgueirosexyhunk01.jpg"
                  />
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <p className="nombre-receta">Palitos de queso</p>
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
              <Card.Text>
                <p>
                  - 500g de queso blando, tipo mozzarella - 3 huevos - Pan
                  rallado - Aceite
                </p>{" "}
              </Card.Text>
            </Card.Body>
          </Card>
          <br />
          <Card border="success" style={{ width: "18rem" }}>
            <Card.Header>Receta - Tiempo < AiFillClockCircle/></Card.Header>
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="boton">
          <Button onClick={this._Alert} href="/Perfil" className="boton-I">
            Eliminar
          </Button>
          <Button onClick={this._Alert} href="/nuevareceta" className="boton-I">
  _Alert()  {
    Swal.fire("Está publicación ha sido eliminada");;
  }
  _Alerta()  {
    Swal.fire("Está publicación ha sido eliminada");;
  }
  render() {
    return (
      <div>
        s
        <Nav className="justify-content-center " activeKey="/devolver">
          <Nav.Item>
            <Nav.Link href="perfil" eventKey="link-1" className="encabezado">
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
            url="https://www.youtube.com/watch?v=aBcr5Wa1yHo"
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
                    src="https://elhombreconfuso.files.wordpress.com/2010/11/alejandrosalgueirosexyhunk01.jpg"
                  />
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <p className="nombre-receta">Palitos de queso</p>
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
              <Card.Text>
                <p>
                  - 500g de queso blando, tipo mozzarella - 3 huevos - Pan
                  rallado - Aceite
                </p>{" "}
              </Card.Text>
            </Card.Body>
          </Card>
          <br />
          <Card border="success" style={{ width: "18rem" }}>
            <Card.Header>Receta - Tiempo < AiFillClockCircle/></Card.Header>
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="boton">
          <Button onClick={this._Alert} href="/Perfil" className="boton-I">
            Eliminar
          </Button>
          <Button onClick={this._Alert} href="/nuevareceta" className="boton-I">
Está publicación ha sido eliminada
  _Alerta()  {
    Swal.fire("Está publicación ha sido eliminada");;
  } onClick={this._Alerta}            Editar
          <Button href="/nuevareceta" className="boton-I">
  
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
            url="https://www.youtube.com/watch?v=aBcr5Wa1yHo"
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
                    src="https://elhombreconfuso.files.wordpress.com/2010/11/alejandrosalgueirosexyhunk01.jpg"
                  />
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <p className="nombre-receta">Palitos de queso</p>
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
              <Card.Text>
                <p>
                  - 500g de queso blando, tipo mozzarella - 3 huevos - Pan
                  rallado - Aceite
                </p>{" "}
              </Card.Text>
            </Card.Body>
          </Card>
          <br />
          <Card border="success" style={{ width: "18rem" }}>
            <Card.Header>Receta - Tiempo < AiFillClockCircle/></Card.Header>
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="boton">
          <Button onClick={this._Alert} href="/Perfil" className="boton-I">
            Eliminar
          </Button>
          <Button onClick={this._Alert} href="/nuevareceta" className="boton-I">
  _Alert()  {
    Swal.fire("Está publicación ha sido eliminada");;
  }
  _Alerta()  {
    Swal.fire("Está publicación ha sido eliminada");;
  }
  render() {
    return (
      <div>
        s
        <Nav className="justify-content-center " activeKey="/devolver">
          <Nav.Item>
            <Nav.Link href="perfil" eventKey="link-1" className="encabezado">
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
            url="https://www.youtube.com/watch?v=aBcr5Wa1yHo"
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
                    src="https://elhombreconfuso.files.wordpress.com/2010/11/alejandrosalgueirosexyhunk01.jpg"
                  />
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <p className="nombre-receta">Palitos de queso</p>
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
              <Card.Text>
                <p>
                  - 500g de queso blando, tipo mozzarella - 3 huevos - Pan
                  rallado - Aceite
                </p>{" "}
              </Card.Text>
            </Card.Body>
          </Card>
          <br />
          <Card border="success" style={{ width: "18rem" }}>
            <Card.Header>Receta - Tiempo < AiFillClockCircle/></Card.Header>
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="boton">
          <Button onClick={this._Alert} href="/Perfil" className="boton-I">
            Eliminar
          </Button>
          <Button onClick={this._Alert} href="/nuevareceta" className="boton-I">
Está publicación ha sido eliminada
  _Alerta()  {
    Swal.fire("Está publicación ha sido eliminada");;
  } onClick={this._Alerta}            Editar
          </Button>
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
