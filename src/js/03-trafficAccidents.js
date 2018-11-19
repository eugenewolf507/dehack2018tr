




document.getElementById("accident-close").addEventListener("click", () => {
  document
    .getElementById("accident-section")
    .classList.add("traffic--hidden");
});



//---------------------Click open traffic TITLE listeners--------------------


const titleBtns = document.querySelectorAll('.traffic__expanded-button--js');
titleBtns.forEach(btn => btn.addEventListener('click', showText));


function showText(event) {
 
  titleBtns.forEach(btn => {
    console.log(btn.parentNode.nextSibling)
    if (btn == event.target) {
      
      btn.parentNode.nextSibling.classList.toggle('text--hidden');
      btn.classList.toggle('traffic__expanded-button--active');
    }
    else if (btn !== event.target) {
      btn.parentNode.nextSibling.classList.add('text--hidden');
      btn.classList.remove('traffic__expanded-button--active');
    }
  })
}



// function showText () {
//   event.target.parentNode.nextSibling.classList.toggle('text--hidden');
//   event.target.classList.toggle('traffic__expanded-button--active');

// }
//---------------------Click open traffic--inner listeners-----open section inner text---------------

const innerBtns = document.querySelectorAll('.traffic__expanded-button--inner');
innerBtns.forEach(btn => btn.addEventListener('click', showInnerText));


function showInnerText(event) {
  innerBtns.forEach(btn => {

    if (btn == event.target) {
      btn.nextSibling.classList.toggle('text--hidden');
      btn.classList.toggle('traffic__expanded-button--active');
    }

    else if (btn !== event.target) {
      btn.nextSibling.classList.add('text--hidden');
      btn.classList.remove('traffic__expanded-button--active');
    }
  })
}
//================Click open traffic--inner listeners-----open section LOWS inner text=================================


const lowBtns = document.querySelectorAll('.traffic__expanded-button--low-js');
lowBtns.forEach(btn => btn.addEventListener('click', showLowText));

function showLowText(event) {
  lowBtns.forEach(btn => {
    if (btn == event.target) {
      btn.parentNode.nextSibling.classList.toggle('text--hidden');
      btn.classList.toggle('traffic__expanded-button--active');
    }
    else if (btn !== event.target) {
      btn.parentNode.nextSibling.classList.add('text--hidden');
      btn.classList.remove('traffic__expanded-button--active');
    }
  })
}

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

