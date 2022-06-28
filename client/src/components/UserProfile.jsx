import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";

import Paper from "@mui/material/Paper";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";

import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";

import { SessionContext } from "../contexts/SessionContext";
import axios from "axios";
import { BASE_API_URL } from "../utils/constants";

function UserProfile() {
  const [jobs, setJobs] = useState(null);
  const { token } = useContext(SessionContext);
  const getAllJobs = async () => {
    const response = await fetch(`${BASE_API_URL}/api/jobs`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    console.log(data);
    setJobs(data);

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
      <h1>profiel</h1>
      {jobs &&
        jobs.map((job) => {
          return (
            <React.Fragment key={job._id}>
              <CssBaseline />
              <Paper square sx={{ pb: "50px" }}>
                <Typography
                  variant="h5"
                  gutterBottom
                  component="div"
                  sx={{ p: 2, pb: 0 }}
                >
                  Recent Jobs
                </Typography>
                <List sx={{ mb: 2 }}>
                  <React.Fragment>
                    <ListItem button>
                      <h1>{job.title}</h1>
                      <ListItemAvatar>
                        <Avatar alt="Profile Picture" />
                      </ListItemAvatar>
                      <ListItemText
                        primary={job.decription}
                        secondary={job.price}
                      />
                    </ListItem>
                  </React.Fragment>
                </List>
              </Paper>
            </React.Fragment>
          );
        })}
    </div>
  );
}

export default UserProfile;
