document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.querySelector('button');
    const searchInput = document.getElementById('search');
    
    searchButton.addEventListener('click', function() {
        const searchQuery = searchInput.value.trim();
        if (searchQuery) {
            alert('Searching for: ' + searchQuery); 
        } else {
            alert('Please enter a search query!');
        }
    });

    const favoritesButton = document.querySelectorAll('button')[1]; 
    favoritesButton.addEventListener('click', function() {
        alert('Added to Favorites');
    });

    const cartButton = document.querySelectorAll('button')[2]; 
    cartButton.addEventListener('click', function() {
        window.location.href = '/store.html'
    });

    const signInButton = document.querySelectorAll('button')[3];
    signInButton.addEventListener('click', function() {
        const isSignedIn = confirm("Are you already signed in?");
        if (isSignedIn) {
            alert('Welcome back!');
            window.location.href = 'login.html';
        } else {
            alert('Please sign in to continue!');
        }
    });

    const navLinks = document.querySelectorAll('.main-page-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); 
            alert(`You clicked: ${link.textContent}`);
        });
    });

    const shopNowButton = document.querySelector('button');
    shopNowButton.addEventListener('click', function() {
        alert('Redirecting to shop now section...');

    });
});
