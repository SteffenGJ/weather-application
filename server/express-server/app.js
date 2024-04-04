const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { MONGODB_URI } = require("./config");
const Location = require("./models/location");
const cors = require("cors");

mongoose
  .connect(MONGODB_URI)
  .then((res) => console.log("CONNECTED TO DATABASE"));

app.use(cors());
app.use(express.json());

app.get("/locations", async (req, res) => {
  const locations = await Location.find({});
  res.json(locations);
});

app.post("/locations", async (req, res) => {
  const { name, country } = req.body;

  const newLocation = new Location({ name, country });

  const saved = await newLocation.save();

  res.json(saved);
});

app.post("/locations/location/:id", async (req, res) => {
  const location = await Location.findByIdAndDelete(req.params.id);
  res.json(location);
});

module.exports = app;
