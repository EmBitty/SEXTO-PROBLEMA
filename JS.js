/***
Autor: Adrian Emiliano Rodriguez Santiesteban
Fecha: 02/05/2024
Lenguaje html
Fuente: local
Examen
***/

if (document.body.classList.contains('pagina-automatica')) {
    const images = document.querySelectorAll('.carousel-images img');
    let currentIndex = 0;
    const imageDuration = 30000; // 30 segundos

    function showImage(index) {
        const carouselImages = document.querySelector('.carousel-images');
        carouselImages.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    // Cambio automático de imagen cada 30 segundos
    setInterval(nextImage, imageDuration);
}