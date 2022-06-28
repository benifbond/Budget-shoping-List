import React from "react";

import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";

import IconButton from "@mui/material/IconButton";

import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";

import { SessionContext } from "../contexts/SessionContext";
import axios from "axios";
import { BASE_API_URL } from "../utils/constants";
import { Container } from "@mui/material";

///////////////NEW/////////
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function UserProfile() {
  const [jobs, setJobs] = useState(null);

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
  if (!jobs) {
    <p>Looding</p>;
  }
  return (
    <div>
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
