import React from "react";
import Card from "@mui/material/Card";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState, useEffect } from "react";
import axios from "axios";
import { Navigate, useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import { SessionContext } from "../contexts/SessionContext";
import { BASE_API_URL } from "../utils/constants";
import { Button, Container } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";

import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";

function EmployerProfile() {
  const [jobs, setJobs] = useState(null);
  const [loading, setLoading] = useState(true);
  const { token } = useContext(SessionContext);
  const navigate = useNavigate();
  const getAllJobs = async () => {
    const response = await fetch(`${BASE_API_URL}/api/jobs`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();
    console.log(data);
    setJobs(data.jobOffers);
    setLoading(false);

    // axios
    //   .get(`${BASE_API_URL}/api/jobs`)
    //   .then((response) => {
    //     setJobs(response.data);
    //     console.log(response.data);
    //   })
    //   .catch((error) => console.log(error));
  };

  async function handleInterest(jobId) {
    let filterJobs = jobs.filter((job) => {
      return job._id === jobId;
    });

    const response = await fetch(`${BASE_API_URL}/auth/likejobs`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(filterJobs),
    });
  }

  useEffect(() => {
    getAllJobs();
  }, []);
  if (loading) {
    return <Skeleton variant="rectangular" width="100%" height="100%" />;
  }

  const deleteJob = (jobId) => {
    axios
      .delete(`${BASE_API_URL}/api/job/delete/${jobId}`)
      .then(() => {
        // navigate("/employer/profile");
        getAllJobs();
      })
      .catch((err) => console.log(err));
  };

  function navigatePost() {
    navigate("/postJob");
  }
  return (
    <div>
      <React.Fragment>
        {jobs &&
          jobs.map((job) => {
            return (
              <Container
                maxWidth="sm"
                key={job._id}
                direction="row"
                spacing={6}
                margin="auto"
              >
                <Card sx={{ maxWidth: "100vw" }}>
                  <div>
                    <h2>{job.title}</h2>
                  </div>
                  <div>
                    <h4> {job.description}</h4>
                  </div>
                  <div>
                    <p>{job.location}</p>
                    <div>
                      <i>€{job.salary}</i>
                    </div>
                  </div>
                  <div>
                    <Stack direction="row" spacing={"auto"}>
                      <Button
                        variant="outlined"
                        startIcon={<DeleteIcon />}
                        onClick={() => deleteJob(job._id)}
                      >
                        Delete
                      </Button>
                      <Button
                        variant="contained"
                        endIcon={<SendIcon />}
                        onClick={() => navigate(`/updatejob/${job._id}`)}
                      >
                        Update
                      </Button>
                    </Stack>
                  </div>
                </Card>
              </Container>
            );
          })}
      </React.Fragment>

      <Button>logout</Button>
      <Button onClick={() => navigatePost()}> Post</Button>
    </div>
  );
}

export default EmployerProfile;
