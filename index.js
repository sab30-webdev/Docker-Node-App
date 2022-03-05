const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.enable("trust proxy");

app.get("/api", (req, res) => {
  res.json("Hello docker!");
  console.log("Load Balancing...");
});

app.post("/api", (req, res) => {
  res.json(`Hello ${req.body.name}`);
  console.log(`Hello ${req.body.name}`);
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));
