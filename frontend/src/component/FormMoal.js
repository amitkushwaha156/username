import React,{ useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function FormMoal() {

const [user, setuser] = useState({key:"",id:"",email:"",password:""})
   
let name,value;
const handeler=(e)=>{
   name=e.target.name;
   value=e.target.value
 setuser({...user,[name]:value})
}

let arr=[]
var get = JSON.parse(localStorage.getItem('user'));
 arr=[get]

const dataSubmit=(e)=>{
e.preventDefault()
arr.push({...user,id:arr.length,key:arr.length})
localStorage.setItem('user', JSON.stringify(arr));

}
  return (
    <Form onSubmit={dataSubmit} >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="text" placeholder="Enter email" name="email" value={user.email} onChange={handeler} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="text" placeholder="Password" value={user.password} name="password"   onChange={handeler} />
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