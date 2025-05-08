const hamburger = document.getElementById('hamburger-btn');
const navLinks = document.querySelector('.nav-links');

// Toggle the active class on the nav menu when the hamburger is clicked
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

const featuredArticles = document.querySelectorAll('.featured-article');
let currentIndex = 0;

// Function to switch featured articles
function switchFeaturedArticle() {
    // Hide all articles
    featuredArticles.forEach((article, index) => {
        article.style.display = 'none';
    });

    // Show the current article
    featuredArticles[currentIndex].style.display = 'block';

    // Move to the next article
    currentIndex = (currentIndex + 1) % featuredArticles.length;
}

// Initialize the slideshow
switchFeaturedArticle(); // Show the first article
setInterval(switchFeaturedArticle, 5000); // Switch every 5 seconds
