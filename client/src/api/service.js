// src/api/service.js

import axios from "axios";

const api = axios.create({
  // make sure you use PORT = 5005 (the port where our server is running)
  baseURL: "http://localhost:5005/auth",
  // withCredentials: true // => you might need this option if using cookies and sessions
});

const errorHandler = (err) => {
  throw err;
};

const getUserPhoto = () => {
  return api
    .get("/employer/photo")
    .then((res) => res.data)
    .catch(errorHandler);
};

const uploadImage = (file) => {
  return api
    .post("/employer/upload", file)
    .then((res) => res.data)
    .catch(errorHandler);
};

const createImages = (newMovie) => {
  return api
    .post("/employer/images", newMovie)
    .then((res) => res.data)
    .catch(errorHandler);
};

export default {
  getUserPhoto,
  uploadImage,
  createImages,
};
