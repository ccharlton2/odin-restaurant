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

const mediaQuery = window.matchMedia("(max-width: 1142px)");

function handleTabletChange(e) {
  if (e.matches) {
    logoImg.src = "./logo-mobile.png";
  } else {
    logoImg.src = "./logo.png";
  }
}

mediaQuery.addListener(handleTabletChange);

handleTabletChange(mediaQuery);

const hamburgerCheck = document.getElementById("nav-check");
const navDrawer = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-link");
const logoLink = document.getElementById("logo-link");

for (let i = 0; i < navLinks.length; i += 1) {
  navLinks[i].addEventListener("click", toggleNavDrawer);
}

hamburgerCheck.addEventListener("click", toggleNavDrawer);
logoLink.addEventListener("click", () => {
  navDrawer.classList.remove("toggle-height");
});

function toggleNavDrawer() {
  if (window.innerWidth <= 1142) {
    navDrawer.classList.toggle("toggle-height");
  }
}
