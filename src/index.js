import "./styles.css";
import homeDiv from "./home.js";
import menuDiv from "./menu.js";
import aboutDiv from "./about.js"

const content = document.querySelector("#content");
content.appendChild(homeDiv);

const homeButton = document.querySelector("#home");
homeButton.addEventListener("click", () => {
    console.log("home button clicked!");
    content.replaceChildren();
    content.appendChild(homeDiv);
});

const menuButton = document.querySelector("#menu");
menuButton.addEventListener("click", () => {
    console.log("menu button clicked!");
    content.replaceChildren();
    content.appendChild(menuDiv);
});

const aboutButton = document.querySelector("#about");
aboutButton.addEventListener("click", () => {
    console.log("about button clicked!");
    content.replaceChildren();
    content.appendChild(aboutDiv);
})