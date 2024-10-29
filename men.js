let slideMen = 0;
const slides = document.querySelector(".carousel-slider");
const dots = document.querySelectorAll(".dot");

function showSlide(men) {
  const offset = -300 * men; // 300px es el ancho de cada imagen
  slides.style.transform = `translateX(${offset}px)`;
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === men);
  });
}

// Configura la primera imagen activa
showSlide(slideMen);

// Función para mostrar una imagen específica
function currentSlide(n) {
  slideIndex = n - 1;
  showSlide(slideMen);
}

// Cambia automáticamente cada 3 segundos
setInterval(() => {
  slideMen = (slideMen + 1) % dots.length;
  showSlide(slideMen);
}, 3000);











let list = document.querySelectorAll(".navigation li");

function activeLink(){
    list.forEach((item) => {
        item.classList.remove("hovered");
    });
    this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink))
