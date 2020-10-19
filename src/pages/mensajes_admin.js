import React from "react";
import "../style/style.css";
import { BsArrowLeft } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { Nav } from "react-bootstrap";



class menu_admin extends React.Component {


  render() {
    return (
      <div>
        <nav class="navbar navbar-dark">
        {" "}
        <>
          <Nav className="justify-content-center " activeKey="/home">
            <Nav.Item>
              <Nav.Link eventKey="link-1" className="encabezado">
              </Nav.Link>
              <h1>
                  <BsArrowLeft />
                </h1>

            </Nav.Item>
          </Nav>
          <img
            className="icon-p"
            src="https://raw.githubusercontent.com/Saracas-022/holamundo/main/logotipo.jpeg"
            alt="logo"
            width="200"
            height="150"
          />

          <Nav.Link href="buscar_admin" eventKey="Busqueda" className="encabezado ">
            <h1>
              {" "}
              <BsSearch />{" "}
            </h1>
          </Nav.Link>
         

        
          </> 
        
          </nav>
      </div>
        );
  }
}
export default menu_admin;