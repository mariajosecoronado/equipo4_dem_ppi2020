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
          <Nav.Item>
            <button className="devolver-admin">Atrás</button>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Link</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link className="administradoras">
              Administradoras COOK TO WORK
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
        <footer className="header">
          <Form>
            <Form.Control
              className="form-chat"
              type="text"
              placeholder="Enter email"
            />
          </Form>{" "}
          <Nav.Link className="enviar"></Nav.Link>{" "}
        </footer>
      </div>
    );
  }
}
export default chat_admin;
