document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.content');
    const navLinks = document.querySelectorAll('.nav-link');
    const toggleButton = document.querySelector(".aside__toggle-button");
    const infoMoreContainer = document.querySelector(".aside__info-more-container");
    const hrElements = document.querySelectorAll('.separador-hr');
    const socialContainer = document.querySelector('.aside__social-container');

    // Función para ocultar todas las secciones
    function hideAllSections() {
        sections.forEach(section => section.classList.remove('active'));
    }

    // Función para desactivar todos los enlaces del navbar
    function deactivateAllNavLinks() {
        navLinks.forEach(link => link.classList.remove('active'));
    }

    // Mostrar la sección "About" al cargar la página y activar el enlace correspondiente
    document.getElementById('about').classList.add('active');
    document.querySelector('.main__nav-item a[href="#about"]').classList.add('active');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            hideAllSections();
            deactivateAllNavLinks();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).classList.add('active');
            this.classList.add('active');
        });
    });

    // Evento para el botón de alternancia del aside
    toggleButton.addEventListener("click", function() {
        infoMoreContainer.classList.toggle("show");
        hrElements.forEach(hr => hr.classList.toggle("show"));
        socialContainer.classList.toggle("show");
    });
});


