import { useState } from "react";
import axios from "axios";

function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!user.name || !user.email || !user.password) {
      alert("All fields required");
      return;
    }

    await axios.post("http://localhost:3000/users", user);
    alert("Registered Successfully");
  };

  return (
    <>
      <h1>Register</h1>

      <input name="name" placeholder="Name" onChange={handleChange} />
      <br /><br />

      <input name="email" placeholder="Email" onChange={handleChange} />
      <br /><br />

      <input type="password" name="password" placeholder="Password" onChange={handleChange} />
      <br /><br />

      <button onClick={handleSubmit}>Register</button>
    </>
  );
}

export default Register;