$(window).on('load', function() {
    var currentIndex = 0;
    var slides = $('.carousel-slide-abt-custom');
    var intervalId;  // Variable to store the interval ID

    console.log("Slides:", slides);

    // Function to show the next slide
    function showNextSlide() {
        console.log("Showing next slide");
        $(slides[currentIndex]).removeClass('active');
        currentIndex = (currentIndex + 1) % slides.length;
        console.log("New currentIndex:", currentIndex);
        $(slides[currentIndex]).addClass('active');
    }

    // Function to start the slideshow
    function startSlideshow() {
        console.log("Starting slideshow");
        intervalId = setInterval(showNextSlide, 3000); // Change image every 3 seconds
        console.log("Interval ID:", intervalId);
    }

    // Function to stop the slideshow
    function stopSlideshow() {
        console.log("Stopping slideshow");
        clearInterval(intervalId); // Clear the interval
        console.log("Interval stopped");
    }

    // Show the first slide initially
    $(slides[currentIndex]).addClass('active');
    console.log("Initial slide set as active");

    // Handle next button click
    $('.next-button-abt-custom').click(function() {
        console.log("Next button clicked");
        stopSlideshow(); // Stop slideshow when next button is clicked
        showNextSlide();
        startSlideshow(); // Restart slideshow after changing slide
    });

    // Handle previous button click
    $('.prev-button-abt-custom').click(function() {
        console.log("Previous button clicked");
        stopSlideshow(); // Stop slideshow when previous button is clicked
        $(slides[currentIndex]).removeClass('active');
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        console.log("New currentIndex:", currentIndex);
        $(slides[currentIndex]).addClass('active');
        startSlideshow(); // Restart slideshow after changing slide
    });

    // Start the slideshow automatically
    startSlideshow();
});
