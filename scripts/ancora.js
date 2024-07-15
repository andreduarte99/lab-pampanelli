document.addEventListener('DOMContentLoaded', function () {
    var backToTopButton = document.getElementById('back-to-top');

    window.addEventListener('scroll', function () {
        // Mostra o botão quando o usuário rolar 100px para baixo
        if (window.scrollY > 100) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', function (event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
