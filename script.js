document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.content');
    const navLinks = document.querySelectorAll('.nav-link');

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
});

