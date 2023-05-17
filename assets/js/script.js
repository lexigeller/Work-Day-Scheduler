// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function() {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  var eventInput = document.getElementById("hour-9");
  var saveButton = document.querySelectorAll(".btn.saveBtn.col-2.col-md-1");
  
  saveButton.addEventListener("click", localStorageInfo);

  function localStorageInfo() {
  localStorage.setItem("event", eventInput.value);
  }
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  var currentHour = dayjs().format('H');
  var timeBlocks = document.querySelectorAll(".container-lg px-5");
  timeBlocks.forEach(function(timeBlock) {
  var blockHour = parseInt(timeBlock.id.split("-")[1]); // Extract the hour from the time block id

  // Compare the blockHour with the currentHour and apply the appropriate class
  if (blockHour < currentHour) {
    timeBlock.classList.add("past");
  } else if (blockHour === currentHour) {
    timeBlock.classList.add("present");
  } else {
    timeBlock.classList.add("future");
  }
});
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  getItem("event");
  // TODO: Add code to display the current date in the header of the page.
  $("#currentDay").text(today.format('MMM D, YYYY'));
});
