// Auto-slide banner carousel with manual controls and tracker integration
function initAutoSlideBanner(carouselId, prevButtonId, nextButtonId, trackerId) {
    const carousel = document.getElementById(carouselId);
    const prevButton = document.getElementById(prevButtonId);
    const nextButton = document.getElementById(nextButtonId);
    const tracker = document.getElementById(trackerId);
    
    if (!carousel || !prevButton || !nextButton || !tracker) return;
    
    const firstItem = carousel.children[0];
    if (!firstItem) return;
    
    let currentIndex = 0;
    let autoSlideInterval;
    
    // Get total number of items
    const totalItems = carousel.children.length;
    const trackerItems = tracker.children;
    
    // Function to update tracker indicators
    function updateTracker(activeIndex) {
        for (let i = 0; i < trackerItems.length; i++) {
            const trackerItem = trackerItems[i];
            if (i === activeIndex) {
                // Active state: background w-12 neutral-300 with progress fill
                trackerItem.className = "h-1 w-12 bg-neutral-300 rounded-full relative overflow-hidden";
                trackerItem.innerHTML = '<div class="absolute top-0 left-0 h-full w-0 bg-neutral-600 rounded-full transition-all duration-[3000ms] ease-linear"></div>';
                // Trigger progress fill after a small delay
                setTimeout(() => {
                    const progressBar = trackerItem.querySelector('div');
                    if (progressBar) {
                        progressBar.className = "absolute top-0 left-0 h-full w-full bg-neutral-600 rounded-full transition-all duration-[3000ms] ease-linear";
                    }
                }, 50);
            } else {
                // Inactive state: w-3 and bg-neutral-300
                trackerItem.className = "h-1 w-3 bg-neutral-300 rounded-full";
                trackerItem.innerHTML = '';
            }
        }
    }
    
    // Function to scroll to specific item
    function scrollToItem(index) {
        // Calculate width dynamically to ensure it's correct
        const itemWidth = carousel.offsetWidth;
        const scrollPosition = index * itemWidth;
        
        console.log(`Scrolling to item ${index}, itemWidth: ${itemWidth}, scrollPosition: ${scrollPosition}`);
        
        carousel.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });
        currentIndex = index;
        updateTracker(currentIndex);
    }
    
    // Function to go to next item
    function nextItem() {
        const nextIndex = (currentIndex + 1) % totalItems;
        scrollToItem(nextIndex);
    }
    
    // Function to go to previous item
    function prevItem() {
        const prevIndex = currentIndex === 0 ? totalItems - 1 : currentIndex - 1;
        scrollToItem(prevIndex);
    }
    
    // Start auto-slide
    function startAutoSlide() {
        if (autoSlideInterval) return; // Prevent multiple intervals from running
        autoSlideInterval = setInterval(nextItem, 3000);
    }
    
    // Stop auto-slide
    function stopAutoSlide() {
        if (autoSlideInterval) {
            clearInterval(autoSlideInterval);
            autoSlideInterval = null;
        }
    }
    
    // Manual controls
    nextButton.addEventListener('click', () => {
        stopAutoSlide();
        nextItem();
        startAutoSlide(); // Restart auto-slide after manual interaction
    });
    
    prevButton.addEventListener('click', () => {
        stopAutoSlide();
        prevItem();
        startAutoSlide(); // Restart auto-slide after manual interaction
    });
    
    // Pause auto-slide on hover
    carousel.addEventListener('mouseenter', stopAutoSlide);
    carousel.addEventListener('mouseleave', startAutoSlide);
    
    // Start auto-slide when page loads
    startAutoSlide();
    
    // Initialize tracker to show first item as active
    updateTracker(0);
}

// Initialize banner carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initAutoSlideBanner('carousel_banner', 'prev_banner', 'next_banner', 'tracker_banner');
});