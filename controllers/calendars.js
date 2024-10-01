const Calendar = require("../models/Calendar");

module.exports = {
    createEvent: async (req, res) => {
      try {
        
        await Calendar.create({
          event: req.body.event,
          eventDate: req.body.eventDate,
        });
        console.log("Event has been added!");
        res.redirect("/todos");
      } catch (err) {
        console.log(err);
      }
    },
   
  };
  