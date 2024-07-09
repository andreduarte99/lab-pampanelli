/*Sessão sobre */

document.getElementById('mostrarDivButtonSobre').addEventListener('click', function(){
    var contentDiv = document.getElementById('contentDivSobre');
    const imagem = document.getElementById('img-sobre');
    if (contentDiv.classList.contains('hidden')) {
        contentDiv.classList.remove('hidden');
        imagem.src = './img/remover.png';
    } else {
        contentDiv.classList.add('hidden');
        imagem.src = './img/botao-adicionar.png';
    }

});

document.getElementById('mostrarDivButtonMissao').addEventListener('click', function(){
    var contentDiv = document.getElementById('contentDivMissao');
    const imagem = document.getElementById('img-missao');
    if (contentDiv.classList.contains('hidden')) {
        contentDiv.classList.remove('hidden');
        imagem.src = './img/remover.png';
    } else {
        contentDiv.classList.add('hidden');
        imagem.src = './img/botao-adicionar.png';
    }
});

document.getElementById('mostrarDivButtonVisao').addEventListener('click', function(){
    var contentDiv = document.getElementById('contentDivVisao');
    const imagem = document.getElementById('img-visao');

    if (contentDiv.classList.contains('hidden')) {
        contentDiv.classList.remove('hidden');
        imagem.src = './img/remover.png';
    } else {
        contentDiv.classList.add('hidden');
        imagem.src = './img/botao-adicionar.png';
    }
});

document.getElementById('mostrarDivButtonValores').addEventListener('click', function(){
    var contentDiv = document.getElementById('contentDivValores');
    const imagem = document.getElementById('img-valores');
    if (contentDiv.classList.contains('hidden')) {
        contentDiv.classList.remove('hidden');
        imagem.src = './img/remover.png';
    } else {
        contentDiv.classList.add('hidden');
        imagem.src = './img/botao-adicionar.png';
    }
});
