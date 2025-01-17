import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import Axios from 'axios'
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {

    const navigate = useNavigate();

    const[username,setUsername] = useState("");
    const[password,setPassword] = useState("");
    const sumbitHandler = (e) =>{
        e.preventDefault();
        // console.log(username+" "+password);
        Axios.post('http://localhost:4000/users/add',{username:username,password:password})
        .then(() => alert("User Created") )
        .catch(e => console.log(e))
        setUsername("");
        setPassword("");
        navigate('/')
    }

  return (
    <Container>
    <Form onSubmit={sumbitHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>UserName</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e) => setUsername(e.target.value)} value={username} />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
  )
}

export default CreateUser
