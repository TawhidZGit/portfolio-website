
/* Custom Cursor */
const cursor = document.getElementById('cursor'); // Selects the HTML element with the ID 'cursor' and assigns it to the variable 'cursor'

let mouseX = 0; // Initializes mouseX to track the mouse's X-coordinate
let mouseY = 0; // Initializes mouseY to track the mouse's Y-coordinate
let cursorX = 0; // Initializes cursorX to track the custom cursor's X-coordinate
let cursorY = 0; // Initializes cursorY to track the custom cursor's Y-coordinate

document.addEventListener('mousemove', (e) => { // Adds an event listener for mouse movement

    mouseX = e.clientX; // Updates mouseX with the current mouse X-coordinate which is obtained from the mouse event object (e) by using the clientX property
    mouseY = e.clientY; // Updates mouseY with the current mouse Y-coordinate which is obtained from the mouse event object (e) by using the clientY property

});

function animateCursor() { // Function to animate the custom cursor

    // Updates cursorX and cursorY to gradually move towards mouseX and mouseY respectively, creating a smooth trailing effect
    cursorX += (mouseX - cursorX) * 0.75; 
    cursorY += (mouseY - cursorY) * 0.75; 

    // Sets the position of the custom cursor element by accessing its CSS to follow the calculated cursorX and cursorY positions, offset by 10 pixels to center the cursor
    cursor.style.left = cursorX - 10 + 'px';
    cursor.style.top = cursorY - 10 + 'px';

    requestAnimationFrame(animateCursor); // Recursively calls animateCursor to create a continuous animation loop
}
animateCursor();

/* Time Display */
function updateTime() {

    const now = new Date(); // Current date and time representation as a Date object
    const time = now.toLocaleTimeString('en-US', { // toLocaleTimeString method converts the Date object (now) to a string representation based on locale and options

        hour12: false, // hour format without leading zeros
        timeZone: 'America/New_York', // specifies the time zone
        timeZoneName: 'short', // short form of the time zone name (e.g., "EST")

    })
   document.getElementById('time').textContent = time; // Updates the text content of the HTML element with the ID 'time' to display the formatted time string

}
updateTime();
setInterval(updateTime, 1000); // Updates the time every second (1000 milliseconds)
