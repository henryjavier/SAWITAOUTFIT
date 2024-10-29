let slideIndex = 0;
const slides = document.querySelector(".carousel-slider");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  const offset = -300 * index; // 300px es el ancho de cada imagen
  slides.style.transform = `translateX(${offset}px)`;
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

// Configura la primera imagen activa
showSlide(slideIndex);

// Función para mostrar una imagen específica
function currentSlide(n) {
  slideIndex = n - 1;
  showSlide(slideIndex);
}

// Cambia automáticamente cada 3 segundos
setInterval(() => {
  slideIndex = (slideIndex + 1) % dots.length;
  showSlide(slideIndex);
}, 3000);

