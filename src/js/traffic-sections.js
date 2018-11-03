//---------------------Click open traffic-section listeners--------------------
const menuSvg = document.querySelector(".ham");

document.getElementById("burger-list").addEventListener("click", event => {
  
  if (event.target.matches("#trafficcontrol")) {
    document
      .getElementById("control-section")
      .classList.remove("traffic--hidden");
    return;
  }

  if (event.target.matches("#trafficaccident")) {
    document
      .getElementById("accident-section")
      .classList.remove("traffic--hidden");
    return;
  }

  if (event.target.matches("#pinePark")) {
    document
      .getElementById("routothercyclists-section")
      .classList.remove("traffic--hidden");
    return;
  }
});

//---------------------Click close traffic-section listeners--------------------
document.getElementById("control-close").addEventListener("click", () => {
  document
    .getElementById("control-section")
    .classList.add("traffic--hidden");
});

document.getElementById("accident-close").addEventListener("click", () => {
  document
    .getElementById("accident-section")
    .classList.add("traffic--hidden");
});

document.querySelector(".routothercyclists-section__closebutton").addEventListener("click", () => {
  document
    .getElementById("routothercyclists-section")
    .classList.add("traffic--hidden");
});

//
document.getElementById("burger-list").addEventListener("click", event => {
  console.log(event.target.id);
});

//


//---------------------Click open traffic TITLE listeners--------------------

const titleBtns = document.querySelectorAll('.expanded__button--js');
titleBtns.forEach(btn => btn.addEventListener('click', showText));

function showText () {
  console.log(event.target.parentNode.nextSibling);
  event.target.parentNode.nextSibling.classList.toggle('text--hidden');
  event.target.classList.toggle('expanded__button--active');
}
//---------------------Click open traffic--INNER listeners--------------------
const innerBtns = document.querySelectorAll('.expanded__button--inner');
innerBtns.forEach(btn => btn.addEventListener('click', showInnerText));

console.log()

function showInnerText () {
  event.target.nextSibling.classList.toggle('text--hidden');
  event.target.classList.toggle('expanded__button--active');
}