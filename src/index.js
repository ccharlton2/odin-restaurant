import "./style.css";
import "./logo.png";
import "./hero-img.jpg";
import "./chef.jpg";
import "./cocktail.jpg";
import "./logo-mobile.png";

const aDate = new Date();
const copyYear = aDate.getFullYear();
const copyYearSpan = document.getElementById("copy-year");
copyYearSpan.textContent = copyYear;

const logoImg = document.querySelector(".logo");
console.log(logoImg);

// Create a condition that targets viewports at least 768px wide
const mediaQuery = window.matchMedia("(max-width: 900px)");

function handleTabletChange(e) {
  // Check if the media query is true
  if (e.matches) {
    // Then log the following message to the console
    logoImg.src = "./logo-mobile.png";
  } else {
    logoImg.src = "./logo.png";
  }
}

// Register event listener
mediaQuery.addListener(handleTabletChange);

// Initial check
handleTabletChange(mediaQuery);

const hamburgerCheck = document.getElementById("nav-check");
const navDrawer = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-link");
const logoLink = document.getElementById("logo-link");

console.log(navLinks);

for (let i = 0; i < navLinks.length; i += 1) {
  navLinks[i].addEventListener("click", toggleNavDrawer);
}

hamburgerCheck.addEventListener("click", toggleNavDrawer);
logoLink.addEventListener("click", toggleNavDrawer);

function toggleNavDrawer() {
  navDrawer.classList.toggle("toggle-height");
}
