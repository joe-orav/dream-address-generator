import "./style.scss";
import { fetchCodes, setNewCode } from "./codes";
import { displayReportModal, hideReportModal, sendReport } from "./report";

window.onload = () => {
  fetchCodes();
};

let generateButton = document.querySelector(".generate-btn");
generateButton.addEventListener("click", setNewCode);

let reportButton = document.querySelector(".report-btn");
reportButton.addEventListener("click", displayReportModal);

let denyReportButton = document.querySelector("button.deny");
denyReportButton.addEventListener("click", hideReportModal);

let confirmReportButton = document.querySelector("button.confirm");
confirmReportButton.addEventListener("click", sendReport);
