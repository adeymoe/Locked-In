const mongoose = require("mongoose");

const CalendarSchema = new mongoose.Schema({
  eventName: {
    type: String,
    required: true,
  },
  eventDate: {
    type: Date,
    required: true,
  }
});

module.exports = mongoose.model("Calendar", CalendarSchema);