const images = document.querySelectorAll("#gallery img");
const overlay = document.getElementById("overlay");
const overlayImg = document.getElementById("overlayImg");
const closeBtn = document.getElementById("closeBtn");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");

let currentIndex = 0;

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    showImage(currentIndex);
  });
});

function showImage(index) {
  overlayImg.src = images[index].src;
  overlay.style.display = "flex";
}


closeBtn.addEventListener("click", () => {
  overlay.style.display = "none";
});


leftArrow.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});


rightArrow.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});


overlay.addEventListener("click", e => {
  if (e.target === overlay) {
    overlay.style.display = "none";
  }
});


document.addEventListener("keydown", e => {
  if (overlay.style.display === "flex") {
    if (e.key === "ArrowRight") rightArrow.click();
    if (e.key === "ArrowLeft") leftArrow.click();
    if (e.key === "Escape") overlay.style.display = "none";
  }
});