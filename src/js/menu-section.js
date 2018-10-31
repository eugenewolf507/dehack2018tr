// "use strict";
// menu js START
const menuButton = document.querySelector(".box-shadow-menu--closed");
const menu = document.querySelector(".burger-list");

function menuButtonClickHandler() {
  menu.classList.toggle("hidden");
}
menuButton.addEventListener("click", menuButtonClickHandler);
// menu js END
