import React from 'react';
import { Routes, Route , useNavigate } from 'react-router-dom';
import group from '../src/images/group.jpg'
import './login.css'
import Register from './Register';

export default function Login() {
  const Navigate = useNavigate();

  const fun = () =>{
    Navigate('/Register');
  } 
  return (
    <>   
    <Routes>
      <Route path="/Register" element={<Register />}/>
    </Routes> 

<div class="split left">
  <div class="centered">
    <img src={group} className="lo"/>    
  </div>
</div>

<div class="split right">
  <div class="centered">
    <h1 className='head'>Login Page</h1>
    <input type="text" size="50" placeholder='Enter Your Email' required className='email'/>
    <input type="password" size="50" placeholder='Enter Your password' required className='password'/>

  </div>
  <button type="submit"  className='butt'>Submit</button>
  <button type="submit"  onClick={fun} className='regi' >Register</button>

</div>
    </>
  )
}
