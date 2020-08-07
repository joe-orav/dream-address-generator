import "./style.scss";
import { fetchCodes, setNewCode } from "./codes";

window.onload = () => {
  fetchCodes();
};

let generateButton = document.querySelector(".generate-btn");
generateButton.addEventListener("click", setNewCode);
