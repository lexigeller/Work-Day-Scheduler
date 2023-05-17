$(document).ready(function() {
  
  $(".container-lg").on("click", ".btn.saveBtn.col-2.col-md-1", function() {
    // Get the user input from the corresponding textarea
    var eventInput = $(this).siblings(".description").val();

    // Get the id of the containing time-block
    var timeBlockId = $(this).closest("div[id^='hour-']").attr("id");

    // Save the user input in local storage using the timeBlockId as the key
    localStorage.setItem(timeBlockId, eventInput);
  });

  // Get the current hour in 24-hour format
  var currentHour = dayjs().format('H');

  // Loop through each time block
  $(".container-lg > div > div[id^='hour-']").each(function() {
    var blockHour = parseInt($(this).attr("id").split("-")[1]);
    var currentHour = dayjs().format('H');

    if (blockHour < currentHour) {
      $(this).addClass("past");
    } else if (blockHour == currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });
  
  $(".description").each(function() {
    var timeBlockId = $(this).parent().attr("id");

    // Retrieve the user input from local storage using the timeBlockId as the key
    var userInput = localStorage.getItem(timeBlockId);

    // Set the value of the textarea element
    $(this).val(userInput);
  });
  // Displays the current date in the header of the page
  var currentDate = dayjs().format('MMM D, YYYY');
  $("#currentDay").text(currentDate);
});
