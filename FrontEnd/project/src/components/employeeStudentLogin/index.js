import {Component} from 'react'
import CommonLogin from '../commonLogin'

import './index.css'

class EmployeeStudentLogin extends Component {
  onAdminLogin = adminDetails => {
    const {history} = this.props
    console.log(adminDetails)
    fetch('http://localhost:8080/User/existingUser', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {'Content-Type': 'application/json'},
      body: adminDetails,
    }).then(resp =>  resp.json()) 
    .then((result) => {
      if(result.loggedIn) {
        history.replace('/Home')
        console.log('user Logged In successfully', result)
      }else{
        alert("Wrong Username or Password")
      }
    })
  }

  render() {
    return (
      <div>
        <CommonLogin
          onAdminLogin={this.onAdminLogin}
          buttontext="EMPLOYEE / STUDENT LOGIN"
        />
      </div>
    )
  }
}

export default EmployeeStudentLogin
