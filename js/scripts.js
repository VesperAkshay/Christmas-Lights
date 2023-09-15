const lights = document.querySelectorAll('.light');

function changeIntensity() {
    for (let i = lights.length - 1; i > 0; i--) {
        lights[i].style.backgroundColor = lights[i - 1].style.backgroundColor;
    }
    lights[0].style.backgroundColor = '#FF0000'; // Change this to the desired bright color
}

function startAnimation() {
    setInterval(changeIntensity, 1000); // Change the interval (milliseconds) as needed
}

startAnimation();
