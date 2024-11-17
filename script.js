// Get the references to HTML elements
const incrementBtn = document.getElementById('incrementBtn');
const resetBtn = document.getElementById('resetBtn');
const counterValue = document.getElementById('counter');

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
