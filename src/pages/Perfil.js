import React from "react";
import "../style/style.css";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Image } from "react-bootstrap";

class perfil extends React.Component {
  render() {
    return (
      <div className="container-fluid ">
        <div className="row">
          <div className="col"></div>
          <Container>
            <Row>
              <Col xs={6} md={4}>
                <Image src="holder.js/171x180" roundedCircle />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default perfil;
