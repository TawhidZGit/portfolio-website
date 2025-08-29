
//Custom Cursor
const cursor = document.getElementById('cursor');
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

document.addEventListener('mousemove', (e) => {

    mouseX = e.clientX;
    mouseY = e.clientY;

});

function animateCursor() {

    cursorX += (mouseX - cursorX) * 0.75;
    cursorY += (mouseY - cursorY) * 0.75;
    cursor.style.left = cursorX - 10 + 'px';
    cursor.style.top = cursorY - 10 + 'px';
    requestAnimationFrame(animateCursor);
}
animateCursor();

