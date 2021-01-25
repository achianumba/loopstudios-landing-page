document.addEventListener("scroll", function (e) {
  let heroPosition = document.querySelector(".hero");
  let header = document.querySelector(".site__header");

  if (heroPosition.getBoundingClientRect().y < -16) {
    header.classList.add("site__header--dark");
  } else {
    header.classList.remove("site__header--dark");
  }
});
