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
