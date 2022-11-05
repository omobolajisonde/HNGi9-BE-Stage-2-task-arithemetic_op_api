const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors()); // enables cors for all origins!

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

module.exports = app;
