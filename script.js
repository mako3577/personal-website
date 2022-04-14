const projectImgs = document.querySelectorAll(".project-img");
const rightBtn = document.querySelector(".gallery-button-right");
const leftBtn = document.querySelector(".gallery-button-left");
const galleryIntervals = [];
let currZIndex = 1;

const rightBtnFunct = function () {
  currZIndex++;
  let currentImg = document.querySelector(".project-img.active");
  let nextImg;
  if (currentImg.nextElementSibling) {
    nextImg = currentImg.nextElementSibling;
  } else {
    nextImg = projectImgs[0];
  }

  currentImg.classList.remove("active");
  currentImg.style.animation = "imgAnimationRightOld 1s";

  nextImg.classList.add("active");
  nextImg.style.animation = "imgAnimationRight 1s";
  nextImg.style.zIndex = `${currZIndex}`;

  // stop interval to avoid changing gallery photo
  // just after clicking button manually
  for (interval of galleryIntervals) {
    clearInterval(interval);
  }
  // create one new interval
  galleryIntervals.push(setInterval(rightBtnFunct, 3500));
};

const leftBtnFunct = function () {
  currZIndex++;
  let currentImg = document.querySelector(".project-img.active");
  let nextImg;
  if (currentImg.previousElementSibling) {
    nextImg = currentImg.previousElementSibling;
  } else {
    nextImg = projectImgs[projectImgs.length - 1];
  }

  currentImg.classList.remove("active");
  currentImg.style.animation = "imgAnimationLeftOld 1s";

  nextImg.classList.add("active");
  nextImg.style.animation = "imgAnimationLeft 1s";
  nextImg.style.zIndex = `${currZIndex}`;

  // stop interval to avoid changing gallery photo
  // just after clicking button manually
  for (interval of galleryIntervals) {
    clearInterval(interval);
  }
  // create one new interval
  galleryIntervals.push(setInterval(rightBtnFunct, 3500));
};

// listeners
rightBtn.addEventListener("click", rightBtnFunct);
leftBtn.addEventListener("click", leftBtnFunct);

// Set interval to make gallery alive
// hold intervals in array to make it eeasy
// to make clearing them easy
galleryIntervals.push(setInterval(rightBtnFunct, 3500));
