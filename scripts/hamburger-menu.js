const hamburgerMenuTrigger = document.getElementById("hamburger-menu-trigger");
const hamburgerMenuNav = document.getElementById("hamburger-menu-nav");

function toggleHamburgerMenu() {
  if (hamburgerMenuNav.className === "hamburger-menu-default") {
    hamburgerMenuNav.className = "hamburger-menu-shown";
    hamburgerMenuTrigger.className = "fas fa-times fa-lg";
  } else if (hamburgerMenuNav.className === "hamburger-menu-shown") {
    hamburgerMenuNav.className = "hamburger-menu-hidden";
    hamburgerMenuTrigger.className = "fas fa-bars fa-lg";
  } else if (hamburgerMenuNav.className === "hamburger-menu-hidden") {
    hamburgerMenuNav.className = "hamburger-menu-shown";
    hamburgerMenuTrigger.className = "fas fa-times fa-lg";
  }
  console.log(hamburgerMenuNav);
}

hamburgerMenuTrigger.addEventListener("click", toggleHamburgerMenu);
