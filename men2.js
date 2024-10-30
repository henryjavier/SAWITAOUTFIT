let slideIndexes = []; // Arreglo para almacenar el índice de cada carrusel
const carousels = document.querySelectorAll(".carousel");

// Inicializa cada carrusel
carousels.forEach((carousel, index) => {
    slideIndexes[index] = 0; // Inicializar el índice de cada carrusel
    showSlide(index, slideIndexes[index]); // Muestra la primera imagen
});

function showSlide(carouselIndex, slideIndex) {
    const carousel = carousels[carouselIndex];
    const slides = carousel.querySelectorAll(".carousel-slider img");
    const dots = carousel.querySelectorAll(".dot");

    // Ocultar todas las imágenes y eliminar la clase 'active' de los puntos
    slides.forEach((slide) => (slide.style.display = "none"));
    dots.forEach((dot) => dot.classList.remove("active"));

    // Mostrar la imagen correspondiente y marcar el punto activo
    slides[slideIndex].style.display = "block";
    dots[slideIndex].classList.add("active");
}

// Función para cambiar a una imagen específica cuando se hace clic en un punto
function currentSlide(n, carouselIndex) {
    slideIndexes[carouselIndex] = n - 1; // Ajustar el índice al seleccionar el punto específico
    showSlide(carouselIndex, slideIndexes[carouselIndex]);
}

// Cambio automático de imagen cada 3 segundos para cada carrusel
carousels.forEach((carousel, index) => {
    setInterval(() => {
        slideIndexes[index] = (slideIndexes[index] + 1) % carousel.querySelectorAll(".carousel-slider img").length;
        showSlide(index, slideIndexes[index]);
    }, 3000);
});
