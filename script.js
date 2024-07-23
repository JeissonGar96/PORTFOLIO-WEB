document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.content');
    const navLinks = document.querySelectorAll('.main__nav-item a');

    // Función para ocultar todas las secciones
    function hideAllSections() {
        sections.forEach(section => section.classList.remove('active'));
    }

    // Mostrar la sección "About" al cargar la página
    document.getElementById('about').classList.add('active');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            hideAllSections();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).classList.add('active');
        });
    });
});

