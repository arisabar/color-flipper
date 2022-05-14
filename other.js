let btn = document.querySelector(".btn2");

btn.addEventListener("click", () => {
  if (btn.className == "btn2") {
    btn.classList.add("btn3");
    btn.classList.remove("btn2");
  }
  if (btn.className == "btn3") {
    btn.classList.add("btn4");
    btn.classList.remove("btn3");
  } else {
    btn.classList.add("btn2");
    btn.classList.remove("btn4");
  }
});
