const dotOne = document.getElementById("dot-1");
const dotTwo = document.getElementById("dot-2");
const dotThree = document.getElementById("dot-3");

const leftReference = document.getElementById("left-reference");
const middleReference = document.getElementById("middle-reference");
const rightReference = document.getElementById("right-reference");

const dots = new Array(3);

dots[0] = dotOne;
dots[1] = dotTwo;
dots[2] = dotThree;

function navigateCarousel(e) {
  // Highlight the dot that's in focus
  let target = e.target;
  dots.forEach((dot) => {
    dot.classList.remove("active-dot");
  });
  target.classList.add("active-dot");
}

dots.forEach((element) => {
  element.addEventListener("click", navigateCarousel);
});
