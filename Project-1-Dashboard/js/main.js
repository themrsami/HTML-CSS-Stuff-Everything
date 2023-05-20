// Dashboard functionality
class Dashboard {
    constructor() {
        this.initializeMobileMenu();
        this.initializeCharts();
        this.initializeSearch();
    }

    initializeMobileMenu() {
        const menuToggle = document.querySelector('.menu-toggle');
        const sidebar = document.querySelector('.sidebar');
        
        if (menuToggle && sidebar) {
            menuToggle.addEventListener('click', () => {
                sidebar.classList.toggle('active');
            });

            // Close sidebar when clicking outside
            document.addEventListener('click', (e) => {
                if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
                    sidebar.classList.remove('active');
                }
            });
        }
    }

    initializeCharts() {
        // Sample data for charts
        const salesData = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Sales',
                data: [30, 45, 35, 50, 40, 60],
                borderColor: getComputedStyle(document.documentElement)
                    .getPropertyValue('--primary-color'),
                tension: 0.4
            }]
        };

        const userActivityData = {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Active Users',
                data: [2000, 2500, 1800, 3000, 2800, 1500, 2000],
                backgroundColor: getComputedStyle(document.documentElement)
                    .getPropertyValue('--accent-color'),
            }]
        };

        // Initialize charts if elements exist
        const salesChart = document.getElementById('salesChart');
        const userActivityChart = document.getElementById('userActivityChart');

        if (salesChart) {
            new Chart(salesChart, {
                type: 'line',
                data: salesData,
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        }
                    }
                }
            });
        }

        if (userActivityChart) {
            new Chart(userActivityChart, {
                type: 'bar',
                data: userActivityData,
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        }
                    }
                }
            });
        }
    }

    initializeSearch() {
        const searchInput = document.querySelector('.search-input');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                const searchTerm = e.target.value.toLowerCase();
                // Add your search functionality here
                console.log('Searching for:', searchTerm);
            });
        }
    }

    // Utility function to format numbers
    formatNumber(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    // Update stats
    updateStats(stats) {
        Object.entries(stats).forEach(([key, value]) => {
            const element = document.querySelector(`#${key}`);
            if (element) {
                element.textContent = this.formatNumber(value);
            }
        });
    }
}

// Initialize dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.dashboard = new Dashboard();
    
    // Sample stats update
    window.dashboard.updateStats({
        totalUsers: 15420,
        activeUsers: 8250,
        totalRevenue: 124500,
        growthRate: 25
    });
});
