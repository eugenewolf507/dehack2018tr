"use strict";

var menuButton = document.querySelector('.js-burger');
var menu = document.querySelector('.burger-list');

function menuButtonClickHandler() {
  menu.classList.toggle('hidden');
}

;
menuButton.addEventListener('click', menuButtonClickHandler);