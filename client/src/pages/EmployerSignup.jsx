import { useNavigate } from "react-router-dom";
// import { signup } from "../utils/helper";
import { useState } from "react";
import axios from "axios";
import { BASE_API_URL } from "../utils/constants";

const EmployerSignup = () => {
  // const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [name, setName] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newUser = { email, password, name };
    console.log(newUser);
    const submitUser = await axios.post(
      `${BASE_API_URL}/api/employer/signup`,
      newUser
    );
    navigate("/employer/profile");
    console.log(submitUser.data);
  };
  function handleChange(e) {
    if (e.target.name === "password") {
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
          placeholder="Company's name"
          required
          onChange={handleChange}
        />
        <button>submit</button>
      </form>
    </div>
  );
};

export default EmployerSignup;

// import * as React from "react";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import { Button } from "@mui/material";

// export default function EmployerSignup() {
//   // const [user, setUser] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const [name, setName] = useState("");

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     let newUser = { email, password, name };
//     console.log(newUser);
//     const submitUser = await axios.post(
//       `${BASE_API_URL}/api/employer/signup`,
//       newUser
//     );
//     navigate("/employer/profile");
//   };
//   function handleChange(e) {
//     if (e.target.name === "password") {
//       setPassword(e.target.value);
//     } else if (e.target.name === "name") {
//       setName(e.target.value);
//     } else {
//       setEmail(e.target.value);
//     }
//   }

//   return (
//     <Box
//       component="form"
//       sx={{
//         "& .MuiTextField-root": { m: 1, width: "25ch" },
//       }}
//       noValidate
//       autoComplete="off"
//       onSubmit={(e) => {
//         handleSubmit(e);
//       }}
//     >
//       <div>
//         <TextField
//           required
//           id="outlined-required"
//           label="name"
//           name="name"
//           onChange={handleChange}
//         />

//         <TextField
//           id="outlined-password-input"
//           label="Password"
//           type="password"
//           name="password"
//           autoComplete="current-password"
//           onChange={handleChange}
//           // variant="filled"
//         />

//         <TextField
//           id="outlined-email"
//           label="email"
//           type="email"
//           name="email"
//           InputLabelProps={{}}
//           onChange={handleChange}
//         />
//       </div>

//       <div>
//         <Button variant="contained">Register</Button>
//       </div>
//     </Box>
//   );
// }
