// Get references to the elements and the current slide index
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const roomSlider = document.querySelector('.room-slider');
let currentIndex = 0;

// Function to move to the previous slide
function prevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = 0;
    }
    updateSlider();
}

// Function to move to the next slide
function nextSlide() {
    currentIndex++;
    const maxIndex = document.querySelectorAll('.room').length - 1;
    if (currentIndex > maxIndex) {
        currentIndex = maxIndex;
    }
    updateSlider();
}

// Function to update the slider's position
function updateSlider() {
    const translateX = -currentIndex * 100; // 100% for each slide
    roomSlider.style.transform = `translateX(${translateX}%)`;
}

// Attach click event handlers to the buttons
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);
