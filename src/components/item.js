import React, { useState } from "react";
import { Col, Container, Row, Form, Button, Card } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Updateform from "./Updateform";

const Item = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <h4>Student Profile</h4>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{props.student.name}</Card.Title>
          <Card.Text>Email : {props.student.email}</Card.Text>
          <Card.Text>Phone : {props.student.number}</Card.Text>
          <Card.Text>Gen : {props.student.gen}</Card.Text>
          <Button onClick={handleShow} variant="primary">
            Update
          </Button>
          <Button
            onClick={() => {
              props.deleteStudents(props.student.id);
            }}
            variant="danger"
          >
            Delete
          </Button>
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Updateform
            student={props.student}
            updateStudent={props.updateStudent}
            close={handleClose}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Item;
