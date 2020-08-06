let dreamCodes = [];
let codeText = document.querySelector(".code");

export async function fetchCodes() {
  let fetchResult = await fetch("./download.json");
  let dataJson = await fetchResult.json();
  dreamCodes = [...dataJson["codes"]];
  setNewCode();
}

export function displayNewCode() {
  codeText.innerHTML = dreamCodes[getRandomIndex()].code;
}

function getRandomIndex() {
  return Math.floor(Math.random() * Math.floor(dreamCodes.length));
}

export function setNewCode() {
  codeText.innerHTML = dreamCodes[getRandomIndex()].code;
  codeText.setAttribute("data-codeid", dreamCodes[getRandomIndex()].id)
}