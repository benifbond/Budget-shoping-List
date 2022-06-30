import { useNavigate } from "react-router-dom";

import { useState } from "react";
import axios from "axios";
import { BASE_API_URL } from "../utils/constants";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const PostJob = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [salary, setSalary] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const [location, setLocation] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newJob = { title, salary, location, description };

    const postjob = await axios.post(`${BASE_API_URL}/api/postjob`, newJob);

    navigate("/employer/profile");
  };
  function handleChange(e) {
    console.log(e.target.value);
    if (e.target.name === "salary") {
      setSalary(e.target.value);
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
        <div>
          <input
            name="title"
            type="text"
            placeholder="job title"
            required
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            name="salary"
            type="number"
            label="€"
            placeholder="price"
            required
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            name="location"
            type="text"
            placeholder="job location"
            required
            onChange={handleChange}
          />
        </div>
        <div>
          <textArea
            name="description"
            type="text"
            placeholder="Description"
            required
            onChange={handleChange}
          />
        </div>

        <button>post</button>
      </form>
    </div>
  );
};

export default PostJob;
