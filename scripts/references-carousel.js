const dotOne = document.getElementById("dot-1");
const dotTwo = document.getElementById("dot-2");
const dotThree = document.getElementById("dot-3");

const dots = new Array(dotOne, dotTwo, dotThree);

const leftReference = document.getElementById("left-reference");
const middleReference = document.getElementById("middle-reference");
const rightReference = document.getElementById("right-reference");

const references = new Array(leftReference, middleReference, rightReference);

function navigateCarousel(e) {
  // Highlight the dot that's in focus
  let target = e.target;
  dots.forEach((dot) => {
    dot.classList.remove("active-dot");
    dot.style.setProperty("opacity", "0");
    setTimeout(() => {
      dot.style.setProperty("opacity", "1");
    }, 400);
  });
  target.classList.add("active-dot");
  // Assign classNames related to @keyframes that moves the elements to right-left-center
  if (target.id === "dot-1") {
    leftReference.className =
      "hero-references-reference-left centered-from-left";
    middleReference.className = "hero-references-reference-middle swiped-right";
    rightReference.className = "hero-references-reference-right";
  } else if (target.id === "dot-2") {
    leftReference.className = "hero-references-reference-left swiped-left";
    middleReference.className =
      "hero-references-reference-middle centered-from-right";
    rightReference.className = "hero-references-reference-right";
  } else if (target.id === "dot-3") {
    leftReference.className = "hero-references-reference-left";
    middleReference.className = "hero-references-reference-middle swiped-left";
    rightReference.className =
      "hero-references-reference-right centered-from-right";
  }
}

dots.forEach((element) => {
  element.addEventListener("click", navigateCarousel);
});
