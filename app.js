const express = require("express");
const { router } = require("./envelope.js");
const app = express();
app.use(express.json());
app.get("/", (req, res, next) => {
  res.send("Hello, World");
});
app.use("/envelopes", router);
module.exports = app;
