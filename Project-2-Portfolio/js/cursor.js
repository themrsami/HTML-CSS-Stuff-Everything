document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.cursor');
    const cursorDot = document.querySelector('.cursor-dot');

    // Update cursor position
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        cursorDot.style.left = e.clientX + 'px';
        cursorDot.style.top = e.clientY + 'px';
    });

    // Add hover effect for clickable elements
    const clickables = document.querySelectorAll('a, button, .project-card, .skill-card');
    clickables.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('active');
            cursorDot.classList.add('active');
        });

        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('active');
            cursorDot.classList.remove('active');
        });
    });

    // Hide cursor when leaving window
    document.addEventListener('mouseleave', () => {
        cursor.style.display = 'none';
        cursorDot.style.display = 'none';
    });

    document.addEventListener('mouseenter', () => {
        cursor.style.display = 'block';
        cursorDot.style.display = 'block';
    });

    // Smooth cursor movement with requestAnimationFrame
    let cursorX = 0;
    let cursorY = 0;
    let dotX = 0;
    let dotY = 0;

    function animate() {
        cursorX += (parseFloat(cursor.style.left) - cursorX) * 0.2;
        cursorY += (parseFloat(cursor.style.top) - cursorY) * 0.2;
        dotX += (parseFloat(cursorDot.style.left) - dotX) * 0.5;
        dotY += (parseFloat(cursorDot.style.top) - dotY) * 0.5;

        cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
        cursorDot.style.transform = `translate(${dotX}px, ${dotY}px)`;

        requestAnimationFrame(animate);
    }

    animate();
});
