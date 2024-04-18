document.addEventListener("DOMContentLoaded", function() {
  var contentToggle = document.getElementById("contentToggle");
  var incrementing = true;
  var count = 0;

  function updateCount() {
    if (incrementing) {
      var interval = setInterval(function() {
        contentToggle.textContent = count;
        count += 20; // Increment by 20 for smooth scrolling effect
        if (count > 1000) { // Change condition to stop at 1000
          count = 1000; // Ensure count doesn't exceed 1000
          clearInterval(interval);
          incrementing = false;
          setTimeout(function() {
            contentToggle.textContent = "1000 +";
          }, 1000); // Change to "1000+" after 1 second
        }
      }, 20); // Increment every 20 milliseconds
    }
  }

  setInterval(updateCount, 2000); // Update count every 2 seconds
});
