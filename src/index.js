import "./style.scss";
import { fetchCodes, displayNewCode } from "./codes.js";

window.onload = () => {
  fetchCodes();
};

let generateButton = document.querySelector(".generate-btn");

generateButton.addEventListener("click", () => {
  displayNewCode();
});
