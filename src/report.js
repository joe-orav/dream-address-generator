let modalOverlay = document.querySelector(".modal-overlay");
let invalidCodeText = document.querySelector(".invalid-code");
let codeText = document.querySelector(".code");
let statusText = document.querySelector(".status-text");

export function displayReportModal() {
  statusText.style.display = "none";
  modalOverlay.style.display = "block";
  invalidCodeText.innerHTML = codeText.textContent;
}

export function hideReportModal() {
  modalOverlay.style.display = "none";
}

export function sendReport() {
  statusText.style.display = "block";
  statusText.innerHTML = "Sending report...";

  fetch("http://sample/url/jnofo", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: codeText.dataset.codeid }),
  })
    .then((res) => {
      if (res.ok) {
        statusText.innerHTML = "Report has been sent!";
      }
    })
    .catch(() => {
      statusText.innerHTML = "Unable to send report";
    })
    .then(() => {
      setTimeout(() => {
        modalOverlay.style.display = "none";
      }, 800);
    });
}
