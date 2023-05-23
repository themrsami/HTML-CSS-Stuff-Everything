document.addEventListener('DOMContentLoaded', () => {
    // Menu Data
    const menuItems = [
        {
            id: 1,
            title: "Grilled Salmon",
            category: "mains",
            price: "$28",
            rating: 4.8,
            description: "Fresh Atlantic salmon, grilled to perfection with herbs and lemon butter sauce.",
            image: "https://images.unsplash.com/photo-1485704686097-ed47f7263ca4?auto=format&fit=crop&w=800"
        },
        {
            id: 2,
            title: "Truffle Risotto",
            category: "mains",
            price: "$24",
            rating: 4.7,
            description: "Creamy Arborio rice with wild mushrooms and black truffle shavings.",
            image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=800"
        },
        {
            id: 3,
            title: "Caesar Salad",
            category: "starters",
            price: "$12",
            rating: 4.5,
            description: "Crisp romaine lettuce, garlic croutons, parmesan cheese with classic Caesar dressing.",
            image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=800"
        },
        {
            id: 4,
            title: "Chocolate Fondant",
            category: "desserts",
            price: "$14",
            rating: 4.9,
            description: "Warm chocolate cake with a molten center, served with vanilla ice cream.",
            image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&w=800"
        },
        {
            id: 5,
            title: "Seafood Pasta",
            category: "mains",
            price: "$26",
            rating: 4.6,
            description: "Fresh linguine with mixed seafood in a white wine and garlic sauce.",
            image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=800"
        },
        {
            id: 6,
            title: "French Onion Soup",
            category: "starters",
            price: "$10",
            rating: 4.4,
            description: "Classic soup with caramelized onions, crusty bread, and melted Gruyère cheese.",
            image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800"
        }
    ];

    // Elements
    const menuSection = document.querySelector('.menu');
    const menuGrid = menuSection.querySelector('.menu-grid');
    const categoryButtons = menuSection.querySelectorAll('.category-btn');

    // Initialize menu
    function initMenu() {
        displayMenuItems(menuItems);
        setupCategories();
    }

    // Display menu items
    function displayMenuItems(items) {
        menuGrid.innerHTML = items.map(item => `
            <div class="menu-item" data-category="${item.category}">
                <div class="menu-item-image">
                    <img src="${item.image}" alt="${item.title}">
                </div>
                <div class="menu-item-content">
                    <div class="menu-item-header">
                        <h3 class="menu-item-title">${item.title}</h3>
                        <span class="menu-item-price">${item.price}</span>
                    </div>
                    <p class="menu-item-description">${item.description}</p>
                    <div class="menu-item-meta">
                        <span class="menu-item-category">${item.category}</span>
                        <div class="menu-item-rating">
                            <i class="fas fa-star"></i>
                            <span>${item.rating}</span>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');

        // Add animation
        setTimeout(() => {
            document.querySelectorAll('.menu-item').forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add('show');
                }, index * 100);
            });
        }, 100);
    }

    // Setup category filtering
    function setupCategories() {
        categoryButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Update active button
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                // Filter menu items
                const category = button.dataset.category;
                const filteredItems = category === 'all' 
                    ? menuItems 
                    : menuItems.filter(item => item.category === category);
                
                // Display filtered items
                displayMenuItems(filteredItems);
            });
        });
    }

    // Initialize
    initMenu();
});
