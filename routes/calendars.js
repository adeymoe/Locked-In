const express = require("express");
const router = express.Router();
const calendarsController = require("../controllers/calendars");
const { ensureAuth, ensureGuest } = require("../middleware/auth");


router.post("/createEvent", calendarsController.createEvent);

module.exports = router;