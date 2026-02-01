function cutCake() {
  document.getElementById("cutSound").play();
  document.querySelector(".cake").classList.add("cut");

  setTimeout(() => {
    document.querySelector(".ball").classList.add("show");
    document.getElementById("crumpleSound").play();
  }, 800);
}

function openPaper() {
  document.getElementById("openSound").play();
  document.querySelector(".ball").src = "images/paper-open.png";
  document.querySelector(".message").style.opacity = 1;

  setTimeout(() => {
    document.querySelector(".message").style.opacity = 0;
  }, 3000);
}
