var btnMenu = document.getElementById('btn-menu');
var nav = document.getElementById('nav');

btnMenu.addEventListener('click',mostrarNav);

function mostrarNav(){
    nav.classList.toggle("mostrar");
}
