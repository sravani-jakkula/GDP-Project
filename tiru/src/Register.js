import React, {useState} from 'react';
import time from '../src/images/time.jpg'
import './Login.css'

export default function Register() {
    const [name, setName] = useState("");    
    const [ema, setEma] = useState("");
    const [pass,setPass] = useState("");
    const [repass,setRepass] = useState("");

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "name"){
            setName(value);
        }
        
        if(id === "ema"){
            setEma(value);
        }
        if(id === "pass"){
            setPass(value);
        }
        if(id === "repass"){
            setRepass(value);
        }
        

    }
    const handleSubmit  = () => {
      
      window.location.href = "Login.js"
      console.log(name,ema,pass,repass);
  }
  
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
    <div>
      <label for="ema"></label>
      <input type="email" size="50" value={ema} onChange = {(e) => handleInputChange(e)} placeholder='Enter Your Email' required id="ema" className='email'/>
      <span id="e"></span>
    </div>
    <div>
      <label for="name"></label>
      <input type="text" size="50" value={name} onChange = {(e) => handleInputChange(e)} placeholder='Enter Your Full Name' required id="name" className='ji'/>
      <span id="f"></span>
    </div>
    <div>
      <label for="pass"></label>
      <input type="password" size="50" value={pass} onChange = {(e) => handleInputChange(e)} placeholder='Enter Your Password' required id="pass" className='password'/>
      <span id="p"></span>
    </div>
    <div>
      <label for="reenter"></label>
      <input type="password" size="50" value={repass} onChange = {(e) => handleInputChange(e)} placeholder='Re-enter Your password' required id="repass" className='password'/>
      <span id=""></span>
    </div>
    


  </div>
  
  <button type="submit"  onClick={()=>handleSubmit()} className='reg'>Register</button>

  </div>
</>

  )

}