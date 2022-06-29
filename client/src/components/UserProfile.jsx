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
<<<<<<< HEAD
  const [jobs, setJobs] = useState(null);
  const [loading, setLoading] = useState(true);

=======
  const [jobs, setJobs] = useState([]);
>>>>>>> 0f3a379d6b8e30f36b710612c444d5214434b35e
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
<<<<<<< HEAD
    setLoading(false);
=======
>>>>>>> 0f3a379d6b8e30f36b710612c444d5214434b35e

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
<<<<<<< HEAD
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
=======

  return (
    <div>
      <h1>Profil</h1>
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
                        primary={job.description}
                        secondary={job.price}
                      />
                    </ListItem>
                  </React.Fragment>
                </List>
              </Paper>
            </React.Fragment>
          );
        })}
>>>>>>> 0f3a379d6b8e30f36b710612c444d5214434b35e
    </div>
  );
}

export default UserProfile;
