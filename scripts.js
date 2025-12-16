// ========================================
// MENU BURGER MODAL
// ========================================

const burgerMenu = document.getElementById('burgerMenu');
const mobileNav = document.getElementById('mobileNav');
const mobileNavOverlay = document.getElementById('mobileNavOverlay');

function toggleMenu() {
    burgerMenu.classList.toggle('active');
    mobileNav.classList.toggle('active');
    mobileNavOverlay.classList.toggle('active');
    
    // Empêcher le scroll quand le menu est ouvert
    if (mobileNav.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

// Ouvrir/fermer le menu avec le bouton burger
burgerMenu.addEventListener('click', toggleMenu);

// Fermer le menu quand on clique sur l'overlay
mobileNavOverlay.addEventListener('click', toggleMenu);

// Fermer le menu quand on clique sur un lien
const navLinks = document.querySelectorAll('.mobile-nav a');
navLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
});

// Fermer le menu avec la touche Échap
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
        toggleMenu();
    }
});


// ========================================
// CARROUSEL
// ========================================

const track = document.getElementById('carouselTrack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dotsContainer = document.getElementById('carouselDots');
const items = document.querySelectorAll('.carousel-item');

let currentIndex = 0;

// Créer les dots
items.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function updateCarousel() {
    const offset = -currentIndex * 100;
    track.style.transform = `translateX(${offset}%)`;
    
    // Mise à jour des dots
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
}

// Navigation avec les boutons
prevBtn.addEventListener('click', () => {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
    updateCarousel();
});

nextBtn.addEventListener('click', () => {
    currentIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
    updateCarousel();
});

// Auto-play du carrousel (optionnel - défilement automatique toutes les 5 secondes)
setInterval(() => {
    currentIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
    updateCarousel();
}, 5000);


// ========================================
// FORMULAIRE DE CONTACT
// ========================================

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Récupération des données du formulaire
    const formData = {
        nom: document.getElementById('nom').value,
        email: document.getElementById('email').value,
        objet: document.getElementById('objet').value,
        message: document.getElementById('message').value
    };
    
    // Ici vous pouvez ajouter l'envoi vers un backend
    // Exemple avec fetch :
    /*
    fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.');
        contactForm.reset();
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Une erreur s\'est produite. Veuillez réessayer.');
    });
    */
    
    console.log('Formulaire soumis:', formData);
    
    // Message de confirmation
    alert('Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.');
    
    // Réinitialiser le formulaire
    contactForm.reset();
});
