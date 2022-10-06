import { useState } from "react";
import Dashboard from "./Dashboard";
import './login.css';


const Login = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));
  const users = [{ username: "Jane", password: "testpassword" }];
  const handleSubmit = (e) => {
    e.preventDefault()
    const account = users.find((user) => user.username === username);
    if (account && account.password === password) {
        setauthenticated(true)
        localStorage.setItem("authenticated", true);
    }
  };
  return (
    <div>
      <p className="para">Welcome Back</p>
      <h1 className="head">Login Page</h1>
      <div>
        <input
            type="text"
            name="Username"
            value={username}
            onChange={(e) => setusername(e.target.value)}
            required
            placeholder="Enter yor Email"
            className="emailm"
            size="30"
        />
      </div>
      <div>
        <input
            type="password"
            name="Password"
            onChange={(e) => setpassword(e.target.value)}
            required
            placeholder="Enter yor Password"
            className="pass"
            size="30"
        />
       </div>
      <button type="submit" className="simple">Submit</button>
      <button type="submit" className="simplei">Register</button>

     
    </div>
  )
};

export default Login;