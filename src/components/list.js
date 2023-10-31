import React from "react";
import Item from "./item";
import { Col, Container, Row } from "react-bootstrap";

const List = (props) => {
  return (
    <div>
      <Container>
        <Row>
          {props.students.map((student) => {
            return (
              <div key={student.id}>
                <Col>
                  <Item
                    student={student}
                    deleteStudents={props.deleteStudents}
                    updateStudent={props.updateStudent}
                  />
                </Col>
              </div>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default List;
