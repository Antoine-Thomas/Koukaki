document.addEventListener("DOMContentLoaded", function() {
    // Sélectionner les éléments nécessaires
    const sections = document.querySelectorAll("section");
    const histoireText = document.getElementById("text");
    const videoEl = document.querySelector('.videolog');
    const menuToggle = document.querySelector('.menu-toggle');
    const burgerMenu = document.querySelector('.burger-menu-container');
    const closeMenu = document.querySelector('.close-menu');
    const logo = document.getElementById('logo');

    // Fonction pour réinitialiser l'animation du titre de la section "Histoire"
    function resetHistoryTitleAnimation() {
        histoireText.style.opacity = "0";
        histoireText.style.transform = "translateY(20px)";
    }

    // Fonction pour animer le titre de la section "Histoire"
    function animateHistoryTitle() {
        histoireText.style.opacity = "1";
        histoireText.style.transform = "translateY(0)";
    }

    // Initialiser la position initiale du logo
    let logoInitialTop = 100;
    let logoScrollDistance = 0;

    // Fonction pour mettre à jour la position du logo lors du défilement
    function updateLogoPosition() {
        const screenWidth = window.innerWidth; // Obtient la largeur de l'écran

        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        const maxScrollDistance = 180;
        let logoPosition;

        if (screenWidth <= 920 && screenWidth > 360) {
            logoPosition = Math.min(scrollPosition, maxScrollDistance / 2);
        } else if (screenWidth <= 360) {
            logoPosition = Math.min(scrollPosition, maxScrollDistance / 3); // Ajuste cette valeur pour maintenir le logo à l'écran
        } else {
            logoPosition = Math.min(scrollPosition, maxScrollDistance);
        }

        logo.style.top = `${logoInitialTop + logoPosition}px`;
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
        const burgerMenuContainer = document.querySelector('.burger-menu-container');

        if (burgerMenuContainer.style.display === 'none' || burgerMenuContainer.style.display === '') {
            burgerMenuContainer.style.display = 'block';
            burgerMenuContainer.classList.add('active');
            menuToggle.classList.add('active');
        } else {
            burgerMenuContainer.style.display = 'none';
            burgerMenuContainer.classList.remove('active');
            menuToggle.classList.remove('active');
        }
        menuToggleClicked = true;
    }

    // Gestionnaires d'événements pour le menu burger
    menuToggle.addEventListener('click', toggleBurgerMenu);
    closeMenu.addEventListener('click', toggleBurgerMenu);
    window.addEventListener('click', function(event) {
        if (event.target !== burgerMenu && !menuToggleClicked) {
            burgerMenu.style.display = 'none';
            menuToggle.classList.remove('active');
        }
        menuToggleClicked = false;
    });

    // Fonction pour détecter la section visible
    function detectVisibleSection() {
        let visibleSection = null;
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const isVisible = rect.top >= 0 && rect.top <= window.innerHeight;
            if (isVisible) {
                section.classList.add("active");
                } else { section.classList.remove("active")   
            }
        });
       
    }

    // Fonction pour mettre à jour la classe "active" sur la section visible
    function updateActiveSection() {
        const activeSection = detectVisibleSection();
        /*sections.forEach(section => section.classList.remove('active'));
        if (activeSection) {
            activeSection.classList.add('active');
            if (activeSection.id === "story") {
                animateHistoryTitle();
            } else {
                resetHistoryTitleAnimation();
            }
        }*/
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
        logo.style.transform = 'translateY(100vh)';

        setTimeout(() => {
            logo.style.transition = 'transform 1s ease-out';
            logo.style.transform = 'translateY(0)';
        }, 500);
    }

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
