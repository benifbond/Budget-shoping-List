import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_API_URL } from "../utils/constants";

function EmployerLogin() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate;

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newUser = { email, password };
    console.log("");
    const submitUser = await axios.post(
      `${BASE_API_URL}/api/employer/login`,
      newUser
    );

    navigate("/employer/profile");
  };
  function handleChange(e) {
    if (e.target.name === "password") {
      setPassword(e.target.value);
    } else {
      setEmail(e.target.value);
    }
  }
  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          onChange={handleChange}
        />
        <button>Login</button>
      </form>
    </div>
  );
}

export default EmployerLogin;
