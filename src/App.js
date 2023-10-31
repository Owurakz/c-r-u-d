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

  const deleteStudents = (personId) => {
    const filteredStudents = students.filter((item) => item.id !== personId);
    setStudents(filteredStudents);
  };

  const updateStudent = (id, updateStudent) => {
    const updatedStudents = students.map((item) => {
      if (item.id === id) {
        return updateStudent;
      }
      return item;
    });
    setStudents(updatedStudents);
  };
  return (
    <Container>
      <Row>
        <Col>
          <UserForm newStudent={createStudent} />
        </Col>
        <Col>
          <List
            deleteStudents={deleteStudents}
            students={students}
            updateStudent={updateStudent}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
