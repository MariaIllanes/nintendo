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
        prevButton.style.pointerEvents = "none"; // Disable clicking on the left arrow
    } else {
        prevButton.style.pointerEvents = "auto"; // Enable clicking on the left arrow
    }

    if (currentIndex === 5) { // Assuming you have 15 cards
        nextButton.style.pointerEvents = "none"; // Disable clicking on the right arrow
    } else {
        nextButton.style.pointerEvents = "auto"; // Enable clicking on the right arrow
    }
}

prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

nextButton.addEventListener("click", () => {
    if (currentIndex < 5) { // Assuming you have 15 cards
        currentIndex++;
        updateCarousel();
    }
});

// Initialize the carousel
updateCarousel();
