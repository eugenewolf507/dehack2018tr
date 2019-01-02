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
    if (btn === event.currentTarget) {
      $(btn).toggleClass("traffic__expanded-button--active").next().slideToggle(); 
    } else if (btn !== event.currentTarget) {
      $(btn).removeClass("traffic__expanded-button--active").next().slideUp();
    }
  });
}

function showInnerTextAccident(event) {

  accidentInnerBtns.forEach(btn => {
    if (btn === event.currentTarget) {
      $(btn).toggleClass("traffic__expanded-button--active").next().slideToggle(); 
    } else if (btn !== event.currentTarget) {
      $(btn).removeClass("traffic__expanded-button--active").next().slideUp();
    }
  });
}


//================Smooth scroll to anchor link START=================================
$(document).ready(function() {
  $("a.scrollto").click(function() {
     $(".traffic").animate({
        scrollTop: $($(this).attr("href")).offset().top
     }, {
        duration: 1000,
        easing: "swing"
     });
     return false;
  });
});
//================Smooth scroll to anchor link END=================================

