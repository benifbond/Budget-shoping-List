import { useNavigate } from "react-router-dom";
import { signup } from "../utils/helper";
import { useState } from "react";
import axios from "axios";
import { BASE_API_URL } from "../utils/constants";

import UserSignupMaterial from '../components/UserSignupMaterial'

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




const UserSignup = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newUser = { username: user, email, password };
    const submitUser = await axios.post(`${BASE_API_URL}/auth/signup`, newUser);
    navigate("/user/login");
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

      <UserSignupMaterial />

    </div>
  );
};

export default UserSignup;
