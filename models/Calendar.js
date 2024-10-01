const mongoose = require("mongoose");

const CalendarSchema = new mongoose.Schema({
  event: {
    type: String,
    required: true,
  },
  eventDate: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("Calendar", CalendarSchema);
