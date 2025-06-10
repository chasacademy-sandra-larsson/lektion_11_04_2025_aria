    // Get all accordion triggers
    const triggers = document.querySelectorAll('.accordion-trigger');
    
    // Add click event listener to each trigger
    triggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            // Get the content panel using querySelector
            const content = trigger.closest('.accordion-item').querySelector('.accordion-content');
            
            // Toggle the hidden attribute
            content.toggleAttribute('hidden');
            
        });
    });

