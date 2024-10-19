// /////////////////////////////animacion boton de hamburguesa////////////////////
const menuToggle = document.querySelector('.menu__toggle');
const nav = document.querySelector('.cabecera__nav');
const logo = document.querySelector('.logo__item'); // Selecciona el logo

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active'); // Muestra u oculta el menú

    // Cambia el icono de hamburguesa a "X"
    if (nav.classList.contains('active')) {
        menuToggle.innerHTML = '<i class="fa-solid fa-times"></i>'; // Muestra la "X"
        logo.style.opacity = '0'; // Oculta el logo
    } else {
        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>'; // Muestra el icono de hamburguesa
        logo.style.opacity = '1'; // Muestra el logo
    }
});

//////////////////////// Animación del hero////////////////////////////////
window.addEventListener('DOMContentLoaded', () => {
    const heroContainer = document.querySelector('.hero__container');
    const position = heroContainer.getBoundingClientRect().top; // Obtener la posición de la sección
    const screenPosition = window.innerHeight / 1.3; // Define cuándo se activa la animación

    if (position < screenPosition) {
        heroContainer.classList.add('visible'); // Agrega la clase visible cuando entra en la ventana
    }
});

///////////////////////////////////animación Sobre Mi/////////////////////////////////
window.addEventListener('scroll', () => {
    const aboutContainer = document.querySelector('.about__container');
    const aboutContent = document.querySelector('.about__content');
    const position = aboutContainer.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (position < screenPosition) {
        aboutContainer.classList.add('visible');
        aboutContent.classList.add('visible');  // Añadimos la clase visible también al contenido
    }
});

