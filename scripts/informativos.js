document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.querySelectorAll('.accordion-button');
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            var content = this.nextElementSibling;
            var icon = this.querySelector('i');

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            }
        });
    });
});