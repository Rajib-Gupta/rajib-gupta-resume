const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

const linkCard1 = document.querySelector(".link-card1").addEventListener("click", () => {
  window.location.href = "https://github.com/Rajib-Gupta";
})
const linkCard2 = document.querySelector(".link-card2").addEventListener("click", () => {
  window.location.href = "https://www.linkedin.com/in/rajib-gupta-620206190/";
});
const linkCard3 = document.querySelector(".link-card3").addEventListener("click", () => {
  window.location.href = "https://drive.google.com/file/d/1jUv9ssUjVD4Usfp_WTs6xw296PIRBw8j/view?usp=sharing";
});
const linkCard4 = document.querySelector(".link-card4");

const hireMe = document.querySelector(".hire-me").addEventListener("click", () => {
  window.location.href = "https://drive.google.com/file/d/1jUv9ssUjVD4Usfp_WTs6xw296PIRBw8j/view?usp=sharing";
})