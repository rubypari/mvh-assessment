// script.js
const line2 = document.getElementById('line2');
const distanceDisplay = document.getElementById('distance');
let isDragging = false;
let container = document.querySelector('.container');

// Get the fixed position of line1 (its top value)
const line1 = document.getElementById('line1');
const line1Top = line1.getBoundingClientRect().top - container.getBoundingClientRect().top;

line2.addEventListener('mousedown', (event) => {
    isDragging = true;
    line2.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (event) => {
    if (!isDragging) return;

    const containerRect = container.getBoundingClientRect();
    let newY = event.clientY - containerRect.top;

    // Restrict line movement within container boundaries
    if (newY >= 0 && newY <= container.offsetHeight - line2.offsetHeight) {
        line2.style.top = `${newY}px`;

        // Calculate and display the distance
        const line2Top = newY;
        const distance = Math.abs(line2Top - line1Top);
        distanceDisplay.textContent = distance;
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    line2.style.cursor = 'grab';
});
