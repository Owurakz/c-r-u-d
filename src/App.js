import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import List from "./components/list";
import { Container, Row, Col } from "react-bootstrap";
import UserForm from "./components/form";

function App() {
  const [students, setStudents] = useState([]);

  const createStudent = (student) => {
    setStudents([...students, student]);
  };
  console.log(students);
  return (
    <Container>
      <Row>
        <Col>
          <UserForm newStudent={createStudent} />
        </Col>
        <Col>
          <List students={students} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
