let dreamCodes = [];
let codeText = document.querySelector(".code");
let generateBtn = document.querySelector(".generate-btn");

export async function fetchCodes() {
  let fetchResult;
  codeText.textContent = "Getting address...";
  generateBtn.disabled = true;

  try {
    fetchResult = await fetch(process.env.API_URL);
  } catch {
    codeText.textContent = "Unable to get address";
  }

  if (fetchResult) {
    let dataJson = await fetchResult.json();

    if (dataJson["codes"].length === 0) {
      codeText.textContent = "No codes found";
    } else {
      dreamCodes = [...dataJson["codes"]];
      setNewCode();
      generateBtn.disabled = false;
    }
  }
}

export function displayNewCode() {
  codeText.textContent = dreamCodes[getRandomIndex()].code;
}

function getRandomIndex() {
  return Math.floor(Math.random() * Math.floor(dreamCodes.length));
}

export function setNewCode() {
  codeText.textContent = dreamCodes[getRandomIndex()][1];
  codeText.setAttribute("data-codeid", dreamCodes[getRandomIndex()][0]);
}
