let x = document.querySelectorAll(".btn");
let y = document.querySelectorAll(".two button");
let title = document.querySelector("#title");
let TitleTwo = document.querySelector("#demo");
x.forEach((item) => {
  item.onclick = function () {
    title.style.color = item.dataset.color;
    title.style.textAlign = item.dataset.location;
  };
});

y.forEach((item) => {
  item.onclick = function () {
    TitleTwo.style.color = item.id;
    TitleTwo.style.textAlign = item.className;
  };
});
