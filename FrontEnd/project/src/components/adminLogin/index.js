import {Component} from 'react'
import CommonLogin from '../commonLogin'

import './index.css'

class AdminLogin extends Component {
  onAdminLogin = adminDetails => {
    const {history} = this.props
    console.log(adminDetails)
    fetch('http://localhost:8080/Admin/adminLogin', {
      method: 'POST',
      cache: 'no-cache',
      headers: {'Content-Type': 'application/json'},
      body: adminDetails,
    }).then(resp =>  resp.json()) 
    .then((result) => {
      if(result.loggedIn) {
        history.replace('/Home')
        console.log('Admin Logged In successfully', result)
      }
    })
    
  }

  render() {
    return (
      <div>
        <CommonLogin
          onAdminLogin={this.onAdminLogin}
          buttontext="ADMIN LOGIN"
        />
      </div>
    )
  }
}

export default AdminLogin
