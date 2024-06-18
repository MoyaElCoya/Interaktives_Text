document.addEventListener("DOMContentLoaded", function() {
    const palabrasClave = document.querySelectorAll("#cuento .palabra");

    palabrasClave.forEach(palabra => {
        palabra.addEventListener("click", function() {
            const rutaImagen = palabra.getAttribute("data-imagen");
            mostrarImagen(rutaImagen);
        });
    });

    function mostrarImagen(rutaImagen) {
        const modal = document.getElementById("myModal");
        const modalImg = document.getElementById("modalImg");

        modal.style.display = "block"; 
        modalImg.src = rutaImagen;


        const spanCerrar = document.getElementsByClassName("close")[0];
        spanCerrar.onclick = function() {
            modal.style.display = "none"; 
        }
    }
});
