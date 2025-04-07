window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
  
    if (window.scrollY > 50) {
      header.classList.add("header-scrolled");
    } else {
      header.classList.remove("header-scrolled");
    }
  });

function allowDrop(e) {
  e.preventDefault();
}

function drag(e) {
  e.dataTransfer.setData("text/plain", e.target.id);
}

function drop(e) {
  e.preventDefault();
  const piezaId = e.dataTransfer.getData("text/plain");
  const pieza = document.getElementById(piezaId);

  // Solo agregar si no hay otra pieza ya puesta
  if (e.target.classList.contains('zona-drop') && e.target.children.length === 0) {
    e.target.appendChild(pieza);
    pieza.classList.add("colocada");
  }
}

  