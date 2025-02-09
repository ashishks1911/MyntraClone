

let bagItems = [];
onLoad();


function onLoad() {
  displayItemsOnHomePage();
  let bagItemCount = document.querySelector(".bag-item-count");
  if (bagItems.length == 0) {
    bagItemCount.style.visibility = 'hidden';
  }
  else {
    bagItemCount.innerText = bagItems.length;
    bagItemCount.style.visibility = 'visible';
  }
}

function displayItemsOnHomePage() {
  let itemsContainer = document.querySelector('.items-container');
  if (!itemsContainer) {
    return;
  }
  let innerHtml = '';
  items.forEach(item => {
    innerHtml += `
  <div class="item-container" onclick="displayProductDetails(${item.id})">
    <img class="item-image" src="${item.src}" alt="">
    <div class="item-rating">
      ${item.rating.stars} <i class="fa-solid fa-star review-star-icon"></i>  |  ${item.rating.noOfReviews}
    </div>
    <div class="item-actions">
      <span class="item-wishlist">
        <span class="material-symbols-outlined item-wishlist-icon">
          favorite
        </span>
          <span>Wishlist</span>
        </span>
      </div>
      <div class="item-info">
        <div class="item-brand">${item.brand}</div>
        <div class="item-name">${item.name}</div>
        <div class="item-price">
          <span class="discounted-price">Rs. ${item.discounted_price}</span>
          <span class="original-price">Rs. ${item.original_price}</span>
          <span class="discount">(${item.discount}% OFF)</span>
        </div>
      </div>
    </div>`;
  })
  itemsContainer.innerHTML = innerHtml;
}

function displayProductDetails(productId) {
  let newDiv = document.createElement("div");
  newDiv.classList.add('item-details-container');

  let breadCrumbs = document.createElement("div");
  breadCrumbs.classList.add('breadcrumbs-container');
  let item = items.find(item => item.id == productId);
  breadCrumbs.innerHTML = `
      <a href="#" class="breadcrumbs-link">Home</a>
      <span class="breadcrumbs-separator">/</span>
      <a href="#" class="breadcrumbs-link">Clothing</a>
      <span class="breadcrumbs-separator">/</span>
      <a href="#" class="breadcrumbs-link">Women Clothing</a>
      <span class="breadcrumbs-separator">/</span>
      <a href="#" class="breadcrumbs-link">Kutra Sets</a>
      <span class="breadcrumbs-separator">/</span>
      <a href="#" class="breadcrumbs-link">More by ${item.brand} </a>`;


  let imageContainer = document.createElement('div');
  imageContainer.classList.add('item-details-image-container');

  let images = ' ';
  item.img.forEach(img => {
    images += `<div class="item-image-container">
          <img src="${img}" class="item-details-image" alt="">
        </div>`
  });
  imageContainer.innerHTML = images;

  document.querySelector('main').appendChild(breadCrumbs);
  newDiv.appendChild(imageContainer);
  document.querySelector('main').appendChild(newDiv);

  newDiv.innerHTML += `
      <div class="item-details-description-container">
        <h1 class="item-details-brand">${item.brand}</h1>
        <h1 class="item-details-name">${item.name}</h1>
        <div class="item-details-rating-container">
          <div class="item-details-rating">
            <div class="item-overall-rating">
              ${item.rating.stars} <i class="fa-solid fa-star review-star-icon"></i>
            </div>
            <span> | </span>
            <div class="item-rating-count">
              ${item.rating.noOfReviews} Ratings
            </div>
          </div>
        </div>
        <div class="item-details-price">
          <span class="item-details-discounted-price">Rs. ${item.discounted_price}</span>
          <span class="item-details-original-price">MRP ${item.original_price}</span>
          <span class="item-details-discount">(${item.discount}% OFF)</span>
        </div>
        <div>
          <span class="item-vatinfo">Inclusive of all taxes</span>
        </div>
        <div>
          <div class="colors-container">
            <div>
              <h4 class="colors-heading">More Colors</h4>
              <a href="#"><img src="images/products/colors/1color1.jpg" alt=""></a>
              <a href="#"><img src="images/products/colors/1color2.jpg" alt=""></a>
              <a href="#"><img src="images/products/colors/1color3.jpg" alt=""></a>
              <a href="#"><img src="images/products/colors/1color4.jpg" alt=""></a>
            </div>
          </div>
          <div class="size-buttons-container">
            <div class="size-buttons-header">
              <h4 class="size-buttons-size">Select Size</h4>
              <span class="size-buttons-chart">
                <button class="size-buttons-show-chart">Size chart</button>
                <span class="size-buttons-arrow"></span>
              </span>
            </div>
            <div class="size-buttons-size-buttons">
              <div class="size-buttons-btn-container">
                <span>S</span>
              </div>
              <div class="size-buttons-btn-container">
                <span>M</span>
              </div>
              <div class="size-buttons-btn-container">
                <span>L</span>
              </div>
              <div class="size-buttons-btn-container">
                <span>XL</span>
              </div>
              <div class="size-buttons-btn-container">
                <span>XXL</span>
              </div>
            </div>
          </div>
          <div class="bag-wishlist-btn-container">
            <button type="button" class="bag-btn-container">
              <span class="material-symbols-outlined">
                shopping_bag
              </span>
              <span class="add-to-bag">Add to Bag</span>
            </button>
            <button type="button" class="wishlist-btn-container">
              <span class="material-symbols-outlined">
                favorite
              </span>
              <span class="wishlist-btn-title">Wishlist</span>
            </button>
          </div>
        </div>
      </div>`;
  document.querySelector('.items-container').style.display = "none";

  let AddItemToBag = (id) => {
    bagItems.push(id);
  }

  let addToBag = document.querySelector(".add-to-bag");
  addToBag.addEventListener("click", () => {
    alert("Product Added to the bag")
    AddItemToBag(1);
    onLoad();
  })

}

function homePage() {
  document.querySelector('.items-container').style.display = "flex";
  document.querySelector('.breadcrumbs-container').remove();
  document.querySelector('.item-details-container').remove();
}

