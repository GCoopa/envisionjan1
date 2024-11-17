// Get references to the HTML elements
const plusButton = document.getElementById('plus1');
const resetButton = document.getElementById('reset');
const counterDisplay = document.getElementById('counter');
const daysRemainingDisplay = document.getElementById('days-remaining');

// Initialize counter from localStorage
let counter = localStorage.getItem('counter') ? parseInt(localStorage.getItem('counter')) : 0;
counterDisplay.textContent = counter;

// Add event listener for the +1 button
plusButton.addEventListener('click', () => {
    counter++;
    counterDisplay.textContent = counter;
    localStorage.setItem('counter', counter);
});

// Add event listener for the reset button
resetButton.addEventListener('click', () => {
    counter = 0;
    counterDisplay.textContent = counter;
    localStorage.setItem('counter', counter);
});

// Countdown to January 1st
function updateCountdown() {
    const currentDate = new Date();
    const nextYear = new Date(currentDate.getFullYear() + 1, 0, 1); // January 1st of the next year
    const timeRemaining = nextYear - currentDate;

    // Calculate the number of days remaining
    const daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));

    // Display the countdown in the countdown box
    daysRemainingDisplay.textContent = `Days until January 1: ${daysRemaining}`;
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call to display the countdown immediately
