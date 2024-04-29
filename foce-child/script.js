// Attend que le DOM soit chargé avant d'exécuter le script
document.addEventListener("DOMContentLoaded", function () {
    // Sélecteurs
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

    // Fonctions pour animer les titres
    function resetTitleAnimation(titleElement) {
        titleElement.style.opacity = "0";
        titleElement.style.transform = "translateY(20px)";
    }

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

        if (scrollPosition > 0 && screenWidth <= 920) {
            logo.style.top = `${window.innerHeight / 300}px`;
        } else {
            logo.style.top = `${50 + logoPosition}px`;
        }
    }

    // Fonction pour afficher/masquer le menu burger
    function toggleBurgerMenu() {
        if (burgerMenuContainer.style.display === 'none' || burgerMenuContainer.style.display === '') {
            burgerMenuContainer.style.display = 'block';
            burgerMenuContainer.classList.add('active');
            menuToggle.classList.add('active');
            body.classList.add('no-scroll');
        } else {
            burgerMenuContainer.style.display = 'none';
            burgerMenuContainer.classList.remove('active');
            menuToggle.classList.remove('active');
            body.classList.remove('no-scroll');
        }
        menuToggleClicked = true;
    }

    // Fonction pour détecter quelle section de la page est visible lors du défilement
    function detectVisibleSection() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const isVisible = rect.top >= 0 && rect.top <= window.innerHeight;

            if (isVisible) {
                section.classList.add("active");
                if (section.id === "character-section") {
                    animateTitle(characterTitle);
                } else if (section.id === "lelieu") {
                    animateTitle(locationTitle);
                    locationContainer.classList.add("active");
                } else if (section.id === "story") {
                    animateTitle(histoireText);
                }
            } else {
                section.classList.remove("active");
                if (section.id === "character-section") {
                    resetTitleAnimation(characterTitle);
                } else if (section.id === "lelieu") {
                    resetTitleAnimation(locationTitle);
                } else if (section.id === "story") {
                    resetTitleAnimation(histoireText);
                }
            }
        });
    }

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

    // Événements
    window.addEventListener('scroll', updateLogoPosition);
    window.addEventListener('scroll', detectVisibleSection);
    window.addEventListener('scroll', detectVisibleLieuSection);
    window.addEventListener('scroll', detectVisibleCharacterSection);
    window.addEventListener('scroll', moveCloudsByScroll);

    menuToggle.addEventListener('click', toggleBurgerMenu);
    closeMenu.addEventListener('click', toggleBurgerMenu);
    window.addEventListener('click', function (event) {
        if (event.target !== burgerMenu && !menuToggleClicked) {
            burgerMenu.style.display = 'none';
            menuToggle.classList.remove('active');
            body.classList.remove('no-scroll');
        }
        menuToggleClicked = false;
    });

    setTimeout(() => videoEl.classList.add('loaded'), 0);

    let menuToggleClicked = false;

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

    if (!locationContainer.classList.contains("active")) {
        locationContainer.classList.remove("active");
    }
});

// Fonction jQuery pour animer les éléments avec la classe 'fade-in'
jQuery(document).ready(function ($) {
    $('.fade-in').each(function () {
        $(this).css('opacity', 0)
            .delay(250)
            .animate({
                opacity: 1
            }, 800);
    });
});




