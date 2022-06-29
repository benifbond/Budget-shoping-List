import React from "react";
import Card from "@mui/material/Card";

import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { SessionContext } from "../contexts/SessionContext";

import { BASE_API_URL } from "../utils/constants";
import { Container } from "@mui/material";

///////////////NEW/////////

import Skeleton from "@mui/material/Skeleton";

<Skeleton variant="circular" width={40} height={40} />;

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

  useEffect(() => {
    getAllJobs();
  }, []);
  if (loading) {
    return <Skeleton variant="rectangular" width="100%" height="100%" />;
  }
  return (
    <div>
      <h1>UserpROFILE </h1>
      <React.Fragment>
        {jobs &&
          jobs.map((job) => {
            return (
              <Container maxWidth="sm" key={job._id}>
                <div>
                  <Card sx={{ maxWidth: "100vw" }}>
                    <div>{job.title}</div>
                    {job.description}
                  </Card>
                </div>
              </Container>
            );
          })}
      </React.Fragment>
    </div>
  );
}

export default UserProfile;
