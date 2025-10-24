document.addEventListener("DOMContentLoaded", () => {
  const botones = document.querySelectorAll(".btn-ver");

  botones.forEach(boton => {
    boton.addEventListener("click", () => {
      const contenido = boton.previousElementSibling; // div.contenido-extra

      contenido.classList.toggle("mostrar");

      if (contenido.classList.contains("mostrar")) {
        boton.textContent = "VER MENOS" ;
      } else {
        boton.textContent = "VER MÁS";
      }
    });
  });
});
