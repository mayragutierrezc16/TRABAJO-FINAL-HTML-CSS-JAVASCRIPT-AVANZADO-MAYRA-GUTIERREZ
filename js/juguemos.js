window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
  
    if (window.scrollY > 50) {
      header.classList.add("header-scrolled");
    } else {
      header.classList.remove("header-scrolled");
    }
  });

  const dropzones = document.querySelectorAll('.dropzone');
  const pieces = document.querySelectorAll('.puzzle-piece');
  const successMessage = document.getElementById('success-message');
  
  pieces.forEach(piece => {
    piece.addEventListener('dragstart', e => {
      e.dataTransfer.setData('text/plain', piece.dataset.piece);
    });
  });
  
  dropzones.forEach(zone => {
    zone.addEventListener('dragover', e => e.preventDefault());
  
    zone.addEventListener('drop', e => {
      e.preventDefault();
      const piezaId = e.dataTransfer.getData('text/plain');
      const img = document.querySelector(`.puzzle-piece[data-piece="${piezaId}"]`);
  
      if (!zone.classList.contains('filled')) {
        zone.appendChild(img);
        zone.classList.add('filled');
        img.style.transform = 'rotate(0deg) scale(1.05)';
      }
  
      checkIfCompleted();
    });
  });
  
  function checkIfCompleted() {
    let correcto = true;
    dropzones.forEach(zone => {
      const expected = zone.dataset.pos;
      const actual = zone.querySelector('img')?.dataset.piece;
      if (expected !== actual) correcto = false;
    });
  
    if (correcto) {
      document.querySelector('.puzzle-container').style.display = 'none';
      document.querySelector('.pieces-container').style.display = 'none';
      successMessage.classList.add('show');
    }
  }
  
  function reiniciar() {
    location.reload();
  }
  