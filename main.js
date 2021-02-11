document.addEventListener("scroll", function (e) {
  let heroPosition = document.querySelector(".hero");
  let header = document.querySelector(".site__header");

  if (heroPosition.getBoundingClientRect().y < -16) {
    header.classList.add("site__header--dark", "site__header--reduced-padding");
  } else {
    header.classList.remove(
      "site__header--dark",
      "site__header--reduced-padding"
    );
  }
});

document.querySelector("img.site__nav--toggle").onclick = function () {
  let header = document.querySelector(".site__header");
  let nav = document.querySelector(".site__nav");
  let navBtn = document.querySelector(".site__nav--toggle");

  if (getComputedStyle(nav).display === "none") {
    header.classList.add("site__header--dark", "site__header--fullscreen");
    nav.classList.add("site__nav--show");
    navBtn.src = "./images/icon-close.svg";
  } else {
    let heroPosition = document.querySelector(".hero").getBoundingClientRect()
      .y;

    header.classList.remove("site__header--fullscreen");

    if (heroPosition > -16) {
      header.classList.remove("site__header--dark");
    }

    nav.classList.remove("site__nav--show");

    navBtn.src = "./images/icon-hamburger.svg";
  }
};
