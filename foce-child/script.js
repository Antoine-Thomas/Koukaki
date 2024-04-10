document.addEventListener("DOMContentLoaded", function() {
    // Sélectionner les éléments nécessaires
    const sections = document.querySelectorAll("section");
    const histoireText = document.getElementById("text");
    const videoEl = document.querySelector('.videolog');
    const menuToggle = document.querySelector('.menu-toggle');
    const burgerMenu = document.querySelector('.burger-menu-container');
    const closeMenu = document.querySelector('.close-menu');
    const logo = document.getElementById('logo'); // Sélectionner l'élément du logo

    // Initialiser la position initiale du logo
    let logoInitialTop = 120;
    let logoScrollDistance = 0;

    // Fonction pour mettre à jour la position du logo lors du défilement
    function updateLogoPosition() {
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        const maxScrollDistance =180; // Distance maximale de défilement du logo (100 pixels)

        if (scrollPosition <= maxScrollDistance) {
            logoScrollDistance = scrollPosition;
            logo.style.top = `${logoInitialTop + logoScrollDistance}px`;
        } else {
            logoScrollDistance = maxScrollDistance;
            logo.style.top = `${logoInitialTop + maxScrollDistance}px`;
        }
    }

    // Gestionnaire d'événement pour le défilement
    window.addEventListener('scroll', updateLogoPosition);

    // Initialiser l'état des éléments
    histoireText.classList.add("active");
    sections.forEach(section => section.classList.add("fade-in", "active"));

    // Ajouter la classe "loaded" à la vidéo après un court délai
    setTimeout(() => videoEl.classList.add('loaded'), 500);

    // Variable pour suivre le clic sur le menu toggle
    let menuToggleClicked = false;

    // Fonction pour afficher/masquer le menu burger
function toggleBurgerMenu() {
    // Récupérer le conteneur du menu burger
    const burgerMenuContainer = document.querySelector('.burger-menu-container');

    // Si le menu burger est caché, l'afficher ; sinon, le cacher
    if (burgerMenuContainer.style.display === 'none' || burgerMenuContainer.style.display === '') {
        burgerMenuContainer.style.display = 'block';
        menuToggle.classList.add('active');
        // Ajouter les styles spécifiés à la classe .burger-menu-container lorsque le menu est ouvert
        burgerMenuContainer.classList.add('active');
    } else {
        burgerMenuContainer.style.display = 'none';
        menuToggle.classList.remove('active');
        // Supprimer les styles spécifiés de la classe .burger-menu-container lorsque le menu est fermé
        burgerMenuContainer.classList.remove('active');
    }
    // Mettre à jour le statut du clic sur le menu toggle
    menuToggleClicked = true;
}


    // Gestionnaires d'événements pour le menu burger
    menuToggle.addEventListener('click', toggleBurgerMenu);
    closeMenu.addEventListener('click', toggleBurgerMenu);
    window.addEventListener('click', function(event) {
        // Si le clic est en dehors du menu burger et que le menu toggle n'a pas été cliqué, cacher le menu burger
        if (event.target !== burgerMenu && !menuToggleClicked) {
            burgerMenu.style.display = 'none';
            menuToggle.classList.remove('active');
        }
        // Réinitialiser le statut du clic sur le menu toggle
        menuToggleClicked = false;
    });

    // Fonction pour animer le titre de la section "Histoire"
    function animatedTitle(entry) {
        if (entry && entry.target) {
            let h2 = entry.target.querySelector('#story h2 span#text');
            if (h2) {
                h2.style.opacity = '1';
                h2.style.transform = 'translateY(0)';
            }
        }
    }

    // Fonction pour gérer le fondu des sections
    const fadeInSections = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                entry.target.classList.remove('fade-out');
                animatedTitle(entry);
            } else {
                entry.target.classList.add('fade-in');
            }
        });
    }

    // Observer les changements de visibilité des sections
    const sectionObserver = new IntersectionObserver(fadeInSections, {
        root: null,
        threshold: 0.3
    });
    sections.forEach(section => sectionObserver.observe(section));

    // Fonction pour détecter la section visible
    function detectVisibleSection() {
        let visibleSection = null;
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                visibleSection = section;
            }
        });
        return visibleSection;
    }

    // Fonction pour mettre à jour la classe "active" sur la section visible
    function updateActiveSection() {
        const activeSection = detectVisibleSection();
        sections.forEach(section => section.classList.remove('active'));
        if (activeSection) {
            animatedTitle(activeSection);
            activeSection.classList.add('active');
        }
    }

    // Gestionnaire d'événement pour le défilement et la mise à jour de la section active
    window.addEventListener('scroll', function() {
        updateActiveSection();
        moveCloudsByScroll();
    });
    updateActiveSection();

    // Initialiser le carrousel Swiper
    const swiperEl = document.querySelector('.mySwiper');
    if (swiperEl) {
        new Swiper(".mySwiper", {
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: "auto",
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
            },
            pagination: {
                el: ".swiper-pagination",
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
        });
    }

    // Fonction pour déplacer les nuages en fonction du défilement
    function moveCloudsByScroll() {
        const lieu = document.getElementById("lieu");
        const rootElement = document.documentElement;
        let scrollPosition = window.scrollY - lieu.offsetTop;
        let cloudPosition = Math.round(scrollPosition / 2);
        if (cloudPosition >= 0 && cloudPosition <= 600) {
            rootElement.style.setProperty("--posX", `-${cloudPosition}px`);
        }
    }
    window.addEventListener('scroll', moveCloudsByScroll);

    // Fonction pour animer le logo au chargement de la page
    function animateLogoOnLoad() {
        // Définir la position initiale du logo en bas de la fenêtre
        logo.style.transform = 'translateY(100vh)';

        // Après un court délai, animer le déplacement du logo vers sa position initiale
        setTimeout(() => {
            logo.style.transition = 'transform 1s ease-out';
            logo.style.transform = 'translateY(0)';
        }, 500); // Délai de 500 millisecondes (ajustez selon vos besoins)
    }

    // Appeler la fonction pour animer le logo au chargement de la page
    animateLogoOnLoad();
});

// Gérer l'animation de l'opacité des éléments avec classe "fade-in"
jQuery(document).ready(function($) {
    $('.fade-in').each(function() {
        $(this).css('opacity', 1).delay(8000).animate({
            opacity: 1
        }, 1000);
    });
});

