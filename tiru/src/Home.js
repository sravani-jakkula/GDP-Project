import React from 'react'
import Green from "./images/Green.png"
import "./Login.css"

export default function home() {
  return (
    <>
    <div className='body'>
      <div className='tops'>
         <img src={Green} className="image"/>
         <a href="#">home</a>
         <a href="#">Login</a>
         <a href="#">Register</a>      
         <input type="text" id="text" placeholder='search'/>
         <a href="#">LogOut</a>  
      </div>
      <div className='bottoms'>
 
      </div>
    </div>
    <>
   <div className='body'>
     <div className='tops'>
        <img src={Green} className="image"/>
        <a href="#">assets</a>
        <a href="#">LogOut</a>
        <a href="#">help</a>      
        
     </div>
     <div className='bottoms'>

     </div>
   </div>
   </>
    </>
  )
}
