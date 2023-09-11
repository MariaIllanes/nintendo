const carousel = document.querySelector(".carousel");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const cardWidth = document.querySelector(".card").offsetWidth;

let currentIndex = 0;

function updateCarousel() {
    const newPosition = -currentIndex * cardWidth;
    carousel.style.transform = `translateX(${newPosition}px)`;
    checkArrowVisibility();
}

function checkArrowVisibility() {
    if (currentIndex === 0) {
        prevButton.style.display = "none"; // Disable clicking on the left arrow
    } else {
        prevButton.style.display = "block"
        prevButton.style.pointerEvents = "auto"; // Enable clicking on the left arrow
    }

    if (currentIndex >= 16 - Math.floor(carousel.offsetWidth / cardWidth)) {
        nextButton.style.display = "none"; // Disable clicking on the right arrow
    } else {
        nextButton.style.pointerEvents = "auto"
        nextButton.style.display = "block"; // Enable clicking on the right arrow
    }
}

prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

nextButton.addEventListener("click", () => {
    if (currentIndex < 16 - Math.floor(carousel.offsetWidth / cardWidth)) {
        currentIndex++;
        updateCarousel();
    }
});

// Initialize the carousel
updateCarousel();