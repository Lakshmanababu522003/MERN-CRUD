import React, { useState } from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './pages/Home';
import UpdateUser from './pages/UpdateUser';
import CreateUser from './pages/CreateUser';
import Navbar from './Navbar';


const App = () => {
    const [id,setId] = useState("");
    const getId = (id) =>{
        setId(id);
    }
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
        <Route exact path='/' element={<Home getId={getId} />}/>
        <Route exact path='/updateForm' element={<UpdateUser id={id}/>}/>
        <Route exact path='/createForm' element={<CreateUser />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
