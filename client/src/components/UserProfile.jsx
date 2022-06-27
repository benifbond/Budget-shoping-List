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
        return (
          <React.Fragment>
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
                {jobs.map(({ id, primary, secondary, person }) => (
                  <React.Fragment key={id}>
                    <ListItem button>
                      <h1>{jobs.title}</h1>
                      <ListItemAvatar>
                        <Avatar alt="Profile Picture" src={person} />
                      </ListItemAvatar>
                      <ListItemText primary={primary} secondary={secondary} />
                    </ListItem>
                  </React.Fragment>
                ))}
              </List>
            </Paper>
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default UserProfile;
