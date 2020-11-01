const menuBar = document.getElementById("menu-bar");
const readMoreBtn = document.querySelectorAll(".btn-read__more");
const navBar = document.getElementById("nav-bar");
let clicked = true;

menuBar.addEventListener("click", () => {
  if (clicked === true) {
    navBar.classList.remove("toggle");
    clicked = false;
  } else if (clicked === false) {
    navBar.classList.add("toggle");
    clicked = true;
  }
});

readMoreBtn.forEach((item) => {
  item.addEventListener("click", (e) => {
    const readMoretext = item.parentElement.previousElementSibling.firstElementChild;
    if (readMoretext.classList.contains("read-more__toggle")) {
      readMoretext.classList.remove("read-more__toggle");
    } else {
      readMoretext.classList.add("read-more__toggle");
    }
  });
});
