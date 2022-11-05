const express = require("express");
const cors = require("cors");

const { solveArithemeticOp } = require("./controller/operationsController");

const app = express();

app.use(cors()); // enables cors for all origins!
app.use(express.json()); //  parses json body to JS object

app.get("/", (req, res, next) => {
  return res.redirect("/profile");
});

app.get("/profile", (req, res, next) => {
  return res.status(200).json({
    slackUsername: "Omobolaji Sonde",
    backend: true,
    age: 18,
    bio: "Building highly performant web apps with React.js ☸ x Node.js ⚙",
  });
});

app.post("/arithmetic_op", solveArithemeticOp);

app.use((err, req, res, next) => {
  return res.status(400).json({
    success: false,
    message: err.message,
  });
});

module.exports = app;
