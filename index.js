document.addEventListener('DOMContentLoaded', () => {
    const categoryCards = document.querySelectorAll('.category-card');
    
    // Add click event listeners to category cards
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            // In a full implementation, this would navigate to a page showing 
            // all QR codes for the selected category
            alert(`Selected category: ${category.replace('_', ' ')}\nThis would show all QR codes for this category.`);
        });
    });
});