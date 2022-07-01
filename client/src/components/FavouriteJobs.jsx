import React from "react";
import { BASE_API_URL } from "../utils/constants";
import { SessionContext } from "../contexts/SessionContext";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import FavouriteJobsMaterial from "./FavouriteJobsMaterial";
import { Button, Card, Container, Stack } from "@mui/material";

function FavouriteJob() {
  const [likeJobs, setLikeJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const { token } = useContext(SessionContext);
  useEffect(() => {
    async function fetchFavouriteJobs() {
      let response = await fetch(`${BASE_API_URL}/auth/favouritejobs`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      let parse = await response.json();

      console.log("here is the pased job on client", parse);
      setLikeJobs(parse.applyJobs);
    }
    fetchFavouriteJobs();
  }, []);

  function navigateProfile() {
    navigate("/user/profile");
  }

  return (
    // <div>
    //   {likeJobs.map((likejob, index) => {
    //     return <h3>{likejob.title}</h3>;
    //   })}

    <div>
      <React.Fragment>
        {likeJobs &&
          likeJobs.map((job, index) => {
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
                    <Stack direction="row" spacing={"auto"}></Stack>
                  </div>
                </Card>
              </Container>
            );
          })}
      </React.Fragment>

      <Button>logout</Button>
      <Button variant="contained" onClick={() => navigateProfile()}>
        Back to profile
      </Button>
    </div>
  );
}

export default FavouriteJob;
