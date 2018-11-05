
//-------Click open traffic-section listeners------open section from menu-----

let subrotesId = '';
console.log("+++");

//---------------------Click open traffic-section listeners--------------------

const menuSvg = document.querySelector(".ham");

document.getElementById("burger-list").addEventListener("click", event => {

  console.log("++");

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
//Eugene - move show routothercyclists-section in document.getElementById("rout-footer").addEventListener("click", event => {
  if (event.target.matches("#pinePark")) {
    console.log("+");
    document
      .getElementById("rout-footer")
      .classList.remove("traffic--hidden");
    return;
  }
});

//-------Click close traffic-section listeners----close section with button----------------
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

//---------------------Click open traffic listeners---open section text-----------------


//---------------------Get subrotes__item id START--------------------
document.getElementById("burger-list").addEventListener("click", event => {
  if (event.target.parentNode.classList.contains("subrotes")) {
    subrotesId=event.target.id;
    console.log(subrotesId);
    // return event.target.id;
  }
});
//---------------------Get subrotes__item id END--------------------

//---------------------Show subrote modal window START--------------------

document.getElementById("rout-footer").addEventListener("click", event => {
  console.log(subrotesId);
  // return event.target.id;
  document
    .getElementById("routothercyclists-section")//need use subrotesId
    .classList.remove("traffic--hidden");
  return;

});

//---------------------Show subrote modak window END--------------------

//---------------------Click open traffic TITLE listeners--------------------


// const titleBtns = document.querySelectorAll('.traffic__expanded-button--js');
// titleBtns.forEach(btn => btn.addEventListener('click', showText));


// function showText() {
 
//   titleBtns.forEach(btn => {
//     console.log(btn.parentNode.nextSibling)
//     if (btn == event.target) {
      
//       btn.parentNode.nextSibling.classList.toggle('text--hidden');
//       btn.classList.toggle('traffic__expanded-button--active');
//     }
//     else if (btn !== event.target) {
//       btn.parentNode.nextSibling.classList.add('text--hidden');
//       btn.classList.remove('traffic__expanded-button--active');
//     }
//   })
// }



// function showText () {
//   event.target.parentNode.nextSibling.classList.toggle('text--hidden');
//   event.target.classList.toggle('traffic__expanded-button--active');

// }
// //---------------------Click open traffic--inner listeners-----open section inner text---------------

// const innerBtns = document.querySelectorAll('.traffic__expanded-button--inner');
// innerBtns.forEach(btn => btn.addEventListener('click', showInnerText));


// function showInnerText() {
//   innerBtns.forEach(btn => {

//     if (btn == event.target) {
//       btn.nextSibling.classList.toggle('text--hidden');
//       btn.classList.toggle('traffic__expanded-button--active');
//     }

//     else if (btn !== event.target) {
//       btn.nextSibling.classList.add('text--hidden');
//       btn.classList.remove('traffic__expanded-button--active');
//     }
//   })
// }
// //================Click open traffic--inner listeners-----open section LOWS inner text=================================

// const lowBtns = document.querySelectorAll('.traffic__expanded-button--low-js');
// lowBtns.forEach(btn => btn.addEventListener('click', showLowText));

// function showLowText() {
//   lowBtns.forEach(btn => {
//     if (btn == event.target) {
//       btn.parentNode.nextSibling.classList.toggle('text--hidden');
//       btn.classList.toggle('traffic__expanded-button--active');
//     }
//     else if (btn !== event.target) {
//       btn.parentNode.nextSibling.classList.add('text--hidden');
//       btn.classList.remove('traffic__expanded-button--active');
//     }
//   })
// }

//==============Check yourself=======================
// const forms = document.querySelectorAll('.task__form');
// forms.forEach(form => form.addEventListener('click', showAnswer));
// forms.forEach(form => form.chilren)


// function showAnswer() {
//   // console.log(event);
//   if (event.target.nodeName !== 'BUTTON') return
//   else {
//     let answer = forms.forEach(form => console.log(form.children.nodeName))
//     // event.target.parentNode.nextSibling.textContent = ""
//   }
// }