document.addEventListener("DOMContentLoaded", function() {
    // Sélectionnez toutes les sections que vous souhaitez animer
    const sections = document.querySelectorAll("section");
    // Sélectionnez le texte "histoire"
    const histoireText = document.getElementById("text");
    // Sélectionnez l'élément pour la vidéo
    const videoEl = document.querySelector('.videolog');
    // Sélectionnez le bouton de basculement du menu
    const menuToggle = document.querySelector('.menu-toggle');
    // Sélectionnez le menu déroulant
    const burgerMenu = document.querySelector('.burger-menu');

    // Ajoutez la classe "active" pour faire apparaître le texte au chargement de la page
    histoireText.classList.add("active");

    // Parcourez chaque section et ajoutez la classe "active" pour activer l'effet de fondu
    sections.forEach(function(section) {
        section.classList.add("fade-in", "active");
    });

    // Ajouter la classe "loaded" à la vidéo après un court délai pour déclencher la transition
    setTimeout(function() {
        videoEl.classList.add('loaded');
    }, 500); // Délai en millisecondes, ajustez selon vos besoins

    // Gérer l'affichage du menu déroulant
    menuToggle.addEventListener('click', function() {
        burgerMenu.classList.toggle('hidden'); // Affiche ou cache le menu déroulant en pleine page
    });

    // Gérer l'animation des sections avec l'Intersection Observer
    function animatedTitle(entry) {
        if (entry && entry.target) {
            let h2 = entry.target.querySelector('#story h2 span#text');
            if (h2) {
                h2.style.opacity = '1';
                h2.style.transform = 'translateY(0)';
            }
        }
    }

    const handleIntersect = (entries) => {
        entries.forEach(function(entry) {
            if (entry && entry.target) {
                animatedTitle(entry); // Appeler la fonction animatedTitle
            }
        });
    };

    function fadeInSections(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in'); // Ajouter la classe pour le fondu
                entry.target.classList.remove('fade-out'); // Supprimer la classe fade-out si elle existe
                animatedTitle(entry); // Appeler la fonction animatedTitle
            } else {
                entry.target.classList.add('fade-in'); // Supprimer la classe fade-in si elle existe
            }
        });
    }

    // Observer les changements de visibilité des sections
    const sectionObserver = new IntersectionObserver(fadeInSections, {
        root: null, // Utiliser la fenêtre par défaut comme viewport
        threshold: 0.3 // Définir le seuil de visibilité à 30%
    });

    // Observer chaque section
    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Gérer la mise à jour de la classe "active" sur la section visible
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

    function updateActiveSection() {
        const activeSection = detectVisibleSection();

        sections.forEach(section => {
            section.classList.remove('active');
        });

        if (activeSection) {
            animatedTitle(activeSection);
            activeSection.classList.add('active');
        }
    }

    // Écoutez l'événement de défilement pour mettre à jour la section active et déplacer les nuages
    window.addEventListener('scroll', function() {
        updateActiveSection();
        moveCloudsByScroll();
    });

    // Appelez la fonction pour mettre à jour la section active au chargement de la page
    updateActiveSection();

    // Initialiser le carrousel Swiper après le chargement complet du DOM
    const swiperEl = document.querySelector('.mySwiper');
    if (swiperEl) {
        var swiper = new Swiper(".mySwiper", {
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
                delay: 5000, // Définissez le délai entre chaque diapositive (en millisecondes)
                disableOnInteraction: false, // Définit si l'autoplay est désactivé lors de l'interaction de l'utilisateur
            },
        });
    }



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
    
    
});

// Gérer l'animation de l'opacité des éléments avec classe "fade-in"
jQuery(document).ready(function($) {
    $('.fade-in').each(function() {
        $(this).css('opacity', 1).delay(1000).animate({
            opacity: 1
        }, 1000);
    });
});
