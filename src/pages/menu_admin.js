import React from "react";
import "../style/style.css";
import { Dropdown } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { Nav } from "react-bootstrap";

class inicio extends React.Component {


  render() {
    return (
      <div>
        
        <>
          <Nav className="justify-content-center " activeKey="/home">
            <Nav.Item>
              <Nav.Link eventKey="link-1" className="encabezado">
              <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Dropdown Button
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
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
              <Nav.Link eventKey="Busqueda" className="encabezado">
                <h1>
                  {" "}
                  <BsSearch />{" "}
                </h1>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          </>   

          

      </div>
        );
  }
}

export default inicio;

