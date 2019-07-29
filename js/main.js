window.onload = function() {
    var burgerMenu = document.querySelector('.menuItem__burgerMenu');
    var menuItem = document.querySelector('.menu-item');

    burgerMenu.onclick = function () {
        menuItem.classList.toggle('menuItem-active');
    };


}
