 const carousel = document.querySelector('.carousel');
let scrollAmount = 0;

function scrollCarousel(direction) {
    const scrollStep = 300; 
    if (direction === 'left') {
        scrollAmount -= scrollStep;
    } else {
        scrollAmount += scrollStep;
    }
    carousel.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });
}

