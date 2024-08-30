document.addEventListener('DOMContentLoaded', function() {
    let calendarEl = document.getElementById('calendar');
    let calendar = new FullCalendar.Calendar(calendarEl, {
        
      initialView: 'dayGridMonth',
      height: 550,
      selectable: true,
      editable: true,
      dateClick: function(info){
        alert('clicked ' + info.dateStr)
      },
      events: [
        {
          title  : 'event1', 
          start  : '2023-06-06'
        }],
      eventColor: 'red',
      dayMaxEventRows: true,  
    });
    
    calendar.render();
  });