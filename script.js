const lines = [
  "> Booting REDA_OS v1.0...",
  "> Loading personality modules...",
  "> Initializing imagination core...",
  "> Checking curiosity levels... OK",
  "> Recruiter detected.",
  "> Welcome.",
  "",
  "> Press ENTER or TAP to continue..."
];

const terminal = document.getElementById("terminalText");
const enterHint = document.getElementById("enterHint");
const recruiterPage = document.getElementById("recruiterPage");

let lineIndex = 0;
let charIndex = 0;

function typeLine() {
  if (lineIndex >= lines.length) {
    enterHint.classList.remove("hidden");
    return;
  }

  if (charIndex < lines[lineIndex].length) {
    terminal.textContent += lines[lineIndex][charIndex];
    charIndex++;
    setTimeout(typeLine, 30);
  } else {
    terminal.textContent += "\n";
    lineIndex++;
    charIndex = 0;
    setTimeout(typeLine, 300);
  }
}

function proceedFromBoot() {
  if (recruiterPage.classList.contains("active")) return;

  document.querySelector(".boot").classList.add("hidden");
  recruiterPage.classList.remove("hidden");
  recruiterPage.classList.add("active");
}
// Desktop: Enter key
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    proceedFromBoot();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  enterHint.addEventListener("click", proceedFromBoot);
});



typeLine();

document.querySelectorAll(".terminal-nav button").forEach(btn => {
  btn.addEventListener("click", () => {
    const targetId = btn.dataset.target;
    const target = document.getElementById(targetId);

    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});