import React from "react";
import "../style/style.css";
import { Nav } from "react-bootstrap";


class chat_admin extends React.Component {
  render() {
    return (
      <div>
        <Nav
  activeKey="/home"
  onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
>
  <Nav.Item>
    <Nav.Link href="/home">Active</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">Link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">Link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="disabled" disabled>
      Guacala
    </Nav.Link>
  </Nav.Item>
</Nav> 
      </div>
    );
  }
}
export default chat_admin;

