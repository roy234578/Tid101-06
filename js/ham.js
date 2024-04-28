const hamicon = document.querySelector("#hamicon1");
const hamburger = document.querySelector("#hamburger");
const hamicon2 = document.querySelector("#hamicon2");

function open() {
  hamburger.style.display = "block";
  hamicon2.style.display = "block";
}

function close() {
  hamburger.style.display = "none";
  hamicon2.style.display = "none";
}

hamicon.addEventListener("click", open);
hamicon2.addEventListener("click", close);
