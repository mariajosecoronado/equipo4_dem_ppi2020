import React from "react";
import "../style/style.css";
import { Nav } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { AiOutlineSend } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";

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
                className="flecha-devolver"
                alt="foto de perfil"
                src="https://w7.pngwing.com/pngs/775/103/png-transparent-arrow-computer-icons-right-arrow-angle-hand-desktop-wallpaper.png"
              />
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
          <Nav.Link className="enviar"></Nav.Link>< AiOutlineSend />
        
        </footer>
      </div>
    );
  }
}
export default chat_admin;
