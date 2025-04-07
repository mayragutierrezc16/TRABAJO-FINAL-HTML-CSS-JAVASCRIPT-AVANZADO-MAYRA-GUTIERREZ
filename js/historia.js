document.addEventListener("DOMContentLoaded", function () {
    console.log("SVG cargado correctamente.");
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
  
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.classList.add("header-scrolled"); // Agrega clase al <header>
        } else {
            header.classList.remove("header-scrolled"); // Remueve clase del <header>
        }
    });
  });

  const secciones = document.querySelectorAll('.contenido-historia');

  const observer = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });

  secciones.forEach(seccion => observer.observe(seccion));

  const video = document.getElementById("miVideo");
  const btnPlay = document.getElementById("btnPlay");
  const btnPause = document.getElementById("btnPause");

  btnPlay.addEventListener("click", () => {
    video.play();
  });

  btnPause.addEventListener("click", () => {
    video.pause();
  });
