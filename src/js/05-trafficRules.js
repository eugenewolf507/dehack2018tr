//-------------------Take DOM nodes---------------------
const rulesCloseBtn = document.getElementById("control-close");

const rulesBtns = document.querySelectorAll(".traffic__expanded-button--low-js");

//---------------------Add listeners to the DOM elements--------------------
rulesCloseBtn.addEventListener("click", () => {
  document.getElementById("control-section").classList.add("traffic--hidden");
});

rulesBtns.forEach(btn => btn.addEventListener("click", showRulesText));

//---------------------HANDLERS--------------------
function showRulesText(event) {
  rulesBtns.forEach(btn => {
    if (btn == event.target) {
      btn.parentNode.nextSibling.classList.toggle("text--hidden");
      btn.classList.toggle("traffic__expanded-button--active");
    } else if (btn !== event.target) {
      btn.parentNode.nextSibling.classList.add("text--hidden");
      btn.classList.remove("traffic__expanded-button--active");
    }
  });
}
