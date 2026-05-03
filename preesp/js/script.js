document.addEventListener('DOMContentLoaded', function() {
    const allLinks = document.querySelectorAll('a');

    allLinks.forEach(link => {
        // Check if the link is not for internal pages (privacy.html, terms.html)
        if (!link.href.includes('privacy.html') && !link.href.includes('terms.html')) {
            link.addEventListener('click', function(event) {
                event.preventDefault(); // Prevent default link behavior
                window.open('https://google.com', '_blank'); // Open Google in a new tab
            });
        }
    });

    const allImages = document.querySelectorAll('img');

    allImages.forEach(image => {
        image.style.cursor = 'pointer'; // Indicate that the image is clickable
        image.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default image behavior if any
            window.open('https://google.com', '_blank'); // Open Google in a new tab
        });
    });
});
