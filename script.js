// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll animations
const scrollElements = document.querySelectorAll('.feature-card, .game-card');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {threshold: 0.1});

scrollElements.forEach  (el => {
    observer.observe(el);
    el.style.opacity = 0;
    el.style.transform = 'translateY(50px)';
    el.style.transition = 'all 0.6s ease-out';
});


// Butoane ascunse
const communityCard = document.getElementById('communityCard');
const popupMenu = document.getElementById('popupMenu');
        
        // Funcție pentru a afișa meniul la atingere/click
        communityCard.addEventListener('click', function(e) {
            popupMenu.classList.toggle('active');
            e.stopPropagation();
        });
        
        // Ascunde meniul când se face click în altă parte pe pagină
        document.addEventListener('click', function(e) {
            if (!communityCard.contains(e.target)) {
                popupMenu.classList.remove('active');
            }
        });



// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
