const { Schema, model } = require("mongoose");

const jobSchema = new Schema({
  title: String,
  description: String,
  price: { type: Number },
  location: {
    type: String,
    default: "unknown",
  },
});

const Job = model("Job", jobSchema);
module.exports = Job;
