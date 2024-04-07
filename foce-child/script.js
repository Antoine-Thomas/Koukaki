document.addEventListener("DOMContentLoaded", function() {
    // Sélectionner les éléments nécessaires
    const sections = document.querySelectorAll("section");
    const histoireText = document.getElementById("text");
    const videoEl = document.querySelector('.videolog');
    const menuToggle = document.querySelector('.menu-toggle');
    const burgerMenu = document.querySelector('.burger-menu');
    const modal = document.querySelector('.modal');
    const logo = document.getElementById('logo'); // Sélectionner l'élément du logo

    // Initialiser la position initiale du logo
    let logoInitialTop = 20;
    let logoScrollDistance = 0;

    // Fonction pour mettre à jour la position du logo lors du défilement
    function updateLogoPosition() {
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        const maxScrollDistance = 260; // Distance maximale de défilement du logo (100 pixels)

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

    // Fonction pour afficher/masquer le menu burger
    function toggleBurgerMenu() {
        menuToggle.classList.toggle('active');
        burgerMenu.classList.toggle('show');
    }

    // Gestionnaires d'événements pour le menu burger
    menuToggle.addEventListener('click', toggleBurgerMenu);
    burgerMenu.addEventListener('click', function() {
        this.classList.toggle('active');
        modal.style.display = (modal.style.display === 'flex') ? 'none' : 'flex';
    });
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            burgerMenu.classList.remove('active');
            modal.style.display = 'none';
        }
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
                delay: 5000,
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
        $(this).css('opacity', 1).delay(1000).animate({
            opacity: 1
        }, 1000);
    });
});

// Initialiser Parallax pour l'arrière-plan du corps (ou tout autre élément que vous souhaitez utiliser)
const parallaxInstance = new Parallax(document.body);

// Parcourir les sections et ajouter l'effet de parallaxe aux éléments correspondants
const sections = document.querySelectorAll("section");
const parallaxElements = document.querySelectorAll(".parallax-element");

// Fonction pour activer l'effet de parallaxe sur les éléments
function activateParallax() {
    parallaxElements.forEach(element => {
        element.classList.add("parallax-active");
    });
}

// Fonction pour désactiver l'effet de parallaxe sur les éléments
function deactivateParallax() {
    parallaxElements.forEach(element => {
        element.classList.remove("parallax-active");
    });
}

// Activer l'effet de parallaxe par défaut
activateParallax();

// Écouter les événements de survol des sections
sections.forEach(section => {
    section.addEventListener("mouseenter", deactivateParallax);
    section.addEventListener("mouseleave", activateParallax);
});

sections.forEach(function(section) {
    const parallaxElement = section.querySelector(".parallax-element");
    if (parallaxElement) {
        // Ajouter l'élément au contrôleur Parallax
        parallaxInstance.add(parallaxElement, {
            scalarX: 10,
            scalarY: 10
        });
    }
});



                