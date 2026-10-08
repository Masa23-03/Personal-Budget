const express = require("express");
const { getAllFromDB, getOneFromDB } = require("./db");
const router = express.Router();
router.get("/", (req, res, next) => {
  const data = getAllFromDB();
  res.send(data);
});
router.get("/:id", (req, res, next) => {
  let envelopeId = req.params.id;
  envelopeId = Number(envelopeId);
  if (Number.isNaN(envelopeId)) return res.status(400).send("Invalid Id");
  const element = getOneFromDB(envelopeId);
  if (!element) return res.status(404).send("Envelope was not found");
  res.send(element);
});
module.exports = router;
