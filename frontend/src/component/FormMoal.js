import React, { useState,useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
 import "./Formstyle.css"
function FormMoal() {
  const [user, setuser] = useState({ name:"" ,address:"", email: "", mobile: "",gender:"" ,city:""});

  let name, value;
  const handeler = (e) => {
    name = e.target.name;
    value = e.target.value;
    setuser({ ...user, [name]: value });
  };
  const dataSubmit = (e) => {
    e.preventDefault();
    console.log(user)
  };
  
  return (
    <Form onSubmit={dataSubmit} method="post" >
      <Form.Group className="mb-3 boxStyle mt-3" controlId="">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={name}
          onChange={handeler}
        />
      </Form.Group>

      <Form.Group className=" boxStyle mb-3">
        <Form.Label>Address</Form.Label>
        <Form.Control
          as="textarea"
          
          onChange={(e) => setuser({...user, address: e.target.value})}
        />
      </Form.Group>
      <Form.Group className="mb-3 boxStyle" controlId="">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="text"
          name="email"
          value={user.email}
          onChange={handeler}
        />
      </Form.Group>

      <Form.Group className="mb-3 boxStyle" controlId="">
        <Form.Label>Mobile</Form.Label>
        <Form.Control
          type="number"
          placeholder="Mobile"
          value={user.mobile}
          name="mobile"
          onChange={handeler}
        />
      </Form.Group>

      <Form.Label  className=" boxStyle">Gender</Form.Label>
      <Form.Group onChange={handeler}
      
          >
        <Form.Check inline label="Male" name="gender" type="radio" value="Male" />
        <Form.Check inline label="Female" name="gender" type="radio" value="Female"  />
      </Form.Group>

      <Form.Group>
        <Form.Select aria-label="Floating label select example"  onChange={(e) => setuser({...user, city: e.target.value})}>
          <option>select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default FormMoal;
