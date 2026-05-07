import { useState } from "react";
import axios from "axios";

function Login() {
  const [login, setLogin] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    const res = await axios.get("http://localhost:3000/users");

    const user = res.data.find(
      (u) => u.email === login.email && u.password === login.password
    );

    if (user) {
      alert("Login Successful");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      <h1>Login</h1>

      <input name="email" placeholder="Email" onChange={handleChange} />
      <br /><br />

      <input type="password" name="password" placeholder="Password" onChange={handleChange} />
      <br /><br />

      <button onClick={handleLogin}>Login</button>
    </>
  );
}

export default Login;