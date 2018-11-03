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
    .getElementById("co ntrol-section")
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

//---------------------Get subrotes__item id START--------------------
document.getElementById("burger-list").addEventListener("click", event => {
  if (event.target.parentNode.classList.contains("subrotes")) {
    // console.log('event.target.id', event.target.id);  
    return event.target.id;
  }
});


// document.getElementById("burger-list").addEventListener("click", getSubrotesId());

// function getSubrotesId (event) {
// console.log(event.target.id);
// }

//---------------------Get subrotes__item id END--------------------

//---------------------Click open traffic TITLE listeners--------------------

const titleBtns = document.querySelectorAll('.traffic__expanded-button--js');
titleBtns.forEach(btn => btn.addEventListener('click', showText));



function showText () {
  console.log(event.target.parentNode.nextSibling);
  event.target.parentNode.nextSibling.classList.toggle('text--hidden');
  event.target.classList.toggle('traffic__expanded-button--active');
}
//---------------------Click open traffic--inner listeners--------------------
const innerBtns = document.querySelectorAll('.traffic__expanded-button--inner');
innerBtns.forEach(btn => btn.addEventListener('click', showInnerText));

console.log(innerBtns)

function showInnerText () {
  event.target.nextSibling.classList.toggle('text--hidden');
  event.target.classList.toggle('traffic__expanded-button--active');
}