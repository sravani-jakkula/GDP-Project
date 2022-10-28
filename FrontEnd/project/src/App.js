import {Switch, Route} from 'react-router-dom'
import LandingPage from './components/landing'
import LoginPage from './components/login'
import RegisterPage from './components/register'
import AdminLogin from './components/adminLogin'
import EmployeeStudentLogin from './components/employeeStudentLogin'
import Home from './components/home'

import './App.css'

const App = () => (
  <div className="container">
    <Switch>
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/admin_login" component={AdminLogin} />
      <Route exact path="/" component={LandingPage} />
      <Route path="/employee_student_login" component={EmployeeStudentLogin} />
      <Route path="/home" component={Home} />
    </Switch>
  </div>
)

export default App
