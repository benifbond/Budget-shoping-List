import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_API_URL } from "../utils/constants";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

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
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <div>
        <input
          name="title"
          type="text"
          placeholder="job title"
          value={title}
          required
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          name="salary"
          type="number"
          value={salary}
          label="€"
          placeholder="price"
          required
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          name="location"
          type="text"
          value={location}
          placeholder="job.location"
          required
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          name="description"
          type="text"
          placeholder="Description"
          value={description}
          required
          onChange={handleChange}
        />
      </div>

      <Button variant="contained" endIcon={<SendIcon />} type="submit">
        Update
      </Button>
    </form>
  );
}
