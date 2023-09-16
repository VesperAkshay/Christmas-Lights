// script.js
const circles = document.querySelectorAll('.circle');
const toggleButton = document.getElementById('toggleButton');
const colorSelector = document.getElementById('colorSelector');
const applyColorButton = document.getElementById('applyColor');
let isAnimating = false;
let interval;

function changeIntensity() {
    for (let i = 0; i < circles.length; i++) {
        setTimeout(() => {
            circles[i].style.backgroundColor = 'white'; // Change the color to bright
            setTimeout(() => {
                circles[i].style.backgroundColor = getSelectedColor(); // Reset the circle
            }, 600); // Adjust this timing for the glowing effect
        }, i * 120); // Adjust this timing for the overall animation speed
    }
}

function getSelectedColor() {
    return colorSelector.value; // Get the selected color from the menu
}

function toggleAnimation() {
    if (isAnimating) {
        clearInterval(interval);
        toggleButton.textContent = 'Start Animation';
    } else {
        changeIntensity(); // Run the initial animation
        interval = setInterval(changeIntensity, 7 * 120); // 7 circles, adjust timing
        toggleButton.textContent = 'Stop Animation';
    }
    isAnimating = !isAnimating;
}

function applyColor() {
    const selectedColor = getSelectedColor();
    for (let circle of circles) {
        circle.style.backgroundColor = selectedColor; // Apply selected color to all circles
    }
}

toggleButton.addEventListener('click', toggleAnimation);
applyColorButton.addEventListener('click', applyColor);
