import React, { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Formstyle.css";

function FormMoal() {
  const [user, setuser] = useState({
    id:"",
    name: "",
    address: "",
    email: "",
    mobile: "",
    gender: "",
    city: "",
  });

  let name, value;
  const handeler = (e) => {
    name = e.target.name;
    value = e.target.value;
    setuser({ ...user, [name]: value });
  };
  const dataSubmit = (e) => {
    e.preventDefault();

    //console.log(user);

    axios
      .post("http://localhost:8080/", user)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Form onSubmit={dataSubmit}>
      <Form.Group className="mb-3 boxStyle mt-3" controlId="">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={name}
          onChange={handeler}
          required
        />
      </Form.Group>

      <Form.Group className=" boxStyle mb-3">
        <Form.Label>Address</Form.Label>
        <Form.Control
          as="textarea"
          onChange={(e) => setuser({ ...user, address: e.target.value })}
        />
      </Form.Group>
      <Form.Group className="mb-3 boxStyle" controlId="">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="text"
          name="email"
          value={user.email}
          onChange={handeler} required
        />
      </Form.Group>

      <Form.Group className="mb-3 boxStyle" controlId="">
        <Form.Label>Mobile</Form.Label>
        <Form.Control
          type="number"
          placeholder="Mobile"
          value={user.mobile}
          name="mobile"
          onChange={handeler} required
        />
      </Form.Group>

      <Form.Label className=" boxStyle">Gender</Form.Label>
      <Form.Group onChange={handeler}  className="mb-3"  required>
        <Form.Check
          inline
          label="Male"
          name="gender"
          type="radio"
          value="Male"
          
        />
        <Form.Check
          inline
          label="Female"
          name="gender"
          type="radio"
          value="Female"
          
        />
      </Form.Group>

      <Form.Group>
        <Form.Select className="mb-3"
          aria-label="Floating label "
          onChange={(e) => setuser({ ...user, city: e.target.value })}
      
        >
          <option>City</option>
          <option value="satna">Satna</option>
          <option value="kota" defaultValue>Kota</option>
          <option value="delhi">Delhi</option>
          <option value="ahmedabad">Ahmedabad</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" defaultChecked/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default FormMoal;
