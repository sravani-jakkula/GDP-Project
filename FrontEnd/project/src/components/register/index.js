import {Component} from 'react'

import './index.css'

class RegisterPage extends Component {
  state = {
    userId: '',
    password: '',
    userFname: '',
    userLname: '',
    deptId: '',
  }

 

  onSubmitLoginForm = event => {
    event.preventDefault()

    const {history} = this.props
    const {userId, password, userFname, userLname, deptId} = this.state

    const userDetails = {
      userId,
      password,
      userFname,
      userLname,
      deptId,
    }
    console.log(userDetails)
    fetch('http://localhost:8080/User/newuser', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(userDetails),
    }).then(resp =>  resp.json()) 
    .then((result) => {
      if(result.registered) {
        history.replace('/login')
        console.log('user registered In successfully', result)
      }
    })
    // const stringifiedData = JSON.stringify(userDetails)
    // console.log(stringifiedData)
  }

  onChangeUsername = event => {
    this.setState({
      userId: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onChangeFirstName = event => {
    this.setState({
      userFname: event.target.value,
    })
  }

  onChangeLastName = event => {
    this.setState({
      userLname: event.target.value,
    })
  }

  onChangeDepartment = event => {
    this.setState({
      deptId: event.target.value,
    })
  }

  renderInput = (placeholder, value, onChangeFunction) => (
    <input
      value={value}
      placeholder={placeholder}
      className="signup-input"
      onChange={onChangeFunction}
    />
  )



  render() {
    const {userId, password, userFname, userLname, deptId} = this.state
    return (
      <div className="login-container">
        <div className="login-form">
          <h1 className="login-h1">Sign up</h1>
          <p>Register and enjoy the service</p>
          <form onSubmit={this.onSubmitLoginForm}>
            <div>
              {this.renderInput('Username', userId, this.onChangeUsername)}
              
              <br />
              {this.renderInput('Password', password, this.onChangePassword)}
              
              <br />
              {this.renderInput(
                'First Name',
                userFname,
                this.onChangeFirstName,
              )}
              <br />
              {this.renderInput('Last Name', userLname, this.onChangeLastName)}
              <br />
              {this.renderInput('Department', deptId, this.onChangeDepartment)}
            </div>
            <button type="submit"  className="signup-button">
              Sign Up
            </button>
          </form>
        </div>
        <div className="login-college-image-container">
          <img
            src="https://res.cloudinary.com/degjdup40/image/upload/v1664591961/WhatsApp_Image_2022-10-01_at_5.21.50_AM_kb6fot.jpg"
            alt="college logo"
            className="login-college-image"
          />
        </div>
      </div>
    )
  }
}

export default RegisterPage
