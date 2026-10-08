const express = require("express");
const { getAllFromDB } = require("./db");
const router = express.Router();
router.get("/", (req, res, next) => {
  const data = getAllFromDB();
  res.send(data);
});
module.exports = router;
