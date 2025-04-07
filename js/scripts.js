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