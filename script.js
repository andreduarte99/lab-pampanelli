document.getElementById('menu').addEventListener('change', function() {
    var carrosel = document.getElementById('carrosel');
    if (this.checked) {
        carrosel.classList.add('hidden');
    } else {
        carrosel.classList.remove('hidden');
    }
});
