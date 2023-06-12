// Theme Toggle
const themeSwitch = document.querySelector('.theme-switch');
let isDarkMode = localStorage.getItem('darkMode') === 'true';

// Set initial theme
document.body.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
themeSwitch.innerHTML = isDarkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';

themeSwitch.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    localStorage.setItem('darkMode', isDarkMode);
    document.body.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    themeSwitch.innerHTML = isDarkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

// Category Filter
const categoryTags = document.querySelectorAll('.category-tag');

categoryTags.forEach(tag => {
    tag.addEventListener('click', () => {
        categoryTags.forEach(t => t.classList.remove('active'));
        tag.classList.add('active');
        // Add your filtering logic here
    });
});

// Search Functionality
const searchInput = document.querySelector('.search-bar input');
let searchTimeout;

searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        // Add your search logic here
        console.log('Searching for:', e.target.value);
    }, 500);
});

// Reading Time Calculator
function calculateReadingTime(text) {
    const wordsPerMinute = 200;
    const words = text.trim().split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute);
}

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.innerHTML = navLinks.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
});

// Newsletter Subscription
const subscribeForm = document.querySelector('.subscribe-form');

subscribeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = subscribeForm.querySelector('input').value;
    // Add your subscription logic here
    alert(`Thank you for subscribing with: ${email}`);
    subscribeForm.reset();
});
