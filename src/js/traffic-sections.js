//---------------------Click open traffic-section listeners--------------------
document.getElementById("burger-list").addEventListener("click", event => {
  if (event.target.matches("#trafficcontrol")) {
    document
      .getElementById("control-section")
      .classList.remove("traffic-section--hidden");
    return;
  }

  if (event.target.matches("#trafficaccident")) {
    document
      .getElementById("accident-section")
      .classList.remove("traffic-section--hidden");
    return;
  }

  if (event.target.matches("#pinePark")) {
    document
      .getElementById("routothercyclists-section")
      .classList.remove("traffic-section--hidden");
    return;
  }
});

//---------------------Click close traffic-section listeners--------------------
document.getElementById("control-close").addEventListener("click", () => {
  document
    .getElementById("control-section")
    .classList.add("traffic-section--hidden");
});

document.getElementById("accident-close").addEventListener("click", () => {
  document
    .getElementById("accident-section")
    .classList.add("traffic-section--hidden");
});

document.querySelector(".routothercyclists-section__closebutton").addEventListener("click", () => {
  document
    .getElementById("routothercyclists-section")
    .classList.add("traffic-section--hidden");
});
