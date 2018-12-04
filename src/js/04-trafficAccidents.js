//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Сделать по образу и подобию mainMap, menu и пр.!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
document.querySelector("#accident-close").addEventListener("click", () => {
  document.getElementById("accident-section").classList.add("traffic--hidden");
});

//---------------------Click open traffic TITLE listeners--------------------

const titleBtns = document.querySelectorAll(".traffic__expanded-button--js");
titleBtns.forEach(btn => btn.addEventListener("click", showText));

function showText(event) {
  titleBtns.forEach(btn => {
    if (btn == event.target) {
      btn.parentNode.nextSibling.classList.toggle("text--hidden");
      btn.classList.toggle("traffic__expanded-button--active");
    } else if (btn !== event.target) {
      btn.parentNode.nextSibling.classList.add("text--hidden");
      btn.classList.remove("traffic__expanded-button--active");
    }
  });
}

//---------------------Click open traffic--inner listeners-----open section inner text---------------

const innerBtns = document.querySelectorAll(".traffic__expanded-button--inner");
innerBtns.forEach(btn => btn.addEventListener("click", showInnerText));

function showInnerText(event) {
  innerBtns.forEach(btn => {
    if (btn == event.target) {
      btn.nextSibling.classList.toggle("text--hidden");
      btn.classList.toggle("traffic__expanded-button--active");
    } else if (btn !== event.target) {
      btn.nextSibling.classList.add("text--hidden");
      btn.classList.remove("traffic__expanded-button--active");
    }
  });
}
//================Click open traffic--inner listeners-----open section LOWS inner text=================================

const lowBtns = document.querySelectorAll(".traffic__expanded-button--low-js");
lowBtns.forEach(btn => btn.addEventListener("click", showLowText));

function showLowText(event) {
  lowBtns.forEach(btn => {
    if (btn == event.target) {
      btn.parentNode.nextSibling.classList.toggle("text--hidden");
      btn.classList.toggle("traffic__expanded-button--active");
    } else if (btn !== event.target) {
      btn.parentNode.nextSibling.classList.add("text--hidden");
      btn.classList.remove("traffic__expanded-button--active");
    }
  });
}