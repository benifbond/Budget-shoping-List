import React from "react";
import { BASE_API_URL } from "../utils/constants";
import { SessionContext } from "../contexts/SessionContext";
import { useState, useEffect, useContext } from "react";

function FavouriteJob() {
  const [likeJobs, setLikeJobs] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <div>
      {likeJobs.map((likejob, index) => {
        return <h3>{likejob.title}</h3>;
      })}
    </div>
  );
}

export default FavouriteJob;
