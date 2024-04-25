// Attend que le DOM soit chargé avant d'exécuter le script
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const videoEl = document.querySelector('.videolog');
    const menuToggle = document.querySelector('.menu-toggle');
    const burgerMenu = document.querySelector('.burger-menu-container');
    const closeMenu = document.querySelector('.close-menu');
    const logo = document.getElementById('logo');
    const histoireText = document.getElementById("text");
    const characterTitle = document.getElementById("character-title");
    const locationTitle = document.getElementById("lelieu");
    const locationContainer = document.getElementById("lelieu");
    const lieuArticle = document.getElementById("lieu");
    const characterArticle = document.getElementById("characters");
    const body = document.querySelector('body');
    const burgerMenuContainer = document.querySelector('.burger-menu-container');


    // Fonction pour réinitialiser l'animation des titres
    function resetTitleAnimation(titleElement) {
        titleElement.style.opacity = "0";
        titleElement.style.transform = "translateY(20px)";
    }

    // Fonction pour animer les titres
    function animateTitle(titleElement) {
        titleElement.style.opacity = "1";
        titleElement.style.transform = "translateY(0)";
    }





    // Fonction pour mettre à jour la position du logo en fonction du défilement de la page
    function updateLogoPosition() {
        const screenWidth = window.innerWidth;
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        const maxScrollDistance = 180;
        let logoPosition;

        if (screenWidth <= 920 && screenWidth > 360) {
            logoPosition = Math.min(scrollPosition, maxScrollDistance / 3);
        } else if (screenWidth <= 360) {
            logoPosition = Math.min(scrollPosition, maxScrollDistance / 2);
        } else {
            logoPosition = Math.min(scrollPosition, maxScrollDistance);
        }

        // Vérifie si l'utilisateur fait défiler vers le bas sur un écran de 920px ou moins
        if (scrollPosition > 0 && screenWidth <= 920) {
            // Si l'utilisateur fait défiler vers le bas et l'écran est de 920px ou moins
            logo.style.top = `${window.innerHeight / 300}px`; // Positionne le logo au centre vertical de la fenêtre
        } else {
            // Sinon, le logo suit la logique de défilement normale
            logo.style.top = `${50 + logoPosition}px`;
        }
    }



    // Écoute les événements de défilement de la page pour mettre à jour la position du logo
    window.addEventListener('scroll', updateLogoPosition);

    // Ajoute une classe 'loaded' à la vidéo après un délai pour activer les styles CSS
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
                body.classList.add('no-scroll'); // Ajoute la classe 'no-scroll' au body
            } else {
                burgerMenuContainer.style.display = 'none';
                burgerMenuContainer.classList.remove('active');
                menuToggle.classList.remove('active');
                body.classList.remove('no-scroll'); // Supprime la classe 'no-scroll' du body
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
                body.classList.remove('no-scroll'); // Supprime la classe 'no-scroll' du body
            }
            menuToggleClicked = false;
        });

    // Fonction pour détecter quelle section de la page est visible lors du défilement
    function detectVisibleSection() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const isVisible = rect.top >= 0 && rect.top <= window.innerHeight;

            if (isVisible) {
                // Ajoute une classe 'active' à la section visible
                section.classList.add("active");
                if (section.id === "character-section") {
                    animateTitle(characterTitle); // Anime le titre des personnages
                } else if (section.id === "lelieu") {
                    animateTitle(locationTitle); // Anime le titre du lieu
                    locationContainer.classList.add("active"); // Ajoute la classe 'active' au conteneur du lieu
                } else if (section.id === "story") {
                    animateTitle(histoireText); // Anime le texte de l'histoire
                }
            } else {
                // Supprime la classe 'active' de la section non visible
                section.classList.remove("active");
                if (section.id === "character-section") {
                    resetTitleAnimation(characterTitle); // Réinitialise l'animation du titre des personnages
                } else if (section.id === "lelieu") {
                    resetTitleAnimation(locationTitle); // Réinitialise l'animation du titre du lieu
                } else if (section.id === "story") {
                    resetTitleAnimation(histoireText); // Réinitialise l'animation du texte de l'histoire
                }
            }
        });


        // Fonction pour détecter la visibilité de la section du titre personnages
        function detectVisibleCharacterSection() {
            const rect = characterArticle.getBoundingClientRect();
            const isVisible = rect.top >= 0 && rect.top <= window.innerHeight;

            if (isVisible) {
                characterArticle.classList.add("active");
                animateTitle(characterTitle);
            } else {
                characterArticle.classList.remove("active");
                resetTitleAnimation(characterTitle);
            }
        }




        // Fonction pour détecter la visibilité de la section du lieu

        function detectVisibleLieuSection() {
            const rect = lieuArticle.getBoundingClientRect();
            const isVisible = rect.top >= 0 && rect.top <= window.innerHeight;

            if (isVisible) {
                lieuArticle.classList.add("active");
                animateTitle(locationTitle);
                locationContainer.classList.add("active");
            } else {
                lieuArticle.classList.remove("active");
                resetTitleAnimation(locationTitle);
                locationContainer.classList.remove("active");
            }
        }

        // Écoute les événements de défilement de la page pour détecter la visibilité de la section du lieu
        window.addEventListener('scroll', detectVisibleLieuSection);
        window.addEventListener('scroll', detectVisibleCharacterSection);

        // Supprime la classe 'active' du conteneur du lieu si la section du lieu n'est pas visible
        if (!locationContainer.classList.contains("active")) {
            locationContainer.classList.remove("active");
        }
    }

    // Écoute les événements de défilement de la page pour détecter la visibilité des sections
    window.addEventListener('scroll', detectVisibleSection);

    // Initialise le carrousel des personnages avec l'effet Cover Flow de SwiperJS
    const swiperEl = document.querySelector('.mySwiper');
    if (swiperEl) {
        new Swiper(".mySwiper", {
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: "auto",
            coverflowEffect: {
                rotate: 120,
                stretch: 200,
                depth: 300,
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

    // Fonction pour déplacer les nuages en fonction du défilement de la page
    function moveCloudsByScroll() {
        const lieu = document.getElementById("lelieu");
        const rootElement = document.documentElement;
        let scrollPosition = window.scrollY - lieu.offsetTop;
        let cloudPosition = Math.round(scrollPosition / 3);
        if (cloudPosition >= 1 && cloudPosition <= 1500) {
            rootElement.style.setProperty("--posX", `-${cloudPosition}px`);
        }
    }

    // Écoute les événements de défilement de la page pour déplacer les nuages
    window.addEventListener('scroll', moveCloudsByScroll);

  


});

// Fonction jQuery pour animer les éléments avec la classe 'fade-in'
jQuery(document).ready(function ($) {
    $('.fade-in').each(function () {
        $(this).css('opacity', 0) // Définit l'opacité initiale à 0 pour masquer les éléments
            .delay(250) // Délai de 2 secondes avant le début du fade-in
            .animate({
                opacity: 1 // Fait apparaître progressivement les éléments
            }, 800); // Durée du fade-in sur 2 secondes
    });
});




