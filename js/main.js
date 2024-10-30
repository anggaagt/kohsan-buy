const navbar = document.querySelector(".navbar-nav");
document.querySelector("#menu").onclick = () => {
  navbar.classList.toggle("active");
};

const menu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbar.contains(e.target)) {
    navbar.classList.remove("active");
  }
});

const wishlist = document.querySelector(".wishlist");
document.querySelector("#bookmark-button").onclick = (e) => {
  wishlist.classList.toggle("active");
  e.preventDefault();
};
