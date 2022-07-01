import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_API_URL } from "../utils/constants";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function UpdateJob() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [salary, setSalary] = useState("");

  const [location, setLocation] = useState("");

  const navigate = useNavigate();

  const { jobId } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let updateJob = { title, salary: Number(salary), location, description };
    const postjob = await axios.put(
      `${BASE_API_URL}/api/updatejob/${jobId}`,
      updateJob
    );
    navigate("/employer/profile");
  };

  function handleChange(e) {
    console.log(e.target.value);
    if (e.target.name === "salary") {
      setSalary(e.target.value);
    } else if (e.target.name === "location") {
      setLocation(e.target.value);
    } else if (e.target.name === "title") {
      setTitle(e.target.value);
    } else {
      setDescription(e.target.value);
    }
  }

  useEffect(() => {
    axios
      .get(`${BASE_API_URL}/api/jobs/${jobId}`)
      .then((response) => {
        setTitle(response.data.title);
        setLocation(response.data.location);
        setSalary(response.data.salary);
        setDescription(response.data.description);
      })
      .catch((error) => console.log(error));
  }, []);
  if (!title) {
    return <p>Loading....</p>;
  }

  return (
    <Box
      onSubmit={(e) => {
        handleSubmit(e);
      }}
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "50ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          name="title"
          type="text"
          label="Job title"
          value={title}
          onChange={handleChange}
          id="outlined-required"
          required
        />
      </div>
      <div>
        <TextField
          name="salary"
          type="number"
          value={salary}
          label="Salary (EUR)"
          id="outlined-required"
          required
          onChange={handleChange}
        />
      </div>
      <div>
        <TextField
          name="location"
          type="text"
          value={location}
          label="Job.location"
          required
          onChange={handleChange}
        />
      </div>

      <div>
        <TextField
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={5}
          name="description"
          type="text"
          value={description}
          onChange={handleChange}
          required
        />
      </div>

      <Button variant="contained" endIcon={<SendIcon />} type="submit">
        Update
      </Button>
    </Box>
  );
}
