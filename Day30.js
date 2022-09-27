const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");
const text =
  'I"m web-devloper, web-designer, graphic-designer, UI-UX-Designer,student, frontend-devloper,python programmer, coder, gym-freak,creative,want to utilize my skilss and learning as well as having experience related to my skills and good in managing the things and personal and professional life as well as having a certification google, microsoft, ibm and meta......Thank you!';
let idx = 1;
let speed = 300 / speedEl.value;

writeText();

function writeText() {
  textEl.innerText = text.slice(0, idx);

  idx++;

  if (idx > text.length) {
    idx = 1;
  }

  setTimeout(writeText, speed);
}

speedEl.addEventListener("input", (e) => (speed = 300 / e.target.value));
