import React from "react";
import { Col, Container, Row, Form, Button, Card } from "react-bootstrap";

const Item = ({ student }) => {
  return (
    <div>
      <Container>
        <h4>Student Profile</h4>
        <Row>
          <Col>
            <Card style={{ width: "15rem" }}>
              <Card.Body>
                <Card.Title>{student.name}</Card.Title>
                <Card.Text>Email : {student.email}</Card.Text>
                <Card.Text>Phone : {student.number}</Card.Text>
                <Card.Text>Gen : {student.gen}</Card.Text>
                <Button variant="primary">Update</Button>
                <Button variant="danger">Delete</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Item;
