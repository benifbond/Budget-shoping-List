import { useNavigate } from "react-router-dom";
import { login } from "../utils/helper";
import { useState, useContext } from "react";
import axios from "axios";
import { BASE_API_URL } from "../utils/constants";
import { SessionContext } from "../contexts/SessionContext";

import UserLoginMaterial from "../components/UserLoginMaterial";

//<<<<<<<<<<<<<<<IMPORT from M-UI>>>>>>>>>>>>>>>
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';




const UserLogin = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { authenticateUser, verifyAuth } = useContext(SessionContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newUser = { username: user, email, password };

    const submitUser = await axios.post(`${BASE_API_URL}/auth/login`, newUser);
    console.log(submitUser.data);
    authenticateUser(submitUser.data.authToken);
    verifyAuth();
    navigate("/user/profile");
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
        <button>Login</button>
      </form>

<UserLoginMaterial />

    </div>
  );
}

export default UserLogin;

