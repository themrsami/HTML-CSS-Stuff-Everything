# Nike Dashboard - Modern Glassmorphism Design

A sleek and modern dashboard for Nike products featuring glassmorphism effects, interactive charts, and a beautiful gradient background. This project demonstrates modern web design techniques and responsive layout implementation.

![Nike Dashboard Preview](preview.png)

## Features

- 🎨 Modern Glassmorphism Design
- 🌈 Beautiful Gradient Background
- 📊 Interactive Sales Charts
- 🔄 Real-time Stats Updates
- 📱 Fully Responsive Layout
- 🎯 Centered Rounded Navbar
- 🖼️ High-quality Unsplash Images
- ✨ Smooth Animations
- 💳 Product Showcase
- 📦 Order Tracking

## Technologies Used

- HTML5
- CSS3 (with CSS Variables)
- JavaScript (ES6+)
- Chart.js
- Font Awesome Icons
- Google Fonts (Inter)
- Unsplash Images

## Project Structure

```
Project-5-Nike-Dashboard/
├── index.html          # Main HTML structure
├── styles.css          # CSS styles and animations
├── script.js          # JavaScript functionality
└── README.md          # Project documentation
```

## Components

1. **Navigation**
   - Centered rounded navbar
   - Mobile-responsive design
   - Glassmorphism effect
   - User profile integration

2. **Dashboard Stats**
   - Real-time statistics
   - Animated number updates
   - Trend indicators
   - Glassmorphism cards

3. **Product Showcase**
   - Featured products grid
   - High-quality product images
   - Interactive hover effects
   - Product statistics

4. **Sales Analytics**
   - Interactive line chart
   - Monthly sales data
   - Smooth animations
   - Responsive design

5. **Recent Orders**
   - Order tracking
   - Status indicators
   - Product thumbnails
   - Order details

## Design Features

### Glassmorphism
```css
.glass-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}
```

### Gradient Background
```css
body {
    background: linear-gradient(135deg, #ff4d4d, #f9cb28);
}
```

### Animations
```css
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

## JavaScript Features

- Chart.js implementation
- Intersection Observer for animations
- Real-time stat updates
- Mobile navigation handling
- Smooth scrolling
- Interactive elements

## Getting Started

1. Download or copy the project files to your local machine.

2. Navigate to the project directory.

3. Open `index.html` in your preferred browser.

## Customization

### Colors
Modify the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #f5f5f5;
    --accent-color: #ff4d4d;
    --text-primary: #333;
    --text-secondary: #666;
    --glass-bg: rgba(255, 255, 255, 0.1);
    --glass-border: rgba(255, 255, 255, 0.2);
    --glass-shadow: rgba(0, 0, 0, 0.1);
    --gradient-1: #ff4d4d;
    --gradient-2: #f9cb28;
}
```

### Content
- Update product images and information in `index.html`
- Modify chart data in `script.js`
- Adjust stat update intervals
- Customize animations and transitions

## Best Practices

- Semantic HTML structure
- BEM naming convention
- Mobile-first approach
- Performance optimization
- Clean code organization
- Responsive images
- Accessible design

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## Performance Considerations

- Optimized images
- Minimal dependencies
- Efficient animations
- Responsive design
- Lazy loading
- Clean code structure

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.

## Acknowledgments

- Nike for inspiration
- Unsplash for images
- Font Awesome for icons
- Chart.js for analytics
- Google Fonts for typography

## Contact

For any questions or suggestions, please feel free to reach out or open an issue.

---

Made with ❤️ by Usama Nazir (@themrsami)
