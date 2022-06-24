import React from "react";
import { useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_API_URL } from "../utils/constants";

function UserProfile() {
  const [jobs, setJobs] = useState();

  useEffect(() => {
    // <== ADD THE EFFECT
    axios
      .get(`${BASE_API_URL}/api/jobs`)

      .then((response) => {
        setJobs(response.data);
      });
  }, [jobs]);
  console.log(jobs);

  return <div></div>;
}

export default UserProfile;
