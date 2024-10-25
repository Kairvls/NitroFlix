const items = document.querySelectorAll('.item');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 2; // Track the current movie

// Function to highlight the current movie
function highlightCurrentMovie(index) {
    items.forEach((item, i) => {
        if (i === index) {
            item.classList.add('active'); // Highlight the current movie
        } else {
            item.classList.remove('active'); // Remove highlight from others
        }
    });
}

// Function to handle the next movie
function showNextMovie() {
    currentIndex = (currentIndex + 1) % items.length; // Go to the next movie, loop around if at the end
    highlightCurrentMovie(currentIndex);
}

// Function to handle the previous movie
function showPrevMovie() {
    currentIndex = (currentIndex - 1 + items.length) % items.length; // Go to the previous movie, loop around if at the start
    highlightCurrentMovie(currentIndex);
}

// Event listeners for buttons
nextButton.addEventListener('click', showNextMovie);
prevButton.addEventListener('click', showPrevMovie);

// Initial highlight setup
highlightCurrentMovie(currentIndex); // Highlight the first movie on page load
