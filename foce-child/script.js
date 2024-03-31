function hoover() {
    console.log('La souris est entrée dans la section .banner');
    document.querySelector('.story h2').style.opacity = '1';
    document.querySelector('.story h2').style.transform = 'translateY(0)';
    document.querySelector('#studio h2').style.opacity = '1';
    document.querySelector('#studio h2').style.transform = 'translateY(0)';
}

document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper-container', {
        // Configuration de Swiper
        direction: 'horizontal',
        loop: true,
        // Autres options...
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Sélectionnez toutes les sections que vous souhaitez animer
    var sections = document.querySelectorAll("section");

    // Parcourez chaque section et ajoutez la classe "active" pour activer l'effet de fondu
    sections.forEach(function(section) {
        section.classList.add("fade-in", "active");
    });
});

jQuery(document).ready(function($) {
    $('.fade-in').each(function() {
        $(this).css('opacity', 0).delay(100).animate({
            opacity: 1
        }, 1000);
    });
});

jQuery(document).ready(function($) {
    // Fonction pour appliquer l'effet de fondu (fade-in) sur les sections
    function fadeInSections(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in'); // Ajouter la classe pour le fondu
                entry.target.classList.remove('fade-out'); // Supprimer la classe fade-out si elle existe
            } else {
                entry.target.classList.remove('fade-in'); // Supprimer la classe fade-in si elle existe
            }
        });
    }

    // Observer les changements de visibilité des sections
    const sectionObserver = new IntersectionObserver(fadeInSections, {
        root: null, // Utiliser la fenêtre par défaut comme viewport
        threshold: 0.3 // Définir le seuil de visibilité à 30%
    });

    // Sélectionner toutes les sections à observer
    const sections = document.querySelectorAll('section');

    // Observer chaque section
    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Ajouter la classe "loaded" au conteneur de la vidéo après un court délai pour déclencher la transition
setTimeout(function() {
    document.querySelector('.videolog').classList.add('loaded');
  }, 500); // Délai en millisecondes, ajustez selon vos besoins

  // Ajouter la classe "loaded" au conteneur du logo après un court délai
setTimeout(function() {
    document.querySelector('.videolog').classList.add('loaded');
}, 500); // Délai en millisecondes, ajustez selon vos besoins

document.addEventListener("DOMContentLoaded", function() {
    // Sélectionner la section de l'histoire
    const storySection = document.querySelector('#story');

    // Ajouter la classe "loaded" à la section de l'histoire une fois que la page est chargée
    storySection.classList.add('loaded');
});

});

