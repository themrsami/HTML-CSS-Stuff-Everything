document.addEventListener('DOMContentLoaded', () => {
    const galleryGrid = document.querySelector('.gallery-grid');
    const modal = document.querySelector('.gallery-modal');
    const modalImage = document.querySelector('.modal-image');
    const modalClose = document.querySelector('.modal-close');

    // Gallery items data
    const galleryItems = [
        {
            image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0',
            title: 'Elegant Dining Hall',
            category: 'Interior'
        },
        {
            image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
            title: 'Signature Dish',
            category: 'Food'
        },
        {
            image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de',
            title: 'Wine Collection',
            category: 'Drinks'
        },
        {
            image: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa',
            title: 'Dessert Special',
            category: 'Food'
        },
        {
            image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
            title: 'Cozy Corner',
            category: 'Interior'
        },
        {
            image: 'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b',
            title: 'Chef\'s Table',
            category: 'Experience'
        }
    ];

    // Populate gallery
    galleryItems.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `
            <img src="${item.image}?auto=format&fit=crop&w=800" alt="${item.title}">
            <div class="gallery-overlay">
                <h3 class="gallery-item-title">${item.title}</h3>
                <span class="gallery-item-category">${item.category}</span>
            </div>
        `;
        galleryGrid.appendChild(galleryItem);

        // Add click event for modal
        galleryItem.addEventListener('click', () => {
            modalImage.src = `${item.image}?auto=format&fit=crop&w=1200`;
            modal.classList.add('active');
        });
    });

    // Close modal on click
    modalClose.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    // Close modal on outside click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    // Intersection Observer for fade-in animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.gallery-item').forEach(item => {
        observer.observe(item);
    });
});
