// Get the references to HTML elements
const incrementBtn = document.getElementById('incrementBtn');
const resetBtn = document.getElementById('resetBtn');
const counterValue = document.getElementById('counter');
const countdown = document.getElementById('countdown');

// Load the saved counter value from localStorage
function loadCounter() {
    const savedCounter = localStorage.getItem('counter');
    if (savedCounter !== null) {
        counterValue.textContent = savedCounter; // Load saved value
    } else {
        counterValue.textContent = '0'; // Default to 0 if no value is saved
    }
}

// Increment counter by 1
incrementBtn.addEventListener('click', () => {
    let currentCount = parseInt(counterValue.textContent);
    currentCount++;
    counterValue.textContent = currentCount;
    localStorage.setItem('counter', currentCount); // Save updated count
});

// Reset counter to 0
resetBtn.addEventListener('click', () => {
    counterValue.textContent = '0';
    localStorage.setItem('counter', '0'); // Save reset value
});

// Load counter when the page loads
window.onload = loadCounter;

// Countdown Timer
function updateCountdown() {
    const targetDate = new Date('2025-01-01T00:00:00'); // Target date: January 1st, 2025
    const currentDate = new Date();
    const remainingTime = targetDate - currentDate;

    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    countdown.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (remainingTime < 0) {
        countdown.textContent = "Happy New Year!";
    }
}

// Update countdown every second
setInterval(updateCountdown, 1000);


