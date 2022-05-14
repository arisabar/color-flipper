const colors = [
  "green",
  "red",
  "rgba(133,122,200)",
  "#f15025",
  "blue",
  "yellow",
];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  const randomNum = getRandomNumber();

  document.body.style.backgroundColor = colors[randomNum];
  color.textContent = colors[randomNum];
  color.style.color = colors[randomNum];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
