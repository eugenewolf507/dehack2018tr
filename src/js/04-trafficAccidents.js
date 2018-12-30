//-------------------Take DOM nodes---------------------
const accidentCloseBtn = document.querySelector("#accident-close");

const accidentBtns = document.querySelectorAll(".traffic__expanded-button--js");

const accidentInnerBtns = document.querySelectorAll(".traffic__expanded-button--inner");

//---------------------Add listeners to the DOM elements--------------------
accidentCloseBtn.addEventListener("click", () => {
  document.getElementById("accident-section").classList.add("traffic--hidden");
});

accidentBtns.forEach(btn => 
  btn.addEventListener("click", showTextAccident));

accidentInnerBtns.forEach(btn => 
  btn.addEventListener("click", showInnerTextAccident));

//---------------------HANDLERS--------------------

function showTextAccident(event) {
  
  accidentBtns.forEach(btn => {
    if (btn === event.target) {
      this.nextSibling.classList.toggle("text--hidden");
      this.classList.toggle("traffic__expanded-button--active");
    } else if (btn !== event.target) {
      btn.nextSibling.classList.add("text--hidden");
      btn.classList.remove("traffic__expanded-button--active");
    }
  });
}

function showInnerTextAccident(event) {
  accidentInnerBtns.forEach(btn => {
    if (btn == event.target) {
      btn.nextSibling.classList.toggle("text--hidden");
      btn.classList.toggle("traffic__expanded-button--active");
    } else if (btn !== event.target) {
      btn.nextSibling.classList.add("text--hidden");
      btn.classList.remove("traffic__expanded-button--active");
    }
  });
}
