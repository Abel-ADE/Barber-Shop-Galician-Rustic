// Seleccionar elementos
const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu__list');
const main = document.querySelector('main');

// Agregar evento de clic
hamburger.onclick = () => {
    const display = menu.style.display || 'none';
    console.log(display);
    
    if(display === 'none'){
        menu.style.display = 'flex';
        menu.style.opacity = '1';
        main.style.paddingTop = '220px';
    }else{
        menu.style.display = 'none';
        menu.style.opacity = '0';
        main.style.paddingTop = '120px';
    }
}

// Escucha el evento de redimensionamiento de la ventana
window.addEventListener('resize', () => {
    // Verifica si el ancho de la ventana es mayor a 1110px
    if (window.innerWidth > 1111) {
        menu.style.display = 'flex';
        menu.style.opacity = '1';
        main.style.paddingTop = '120px';
    }else{
        menu.style.display = 'none';
        menu.style.opacity = '0';
    }    
});

