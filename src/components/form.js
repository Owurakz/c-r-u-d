import React, { useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { v4 as uuid } from "uuid";
// class UserForm extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "",
//       email: "",
//     };
//   }

//   Namechange = (e) => {
//     this.setState({ name: e.target.value });
//   };

//   Emailchange = (e) => {
//     this.setState({ email: e.target.value });
//   };

//   Handlesubmit = (e) => {
//     e.preventdefault();
//   };
//   render() {
//     return (
//       <Container>
//         <Form onSubmit={this.Handlesubmit}>
//           <Form.Group className="mb-3" controlId="formBasicEmail">
//             <Form.Label>User Fullname</Form.Label>
//             <Form.Control
//               value={this.state.name}
//               type="text"
//               onChange={this.Namechange}
//               placeholder="Enter Fullname"
//             />
//           </Form.Group>

//           <Form.Group className="mb-3" controlId="formBasicEmail">
//             <Form.Label>User email</Form.Label>
//             <Form.Control
//               value={this.state.email}
//               type="email"
//               onChange={this.Emailchange}
//               placeholder="Enter your email"
//             />
//           </Form.Group>
//           <Button variant="primary" type="submit">
//             Submit
//           </Button>
//         </Form>
//       </Container>
//     );
//   }
// }
const UserForm = (props) => {
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [gen, setGen] = useState("");
  const [name, setName] = useState("");

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
      id: uuid(),
    };

    props.newStudent(student);
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
          Submit
        </Button>
      </Form>
    </Container>
  );
};
export default UserForm;
