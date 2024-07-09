/*Barra de pesquisa variáveis*/

const pesquisaInput = document.getElementById('pesquisaInput');
const listaExames = document.getElementById('listaExames');
const exameItem = listaExames.getElementsByClassName('exame-item');


/*Barra de pesquisa */

pesquisaInput.addEventListener('input', function(){
    const filtro = pesquisaInput.value.toLowerCase();
    for(let i = 0; i < exameItem.length; i++){
        const exame = exameItem[i].textContent.toLowerCase();
        if(exame.indexOf(filtro) > -1){
            exameItem[i].style.display = '';
        }else{
            exameItem[i].style.display = 'none';
        }
    }
});

/*Esconder lupa*/

document.getElementById('menu').addEventListener('change', function () {
    var pesquisa = document.getElementById('icone__pesquisa');
    if(this.checked){
        pesquisa.classList.add('hidden');
    }else{
        pesquisa.classList.remove('hidden');
    }

});

