document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    const icon = themeToggle.querySelector('i');

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.dataset.theme = savedTheme;
        updateThemeIcon(savedTheme === 'dark');
    }

    // Toggle theme
    themeToggle.addEventListener('click', () => {
        const isDark = body.dataset.theme === 'dark';
        body.dataset.theme = isDark ? 'light' : 'dark';
        localStorage.setItem('theme', body.dataset.theme);
        updateThemeIcon(!isDark);

        // Add transition class for smooth color changes
        body.classList.add('theme-transition');
        setTimeout(() => {
            body.classList.remove('theme-transition');
        }, 1000);

        // Update particles color
        if (window.pJSDom && window.pJSDom[0]) {
            const particlesJS = window.pJSDom[0].pJS;
            const newColor = isDark ? '#6366f1' : '#818cf8';
            
            particlesJS.particles.color.value = newColor;
            particlesJS.particles.line_linked.color = newColor;
            
            particlesJS.particles.array.forEach(particle => {
                particle.color.value = newColor;
            });
            
            particlesJS.particles.line_linked.color_rgb_line = hexToRgb(newColor);
        }
    });

    // Update theme icon
    function updateThemeIcon(isDark) {
        icon.className = isDark ? 'fas fa-moon' : 'fas fa-sun';
    }

    // Helper function to convert hex to RGB
    function hexToRgb(hex) {
        const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
        
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }

    // Check system theme preference
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    function handleSystemThemeChange(e) {
        if (!localStorage.getItem('theme')) {
            const newTheme = e.matches ? 'dark' : 'light';
            body.dataset.theme = newTheme;
            updateThemeIcon(e.matches);
        }
    }

    prefersDarkScheme.addListener(handleSystemThemeChange);
    
    // Set initial theme based on system preference if no saved theme
    if (!localStorage.getItem('theme')) {
        handleSystemThemeChange(prefersDarkScheme);
    }
});
