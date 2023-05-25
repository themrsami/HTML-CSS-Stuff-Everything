// Sales Chart
const ctx = document.getElementById('salesChart').getContext('2d');
const salesChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Sales',
            data: [30, 45, 35, 50, 40, 60],
            fill: true,
            backgroundColor: 'rgba(255, 77, 77, 0.2)',
            borderColor: 'rgba(255, 77, 77, 1)',
            tension: 0.4,
            pointBackgroundColor: 'rgba(255, 77, 77, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255, 77, 77, 1)'
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    display: true,
                    color: 'rgba(255, 255, 255, 0.1)'
                },
                ticks: {
                    color: '#666'
                }
            },
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    color: '#666'
                }
            }
        }
    }
});

// Mobile Navigation
const mobileBreakpoint = 768;

function adjustNavigation() {
    const navLinks = document.querySelector('.nav-links');
    if (window.innerWidth <= mobileBreakpoint) {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
    }
}

// Initial check
adjustNavigation();

// Listen for window resize
window.addEventListener('resize', adjustNavigation);

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply animations to elements
document.querySelectorAll('.glass-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    observer.observe(card);
});

// Product Card Hover Effects
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Random Data Generator for Stats
function updateStats() {
    const stats = {
        revenue: Math.floor(Math.random() * 50000) + 100000,
        sales: Math.floor(Math.random() * 500) + 1000,
        customers: Math.floor(Math.random() * 10000) + 40000
    };

    document.querySelector('.stats-section .stat:nth-child(1)').textContent = `$${stats.revenue.toLocaleString()}`;
    document.querySelector('.stats-section .stat:nth-child(2)').textContent = stats.sales.toLocaleString();
    document.querySelector('.stats-section .stat:nth-child(3)').textContent = stats.customers.toLocaleString();
}

// Update stats every 5 seconds
setInterval(updateStats, 5000);
