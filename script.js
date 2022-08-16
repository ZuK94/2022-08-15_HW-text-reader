const textParagraph = document.getElementById("text-container");
const newContainer = document.getElementById("print-here");
const line = textParagraph.innerText.split(".");

readIt(line, newContainer);

function readIt(arr, doc) {
  newContainer.innerHTML = "<h1>Le text for slow guys</h1>";
  for (let i = 0; i < arr.length; i++) {
    setTimeout(() => {
      doc.innerHTML += `${arr[i]} </br>`;
    }, 2000 * (i + 1) - 0.04);
  }
}
