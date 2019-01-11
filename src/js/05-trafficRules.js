//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Сделать по образу и подобию mainMap, menu и пр.!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// document.getElementById("traffic-control-close").addEventListener("click", closeTrafficRules);
// function closeTrafficRules() {
//   document.getElementById("control-section").classList.add("traffic--hidden");
// }


document.querySelector("#traffic-control-close").addEventListener("click", () => {
  document.getElementById("control-section").classList.add("traffic--hidden");
});