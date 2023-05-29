const navBarEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const hamburgerMenu = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")
const shoppingCartIcon = document.querySelector(".navbar-shopping-cart")
const shoppingCart = document.querySelector(".aside_shopping-cart")
const productList = []
const cardsContainer = document.querySelector(".cards-container")

mobileMenu.classList.remove('visible')

navBarEmail.addEventListener("click", toggleDesktopMenu)
function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
  shoppingCart.classList.remove("asideVisible")
}

hamburgerMenu.addEventListener("click", toggleMobileMenu)
function toggleMobileMenu() {
  mobileMenu.classList.toggle("menuVisible");
  shoppingCart.classList.remove("asideVisible")
}

shoppingCartIcon.addEventListener("click", toggleShoppingCart)
function toggleShoppingCart() {
  shoppingCart.classList.toggle("asideVisible")
  mobileMenu.classList.remove("menuVisible");
  desktopMenu.classList.add("inactive");
}


productList.push({
  name: "Black Bike",
  price: 120,
  image: "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
})
productList.push({
  name: "Cool Shirt",
  price: 20,
  image: "https://images.pexels.com/photos/2205839/pexels-photo-2205839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
})
productList.push({
  name: "Basic Pants",
  price: 25,
  image: "https://images.pexels.com/photos/1838903/pexels-photo-1838903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
})
productList.push({
  name: "Hand Cosmetic",
  price: 10,
  image: "https://images.pexels.com/photos/1029896/pexels-photo-1029896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
})
productList.push({
  name: "Rubber Duck",
  price: 500,
  image: "https://images.pexels.com/photos/14057275/pexels-photo-14057275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
})
productList.push({
  name: "Tennis Ball",
  price: 5,
  image: "https://images.pexels.com/photos/1405355/pexels-photo-1405355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
})

for (product of productList) {
  const productCard = document.createElement('div')
  productCard.classList.add('product-card')

  const productImg = document.createElement('img')
  productImg.setAttribute('src', product.image)

  const productInfo = document.createElement('div')
  productInfo.classList.add('product-info')

  const productInfoDiv = document.createElement('div')

  const productPrice = document.createElement('p')
  productPrice.innerText = '$' + product.price

  const productName = document.createElement('p')
  productName.innerText = product.name

  const productInfoFigure = document.createElement('figure')
  const productInfoAddToCartImg = document.createElement('img')
  productInfoAddToCartImg.setAttribute('src', '../assets/icons/bt_add_to_cart.svg')

  productInfoFigure.append(productInfoAddToCartImg)
  productInfoDiv.append(productPrice, productName)
  productInfo.append(productInfoDiv, productInfoFigure)
  productCard.append(productImg, productInfo)
  
  cardsContainer.append(productCard)
}