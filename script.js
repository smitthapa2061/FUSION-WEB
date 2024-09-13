let typed = new Typed(".auto-type", {
  strings: ["BROADCAST", "ESPORTS", "PRODUCTION", "MANGEMENT"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
  loopCount: Infinity,
  showCursor: false,
});

const sideList = document.getElementById("side-list");
const cross = document.getElementById("cross");
const showSideList = document.getElementById("listcomp");

function hideCompList() {
  sideList.style.display = "none";
}

cross.addEventListener("click", hideCompList);

function liston() {
  sideList.style.display = "block";
}

showSideList.addEventListener("click", liston);
