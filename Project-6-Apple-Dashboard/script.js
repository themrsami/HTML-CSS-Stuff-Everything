// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.dataset.theme = body.dataset.theme === 'dark' ? 'light' : 'dark';
    themeToggle.innerHTML = body.dataset.theme === 'dark' 
        ? '<i class="fas fa-sun"></i>' 
        : '<i class="fas fa-moon"></i>';
});

// Charts Configuration
const revenueCtx = document.getElementById('revenueChart').getContext('2d');
const productCtx = document.getElementById('productChart').getContext('2d');

// Revenue Chart
new Chart(revenueCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Revenue',
            data: [30000, 35000, 45000, 40000, 50000, 55000],
            borderColor: '#0071e3',
            backgroundColor: 'rgba(0, 113, 227, 0.1)',
            tension: 0.4,
            fill: true
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    display: false
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        }
    }
});

// Product Performance Chart
new Chart(productCtx, {
    type: 'doughnut',
    data: {
        labels: ['iPhone', 'MacBook', 'iPad', 'Others'],
        datasets: [{
            data: [45, 25, 20, 10],
            backgroundColor: [
                '#0071e3',
                '#29cc6d',
                '#ff9f0a',
                '#86868b'
            ],
            borderWidth: 0
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom'
            }
        },
        cutout: '70%'
    }
});

// Animations for Cards
const cards = document.querySelectorAll('.stat-card, .product-card, .activity-item');
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    observer.observe(card);
});

// Search Functionality
const searchInput = document.querySelector('.search-bar input');
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const products = document.querySelectorAll('.product-card');
    
    products.forEach(product => {
        const productName = product.querySelector('h4').textContent.toLowerCase();
        if (productName.includes(searchTerm)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
});

// Notification Badge Update
const notificationBtn = document.querySelector('.notification-btn');
let notificationCount = 3;

notificationBtn.addEventListener('click', () => {
    const badge = notificationBtn.querySelector('.notification-badge');
    if (notificationCount > 0) {
        notificationCount--;
        badge.textContent = notificationCount;
        if (notificationCount === 0) {
            badge.style.display = 'none';
        }
    }
});

// Stats Animation
const statValues = document.querySelectorAll('.stat-value');
statValues.forEach(stat => {
    const finalValue = parseFloat(stat.textContent.replace(/[^0-9.-]+/g, ''));
    let startValue = 0;
    const duration = 2000;
    const increment = finalValue / (duration / 16);
    
    function updateValue() {
        if (startValue < finalValue) {
            startValue += increment;
            if (startValue > finalValue) startValue = finalValue;
            
            if (stat.textContent.includes('$')) {
                stat.textContent = `$${startValue.toFixed(1)}M`;
            } else if (stat.textContent.includes('K')) {
                stat.textContent = `${(startValue/1000).toFixed(1)}K`;
            } else {
                stat.textContent = Math.round(startValue).toLocaleString();
            }
            
            requestAnimationFrame(updateValue);
        }
    }
    
    updateValue();
});

// Activity Time Update
function updateActivityTimes() {
    const activities = document.querySelectorAll('.activity-time');
    activities.forEach(time => {
        const timeText = time.textContent;
        const minutes = parseInt(timeText);
        if (minutes < 60) {
            time.textContent = `${minutes + 1} minutes ago`;
        } else {
            const hours = Math.floor(minutes / 60);
            time.textContent = `${hours} hour${hours > 1 ? 's' : ''} ago`;
        }
    });
}

setInterval(updateActivityTimes, 60000); // Update every minute
