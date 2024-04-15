const express = require("express");
const { createFact, getFact } = require("../controllers/facts");
const router = express.Router();

router.post("/", createFact);
router.get("/:number", getFact);

module.exports = router;