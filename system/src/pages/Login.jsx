import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [login, setLogin] = useState({
    email: "",
    password: ""
  });

  const [emailError, setEmailError] = useState("");

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const validateEmail = () => {

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(login.email)) {
      setEmailError("Invalid Email Format");
    } else {
      setEmailError("");
    }
  };

  const handleLogin = async () => {

    const res = await axios.get("http://localhost:3000/users");

    const user = res.data.find(
      (u) =>
        u.email === login.email &&
        u.password === login.password
    );

    if (user) {
      alert("Login Successful");
      navigate("/dashboard");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="form">

      <h1>Login</h1>

      <input
        name="email"
        placeholder="Email"
        onChange={handleChange}
        onBlur={validateEmail}
      />

      <p>{emailError}</p>

      <br />

      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
      />

      <br /><br />

      <button onClick={handleLogin}>
        Login
      </button>

      <Link to="/register">
        <button>To Register</button>
      </Link>

    </div>
  );
}

export default Login;