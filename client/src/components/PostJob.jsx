import { useNavigate } from "react-router-dom";

import { useState } from "react";
import axios from "axios";
import { BASE_API_URL } from "../utils/constants";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const PostJob = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const [location, setLocation] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newJob = { title, price, location, description };
    console.log("this is the new job", newJob);
    const postjob = await axios.post(`${BASE_API_URL}/api/postjob`, newJob);

    navigate("/employer/profile");
  };
  function handleChange(e) {
    console.log(e.target.value);
    if (e.target.name === "price") {
      setPrice(e.target.value);
    } else if (e.target.name === "location") {
      setLocation(e.target.value);
    } else if (e.target.name === "title") {
      setTitle(e.target.value);
    } else {
      setDescription(e.target.value);
    }
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          name="title"
          type="text"
          placeholder="job title"
          required
          onChange={handleChange}
        />
        <input
          name="price"
          type="number"
          label="€"
          placeholder="price"
          required
          onChange={handleChange}
        />
        <input
          name="description"
          type="text"
          placeholder="Description"
          required
          onChange={handleChange}
        />
        <input
          name="location"
          type="text"
          placeholder="job location"
          required
          onChange={handleChange}
        />

        {/* <Button variant="contained" endIcon={<SendIcon />}>
          post
        </Button> */}
        <button> post</button>
      </form>
    </div>
  );
};

export default PostJob;
