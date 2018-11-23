const publicButton = document.querySelector(".public-btn");
const bodyTag = document.querySelector(".me-body");

publicButton.addEventListener("click", executeButtonClick);

function executeButtonClick() {
  bodyTag.classList.toggle("black");
}
