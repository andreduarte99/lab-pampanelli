
/*Mostrar e Esconder carrosel */
document.getElementById('menu').addEventListener('change', function() {
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

/*Sessão sobre */

document.getElementById('mostrarDivButtonSobre').addEventListener('click', function(){
    var contentDiv = document.getElementById('contentDivSobre');
    if (contentDiv.classList.contains('hidden')) {
        contentDiv.classList.remove('hidden');
    } else {
        contentDiv.classList.add('hidden');
    }
});

document.getElementById('mostrarDivButtonMissao').addEventListener('click', function(){
    var contentDiv = document.getElementById('contentDivMissao');
    if (contentDiv.classList.contains('hidden')) {
        contentDiv.classList.remove('hidden');
    } else {
        contentDiv.classList.add('hidden');
    }
});

document.getElementById('mostrarDivButtonVisao').addEventListener('click', function(){
    var contentDiv = document.getElementById('contentDivVisao');
    if (contentDiv.classList.contains('hidden')) {
        contentDiv.classList.remove('hidden');
    } else {
        contentDiv.classList.add('hidden');
    }
});

document.getElementById('mostrarDivButtonValores').addEventListener('click', function(){
    var contentDiv = document.getElementById('contentDivValores');
    if (contentDiv.classList.contains('hidden')) {
        contentDiv.classList.remove('hidden');
    } else {
        contentDiv.classList.add('hidden');
    }
});


