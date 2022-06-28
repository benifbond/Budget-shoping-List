const { Schema, model } = require("mongoose");

const jobSchema = new Schema({
  title: String,
  description: String,
  salary: { type: Number },
  location: {
    type: String,
    default: "unknown",
  },
  imageUrl: String,
});

const Job = model("Job", jobSchema);
module.exports = Job;
