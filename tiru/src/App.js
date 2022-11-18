import React from "react";
import Login from './Login';
import {Link, Routes, Route} from 'react-router-dom';
import Register from './Register';
import Home from "./Home"



function App() {
  // React States
  return(
     <>
    
      <Router>
        <Routes>
          <Route path="/" element={<Profile/>}></Route>
          {/* <Route path='/login' element={<Login />}></Route> */}
          <Route path='/adminlogin' element={<AdminLogin />}></Route>
          <Route path='/faculty-signup' element={<Register />}></Route>
          <Route path='/user-signup' element={<Signup />}></Route>
          <Route path='/faculty-dashboard' element={<FacultyDash />}></Route>
          <Route path='/student-dashboard' element={<StudentDash />}></Route>
          <Route path='/assets/add' element={<AddAsset />}></Route>
          <Route path='/assets/requests' element={<AproveAssets />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />
        </Routes>
      </Router>
    </>
  )
}



export default App;