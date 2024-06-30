document.getElementById('menu').addEventListener('change', function() {
    var carrosel = document.getElementById('carrosel');
    if (this.checked) {
        carrosel.classList.add('hidden');
    } else {
        carrosel.classList.remove('hidden');
    }
});


function openOverlay() {
    document.getElementById('overlay').style.display = 'flex';
}

function closeOverlay(){
    document.getElementById('overlay').style.display = 'none';
}
