document.addEventListener('DOMContentLoaded', function () {
    // Reusable shelf carousel initializer
    function initShelfCarousel(carouselId, prevButtonId, nextButtonId) {
        // Get carousel and button elements
        const carousel = document.getElementById(carouselId);
        const prevButton = document.getElementById(prevButtonId);
        const nextButton = document.getElementById(nextButtonId);

        // Exit if any element is missing
        if (!carousel || !prevButton || !nextButton) {
            console.error(`Carousel elements missing for: ${carouselId}`);
            return;
        }

        // Get the first item in the carousel
        const firstItem = carousel.children[0];

        // Hide nav buttons if no items
        if (!firstItem) {
            prevButton.style.display = 'none';
            nextButton.style.display = 'none';
            return;
        }

        // Scrolls carousel left or right
        const scrollCarousel = (direction) => {
            const carouselStyle = window.getComputedStyle(carousel);
            const itemWidth = firstItem.offsetWidth;
            const gap = parseFloat(carouselStyle.gap) || 0;
            const scrollAmount = itemWidth + gap;
            const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

            if (direction === 'next') {
                // Scroll right or loop to start
                if (carousel.scrollLeft >= maxScrollLeft - 1) {
                    carousel.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                }
            } else if (direction === 'prev') {
                // Scroll left or loop to end
                if (carousel.scrollLeft <= 0) {
                    carousel.scrollTo({ left: maxScrollLeft, behavior: 'smooth' });
                } else {
                    carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
                }
            }
        };

        // Attach click handlers
        nextButton.addEventListener('click', () => scrollCarousel('next'));
        prevButton.addEventListener('click', () => scrollCarousel('prev'));
    }

    // Initialize top shelf
    initShelfCarousel('carousel_topshelf', 'prev_topshelf', 'next_topshelf');
    
    // Initialize shelf 01
    initShelfCarousel('carousel_shelf1', 'prev_shelf1', 'next_shelf1');
});
