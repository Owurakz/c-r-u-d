import React from "react";
import Item from "./item";
import { Col, Container, Row } from "react-bootstrap";

const List = ({ students }) => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            {students.map((student, index) => {
              return (
                <div>
                  <Col key={student.id}>
                    <Item student={student} />
                  </Col>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default List;
