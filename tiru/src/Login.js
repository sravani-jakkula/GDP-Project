import React from 'react'
import './Login.css';
import team from './team.jpg';
import pilla from './pilla.jpg';


export default function Login() {
  return (
    <>
    
    <img src={team} alt="time" className='timed'/>
    <img src={pilla} alt="northwest" className='timee'/>
    <div>
       <input type="text" placeholder='enter University email' size="50" className='as'/>
       
    </div>
    <div>
       <input type="password" placeholder='enter University password' size="50" className='al'/>
   
       <button type="submit"  className='happy' >Login</button>

       <button type="submit"  className='happyl' >Register</button>

       <p className='hi'>
       Please sign-in with your Northwest username and password. <br></br>If you need assistance, please contact Northwest Technology Service Center at 660-562-1634.
       </p>
       <button type="submit"  className='happylo' >Help</button>
    </div>
   
    </>
  )
}
