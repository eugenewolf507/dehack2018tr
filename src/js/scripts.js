const menuButton = document.querySelector('.js-burger');
const menu = document.querySelector('.burger-list');

function menuButtonClickHandler() {
    menu.classList.toggle('hidden')
};
menuButton.addEventListener('click', menuButtonClickHandler);