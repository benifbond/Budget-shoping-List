import { useNavigate } from "react-router-dom";
import { signup } from "../utils/helper";
import { useState } from "react";
import axios from "axios";
import { BASE_API_URL } from "../utils/constants";

const SignupPage = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newUser = { username: user, email, password };
    const submitUser = await axios.post(`${BASE_API_URL}/auth/signup`, newUser);
    console.log(submitUser.data);
  };
  function handleChange(e) {
    if (e.target.name === "username") {
      setUser(e.target.value);
    } else if (e.target.name === "password") {
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
          name="username"
          type="text"
          placeholder="Username"
          required
          onChange={handleChange}
        />

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
        <button>submit</button>
      </form>
    </div>
  );
};

export default SignupPage;
