/*Mostrar e Esconder carrosel */
document.getElementById('menu').addEventListener('change', function () {
    var carrosel = document.getElementById('carrosel');
    if (this.checked) {
        carrosel.classList.add('hidden');
    } else {
        carrosel.classList.remove('hidden');
    }
});


/*Painel fale conosco*/
function openOverlay() {
    document.getElementById('overlay').style.display = 'flex';
}

function closeOverlay(){
    document.getElementById('overlay').style.display = 'none';
}

/*Fecher menu hamburguer  ao clicar nos links*/

function closeMenu(){
    document.getElementById('menu').checked = false;
    var carrosel = document.getElementById('carrosel');
    if (this.checked) {
        carrosel.classList.add('hidden');
    } else {
        carrosel.classList.remove('hidden');
    }
}


