const express = require("express");
const router = express.Router();
const { explainText } = require("../controllers/explainController");

router.post("/", explainText);

module.exports = router;
