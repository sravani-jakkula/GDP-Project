import {Link} from 'react-router-dom'
import './index.css'

const LandingPage = () => (
  <div className="LandingPage">
    <div>
      <h1 className="login-register-h1">LOGIN / REGISTER PAGE</h1>
      <p className="login-register-p">Join Us Now And Don&apos;t Waste Time</p>
      <div>
        <Link to="login">
          <button type="button" className="login-register-button">
            Log In
          </button>
        </Link>
        <Link to="register">
          <button type="button" className="login-register-button">
            Register
          </button>
        </Link>
      </div>
    </div>
  </div>
)

export default LandingPage
