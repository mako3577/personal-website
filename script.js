console.log("dsa");

const lArrow = document.querySelector(".larrow");
const animationSet = function () {
  lArrow.classList.toggle("animation");
};

setInterval(animationSet, 1500);
