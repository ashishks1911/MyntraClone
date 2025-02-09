

let bagItems = [];
onLoad();


function onLoad() {
  displayItemsOnHomePage();
  function displayItemsOnHomePage() {
    let itemsContainer = document.querySelector('.items-container');
    if (!itemsContainer) {
      return;
    }
    let innerHtml = '';
    items.forEach(item => {
      innerHtml += `
    <div class="item-container" onclick=" location.href= '${item.link}'">
      <img class="item-image" src="${item.img}" alt="">
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
    console.log(innerHtml);
    itemsContainer.innerHTML = innerHtml;
  }
  let bagItemCount = document.querySelector(".bag-item-count");
  if (bagItems.length == 0) {
    bagItemCount.style.visibility = 'hidden';
  }
  else {
    bagItemCount.innerText = bagItems.length;
    bagItemCount.style.visibility = 'visible';
  }
}

let AddItemToBag = (id) => {
  bagItems.push(id);
}

let addToBag = document.querySelector(".add-to-bag");
addToBag.addEventListener("click", () => {
  alert("Product Added to the bag")
  AddItemToBag(1);
  onLoad()

})