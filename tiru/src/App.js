import React from "react";
import Login from './Login';
import {Link, Routes, Route} from 'react-router-dom';
import Register from './Register';
import Home from "./Home"



function App() {
  // React States
  return(
     <>
     {/* <nav>
      <ul>
        <li>
          <Link to="/">Start</Link>
        </li>
      </ul>
     </nav>
      <Routes>
        <Route path="*l" element={<Login/>}/>
        <Route path="/Register" element={<Register />}/>        
      </Routes> */}
      <Home />

     </>
  );
}

export default App;