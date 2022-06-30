import React from "react";
import Card from "@mui/material/Card";

import { Navigate, useNavigate, Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { SessionContext } from "../contexts/SessionContext";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

import { BASE_API_URL } from "../utils/constants";
import { Button, Container } from "@mui/material";

import UserProfileMaterial from './UserProfileMaterial'

///////////////NEW/////////

import Skeleton from "@mui/material/Skeleton";

function UserProfile() {
  const [jobs, setJobs] = useState(null);
  const [loading, setLoading] = useState(true);

  const { token } = useContext(SessionContext);
  //////////////NEW////

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
  return (
    <div>
      <React.Fragment>
        {jobs &&
          jobs.map((job) => {
            return (
              <Container maxWidth="sm" key={job._id}>
                <Card sx={{ maxWidth: "100vw", display: "grid" }}>
                  <div>
                    <h3>{job.title}</h3>
                  </div>
                  <div> {job.description}</div>
                  <div>
                    <p>{job.location}</p>
                  </div>
                  <Button onClick={() => handleInterest(job._id)}>
                    {<ThumbUpIcon />}
                    Like
                  </Button>
                </Card>
              </Container>
            );
          })}
      </React.Fragment>

      <Button>logout</Button>
      {/* <Button onClick={() => interestedJobNavigate()}> Favourite jobs</Button> */}
      <Link to="/favouriteJobs"> Favourite Jobs</Link>
      
      <UserProfileMaterial />

    </div>
  );
}

export default UserProfile;
