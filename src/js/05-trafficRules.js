//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Сделать по образу и подобию mainMap, menu и пр.!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
document.querySelector("#traffic-control-close")
  .addEventListener("click", closeTrafficRules);
function closeTrafficRules() {
  document.querySelector(".traffic--lows").classList.add("traffic--hidden");
}
