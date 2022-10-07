import React from 'react';
import time from '../src/images/time.jpg'
import './login.css'

export default function Register() {
  return (
    <>

<div class="split left">
  <div class="centered">
    <img src={time} className="lo"/>    
  </div>
</div>

<div class="split right">
  <div class="centered">
    <h1 className='head'>Register Page</h1>
    <input type="text" size="50" placeholder='Enter Your Email' required className='email'/>
    <input type="text" size="50" placeholder='Enter Your Full Name' required className='ji'/>

    <input type="password" size="50" placeholder='Createpassword' required className='password'/>

    <input type="password" size="50" placeholder='re-enter password' required className='password'/>

  </div>
  
  <button type="submit"  className='reg'>Register</button>

</div>
</>

  )

  }

