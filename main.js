let slidePosition = 0;
const slides = document.querySelectorAll(".carousel_item");
const totalSlides = slides.length;

document
  .querySelector("#carousel_button--next")
  .addEventListener("click", () => moveToNextSlide());
document
  .querySelector("#carousel_button--prev")
  .addEventListener("click", () => moveToPrevSlide());

function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove("carousel_item--visible");
    slide.classList.add("carousel_item--hidden");
  }

  slides[slidePosition].classList.add("carousel_item--visible");
}

function moveToNextSlide() {
  slidePosition = (slidePosition + 1) % totalSlides;

  updateSlidePosition();
}

function moveToPrevSlide() {
  slidePosition = (totalSlides + slidePosition - 1) % totalSlides; //2
  updateSlidePosition();
}
