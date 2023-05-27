const navBarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const hamburgerMenu = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")
const shoppingCartIcon = document.querySelector(".navbar-shopping-cart")
const shoppingCart = document.querySelector(".aside_shopping-cart")


mobileMenu.classList.remove('visible')

navBarEmail.addEventListener("click", toggleDesktopMenu);
function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
  shoppingCart.classList.remove("asideVisible")
}

hamburgerMenu.addEventListener("click", toggleMobileMenu);
function toggleMobileMenu() {
  mobileMenu.classList.toggle("menuVisible");
  shoppingCart.classList.remove("asideVisible")
}

shoppingCartIcon.addEventListener("click", toggleShoppingCart);
function toggleShoppingCart() {
  shoppingCart.classList.toggle("asideVisible")
  mobileMenu.classList.remove("menuVisible");
  desktopMenu.classList.add("inactive");
}