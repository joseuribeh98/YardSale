const navBarEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const hamburgerMenu = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")
const shoppingCartIcon = document.querySelector(".navbar-shopping-cart")
const shoppingCart = document.querySelector(".aside_shopping-cart")
const productList = []
const cardsContainer = document.querySelector(".cards-container")
const productDetail = document.querySelector(".product-detail")
const closeDetailBtn = document.querySelector(".product-detail-close");
const productDetailDescription = document.querySelector(".product-detail .product-description");



productList.push({
  name: "Black Bike",
  price: 120,
  image: "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  description: "Urban folding bike, lightweight and compact, perfect for daily commutes."
});
productList.push({
  name: "Cool Shirt",
  price: 20,
  image: "https://images.pexels.com/photos/2205839/pexels-photo-2205839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  description: "Trendy cool shirt, perfect for casual outings and special occasions."
});
productList.push({
  name: "Basic Pants",
  price: 25,
  image: "https://images.pexels.com/photos/1838903/pexels-photo-1838903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  description: "Comfortable and durable basic pants, suitable for everyday wear."
});
productList.push({
  name: "Hand Cosmetic",
  price: 10,
  image: "https://images.pexels.com/photos/1029896/pexels-photo-1029896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  description: "Hand cosmetic, helps to keep your skin smooth and soft."
});
productList.push({
  name: "Rubber Duck",
  price: 500,
  image: "https://images.pexels.com/photos/14057275/pexels-photo-14057275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  description: "Cute rubber duck, perfect for kids' bath time."
});
productList.push({
  name: "Tennis Ball",
  price: 5,
  image: "https://images.pexels.com/photos/1405355/pexels-photo-1405355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  description: "High-quality tennis ball, ideal for both practice and competition."
});

function renderProducts(arr) {
  for (let i = 0; i < arr.length; i++) {
    const product = arr[i];
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.setAttribute('data-index', i);
    productImg.addEventListener("click", toggleProductDetail); 

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;

    const productName = document.createElement('p');
    productName.innerText = product.name;

    const productInfoFigure = document.createElement('figure');
    const productInfoAddToCartImg = document.createElement('img');
    productInfoAddToCartImg.setAttribute('src', '../assets/icons/bt_add_to_cart.svg');

    productInfoFigure.append(productInfoAddToCartImg);
    productInfoDiv.append(productPrice, productName);
    productInfo.append(productInfoDiv, productInfoFigure);
    productCard.append(productImg, productInfo);
    
    cardsContainer.append(productCard);
  }
}

renderProducts(productList);

mobileMenu.classList.remove('visible')

navBarEmail.addEventListener("click", toggleDesktopMenu)
function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
  shoppingCart.classList.remove("asideVisible")
  productDetail.classList.remove("asideVisible");
}

hamburgerMenu.addEventListener("click", toggleMobileMenu)
function toggleMobileMenu() {
  mobileMenu.classList.toggle("menuVisible");
  shoppingCart.classList.remove("asideVisible")
  productDetail.classList.remove("asideVisible");
}

shoppingCartIcon.addEventListener("click", toggleShoppingCart)
function toggleShoppingCart() {
  shoppingCart.classList.toggle("asideVisible")
  mobileMenu.classList.remove("menuVisible")
  desktopMenu.classList.add("inactive")
  productDetail.classList.remove("asideVisible");
}

closeDetailBtn.addEventListener("click", closeProductDetail);
function closeProductDetail() {
  productDetail.classList.remove("asideVisible");
}

function toggleProductDetail(event) {
  const productIndex = event.target.getAttribute('data-index');
  const product = productList[productIndex];

  const productDetailImage = document.querySelector(".product-detail > img");
  const productDetailName = document.querySelector(".product-detail .product-name");
  const productDetailPrice = document.querySelector(".product-detail .product-price");

  productDetailImage.src = product.image;
  productDetailName.textContent = product.name;
  productDetailPrice.textContent = '$' + product.price;
  productDetailDescription.innerText = product.description;


  productDetail.classList.toggle("asideVisible")
  shoppingCart.classList.remove("asideVisible")
  mobileMenu.classList.remove("menuVisible")
  desktopMenu.classList.add("inactive")
}
