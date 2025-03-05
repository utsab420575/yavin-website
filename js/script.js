function userScroll() {
    const navbar = document.querySelector('.navbar');
    const toTopBtn = document.querySelector('#to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-sticky');
            toTopBtn.classList.add('show');
        } else {
            navbar.classList.remove('navbar-sticky');
            toTopBtn.classList.remove('show');
        }
    });
}


// Function to increment and animate the counter values
function incrementStats() {
    // Select all elements with the class 'counter'
    const counters = document.querySelectorAll('.counter');

    // Loop through each counter element
    counters.forEach((counter) => {
        // Initialize the counter's displayed value to 0
        counter.innerText = 0;

        // Function to update the counter value
        const updateCounter = () => {
            // Get the target value from the 'data-target' attribute and convert it to a number
            const target = +counter.getAttribute('data-target');

            // Get the current value of the counter and convert it to a number
            const c = +counter.innerText;

            // Calculate the increment value for smooth animation
            const increment = target / 200;

            // Check if the current value is less than the target value
            if (c < target) {
                // Increment the current value and update the displayed value
                counter.innerText = Math.ceil(c + increment);

                // Call the `updateCounter` function again after a short delay (1ms)
                setTimeout(updateCounter, 1);
            } else {
                // If the current value reaches or exceeds the target, set it to the exact target value
                counter.innerText = target;
            }
        };

        // Start the counter animation
        updateCounter();
    });
}

// Run the `incrementStats` function when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', incrementStats);
document.addEventListener('DOMContentLoaded', userScroll);