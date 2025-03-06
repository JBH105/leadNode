const express = require("express");
const { addLead, fetchLeads } = require("../controller/leadController");

const router = express.Router();
router.post("/leads", addLead);
router.get("/leads", fetchLeads);

module.exports = router;