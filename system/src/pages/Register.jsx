import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Register() {

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [emailError, setEmailError] = useState("");

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const validateEmail = () => {

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(user.email)) {
      setEmailError("Invalid Email Format");
    } else {
      setEmailError("");
    }
  };

  const handleSubmit = async () => {

    if (
      !user.name ||
      !user.email ||
      !user.password ||
      !user.confirmPassword
    ) {
      alert("All fields required");
      return;
    }

    if (user.password.length < 6) {
      alert("Password must contain minimum 6 characters");
      return;
    }

    if (user.password !== user.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    await axios.post("http://localhost:3000/users", user);

    alert("Registered Successfully");
  };

  return (
    <div className="form">

      <h1>Register</h1>

      <input
        name="name"
        placeholder="Name"
        onChange={handleChange}
      />

      <br /><br />

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

      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        onChange={handleChange}
      />

      <br /><br />

      <button onClick={handleSubmit}>
        Register
      </button>

      <Link to="/">
        <button>To Login</button>
      </Link>

    </div>
  );
}

export default Register;