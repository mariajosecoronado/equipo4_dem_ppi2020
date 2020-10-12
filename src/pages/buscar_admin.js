import React from "react";
import "../style/style.css";
import { BsList } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { Nav } from "react-bootstrap";
import { Form,FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";


class buscar_admin extends React.Component {
  render() {
    return (
      <div>
        <>
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

          </Nav>
          <Form inline>
      <FormControl type="text" placeholder="Search" className="Busqueda" />
      <Nav.Item>
              <Nav.Link eventKey="Busqueda" className="Lupa">
                <h1>
                  {" "}
                  <BsSearch />{" "}
                </h1>
              </Nav.Link>
            </Nav.Item>
          
    </Form>
          </>  
          

          

      </div>
    );
  }
}

export default buscar_admin;