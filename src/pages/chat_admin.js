import React from "react";
import "../style/style.css";
import { Nav } from "react-bootstrap";
import { Form } from "react-bootstrap";

class chat_admin extends React.Component {
  render() {
    return (
      <div>
        <Nav
          className="navegacion-chat"
          activeKey="/home"
          onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
          <Nav.Item className="encabezado">
            <img
              className="icon-p"
              src="https://www.flaticon.es/svg/static/icons/svg/109/109618.svg"
              alt="logo"
              width="70"
              height="50"
            />
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">
              <img
                className="icon-p"
                src="https://www.flaticon.es/svg/static/icons/svg/2620/2620582.svg"
                alt="logo"
                width="70"
                height="50"
              />
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link className="administradoras">
              <h3>Administradoras COOK TO WORK</h3>
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <footer className="header">
          <Form>
            <Form.Control
              className="form-chat"
              type="text"
              placeholder="Escribe un mensaje"
            />
          </Form>{" "}
          <Nav.Link className="enviar"></Nav.Link>
          <img
            className="icon-p"
            src="https://www.flaticon.es/svg/static/icons/svg/736/736212.svg"
            alt="logo"
            width="50"
            height="30"
          />
        </footer>
      </div>
    );
  }
}
export default chat_admin;
