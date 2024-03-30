
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
