import { useNavigate } from "react-router-dom";
import { signup } from "../utils/helper";
import { useState } from "react";
import axios from "axios";
import { BASE_API_URL } from "../utils/constants";

const EmployerSignup = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [name, setName] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newUser = { username: user, email, password, name };
    const submitUser = await axios.post(
      `${BASE_API_URL}/auth/employer/signup`,
      newUser
    );
    console.log(submitUser.data);
  };
  function handleChange(e) {
    if (e.target.name === "username") {
      setUser(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    } else if (e.target.name === "name") {
      setName(e.target.value);
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
        <input
          name="name"
          type="text"
          placeholder="Company"
          required
          onChange={handleChange}
        />
        <button>submit</button>
      </form>
    </div>
  );
};

export default EmployerSignup;
