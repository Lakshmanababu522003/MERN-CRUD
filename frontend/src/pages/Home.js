import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Table from 'react-bootstrap/Table';
import Axios from 'axios'
import { useNavigate } from 'react-router-dom';


const Home = ({getId}) => {
    const navigate = useNavigate();
    const [users,setUsers] = useState([]);
    useEffect(() => {
        Axios.get('http://localhost:4000/users')
        .then(res => setUsers(res.data))
    })

    const deleteUser =(id) =>{
        Axios.delete(`http://localhost:4000/users/${id}`)
        .then(() => alert("user deleted"))
        .catch((e) => console.log(e))
    }

    const updateUser = (id) =>{
        getId(id)
        navigate('/updateForm')
    }

    const CreateUser = () =>{
        navigate('/createForm')
    }

  return (
    
    <Container>
        <h1 className='display-3 text-center'>Users List</h1>
        <Table striped>
      <thead>
        <tr>
          <th>S.No</th>
          <th>Username</th>
          <th>Password</th>
          
        </tr>
      </thead>
      <tbody>
        {users.map((user,index) =>{
            return (
                <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.username}</td>
                <td>{user.password}</td>
                <td><button className='btn btn-primary' onClick={() => updateUser(user._id)}>Update</button></td>
                <td><button className='btn btn-danger' onClick={() => deleteUser(user._id)}>Delete</button></td>
              </tr>
            )
        })}
      </tbody>
    </Table>
    <button className='btn btn-primary' onClick={() => CreateUser()}>Create User</button>
    </Container>
  )
}

export default Home
