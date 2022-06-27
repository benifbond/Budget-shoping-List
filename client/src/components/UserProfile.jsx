import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_API_URL } from "../utils/constants";

function UserProfile() {
  const [jobs, setJobs] = useState([]);

  const getAllJobs = () => {
    axios
      .get(`${BASE_API_URL}/api/jobs`)
      .then((response) => setJobs(response.data))
      .catch((error) => console.log(error));
  };
  console.log(jobs);
  useEffect(() => {
    getAllJobs();
  }, []);

  return (
    <div>
      <h1>profiel</h1>
      {jobs.map((job) => {
        return <h1>{job.title}</h1>;
      })}
    </div>
  );
}

export default UserProfile;
