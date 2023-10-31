import React, { useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { v4 as uuid } from "uuid";

const Updateform = (props) => {
  const [number, setNumber] = useState(props.student.number);
  const [email, setEmail] = useState(props.student.email);
  const [gen, setGen] = useState(props.student.gen);
  const [name, setName] = useState(props.student.name);

  const numberChange = (event) => {
    setNumber(event.target.value);
  };
  const emailChange = (event) => {
    setEmail(event.target.value);
  };

  const Namechange = (event) => {
    setName(event.target.value);
  };
  const genChange = (event) => {
    setGen(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const student = {
      email,
      number,
      name,
      gen,
      id: props.student.id,
    };

    props.updateStudent(props.student.id, student);
    props.close();
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            value={name}
            type="text"
            onChange={Namechange}
            placeholder="Enter your name"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            value={email}
            type="email"
            onChange={emailChange}
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            value={number}
            type="number"
            onChange={numberChange}
            placeholder="Phone number"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Gen</Form.Label>
          <Form.Control
            value={gen}
            type="number"
            onChange={genChange}
            placeholder="Gen"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>
    </Container>
  );
};
export default Updateform;
