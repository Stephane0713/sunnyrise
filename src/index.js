// needed for dev-serv to hot reload on public/index.html change
import "../public/index.html";

// Normalize
import "normalize.css";

import "./scss/style.scss";

// Menu

const menuBtn = document.querySelector("#menu-btn");
const headerNav = document.querySelector(".header__nav");

menuBtn.addEventListener("click", () => {
    headerNav.classList.toggle("active");
});
