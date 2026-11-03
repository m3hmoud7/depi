let barMenu = document.getElementById("bar");
let barLinks = document.getElementById("Links");

barMenu.addEventListener("click", () => {
  barLinks.classList.toggle("hidden");
  barMenu.classList.toggle("rotate-[360deg]");
});
