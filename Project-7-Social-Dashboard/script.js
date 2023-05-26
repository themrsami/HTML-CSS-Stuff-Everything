// Update current date
document.getElementById('current-date').textContent = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});

// Create engagement chart
const ctx = document.getElementById('engagementChart').getContext('2d');
const engagementChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Twitter',
            data: [65, 59, 80, 81, 56, 55, 40],
            borderColor: '#1DA1F2',
            tension: 0.4,
            fill: false
        }, {
            label: 'Instagram',
            data: [28, 48, 40, 19, 86, 27, 90],
            borderColor: '#E1306C',
            tension: 0.4,
            fill: false
        }, {
            label: 'Facebook',
            data: [45, 25, 40, 20, 60, 20, 70],
            borderColor: '#4267B2',
            tension: 0.4,
            fill: false
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Weekly Engagement'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Engagement Count'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Day of Week'
                }
            }
        }
    }
});

// Add hover effect to nav links
document.querySelectorAll('.nav-links li').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelector('.nav-links li.active').classList.remove('active');
        this.classList.add('active');
    });
});

// Add animation to stat cards
const statCards = document.querySelectorAll('.stat-card');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

statCards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease-out';
    observer.observe(card);
});
