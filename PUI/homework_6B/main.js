var productArr = [];
var productArr2 = [];
var productSum = 0;

class Product {
  constructor(glaze, quantity) {
    this.glaze = glaze
    this.quantity = quantity
  }
}

function addToCart() {
  alert("Successfully added your item :)")
  var glaze = document.getElementById('glazeType').value
  var quantity = document.getElementById('originalQuantity').value
  var quantCount = parseInt(quantity)
  productSum += quantCount

  //for (var i = 0; i < quantCount; i++) {
  var product = new Product(glaze, quantity)
  productArr.push(product)
  //}

  //productArr.push(product)
  console.log(productArr)

  updateCartNumber(productSum)
  updatePrice(quantCount)

}

function updateCartNumber(num) {
  var cartCount = document.getElementById('cartCount')
  // const count = localStorage.getItem('order')// string => list eval()
  cartCount.innerHTML = '(' + num + ')'
}

var originalPrice;

function updatePrice(quantCount) {
  originalPrice = document.getElementById('originalPrice')
  originalPrice.innerHTML = '$' + (3 * quantCount) + '.00'
  console.log(originalPrice)
}

var productArr2;

function goToCheckoutPage() {
  //set the product order in local storage
  localStorage.setItem("order", JSON.stringify(productArr));
  var loadedProductArr = localStorage.getItem("order");
  productArr2 = JSON.parse(loadedProductArr);

  window.location.replace('add-to-cart.html');
}

function checkoutPageLoaded() {
  //Now that the checkout page is loaded, lets grab that localStorage adta

  var loadedProductArr = localStorage.getItem('order')
  productArr2 = JSON.parse(loadedProductArr)
  //Now productArr2 is the equivalent of the productArr we stored on the index.html page 

  console.log('we are on checkout page')
  console.log(productArr2);

  var listOfProducts = document.getElementById('listOfProducts');

  for (var i = 0; i < productArr2.length; i++) {
    var product = productArr2[i];
    var productGlaze = product.glaze;
    var productQuantity = product.quantity;
    var TempTotal = 3 * parseInt(productQuantity);
    productSum += TempTotal;

    if (productGlaze == 'None') {
      listOfProducts.innerHTML += '<div class="bunsInCart">Original Cinnamon Bun' + '<br />' + 'Glaze: ' + productGlaze + '<br />' + ' Quantity: ' + productQuantity + '</div>'
      listOfProducts.innerHTML += '<span onclick="deleteProduct(' + i + ')"><button class="remove-btn" type="button">Remove</button></span>';
      listOfProducts.innerHTML += '<div><img class="original-image-cart" src="images/original.jpg"> </div>'
      listOfProducts.innerHTML += '<div class="productsInCart">' + '<br /> Total=' + '$' + TempTotal + '.00' + '</div>';
      listOfProducts.innerHTML += '<br /><br /><br />'
    }
    else {
      listOfProducts.innerHTML += '<div class="bunsInCart" onclick="wow()">Original Cinnamon Bun' + '<br />' + 'Glaze: ' + productGlaze + '<br />' + ' Quantity: ' + productQuantity + '</div>'
      listOfProducts.innerHTML += '<span onclick="deleteProduct(' + i + ')"><button class="remove-btn" type="button">Remove</button></span>';
      listOfProducts.innerHTML += '<div><img class="original-image-cart" src="images/original.jpg"> </div>'
      listOfProducts.innerHTML += '<div class="productsInCart">' + '<br /> Total=' + '$' + TempTotal + '.00' + '</div>';
      listOfProducts.innerHTML += '<br /><br /><br />'
    }

  }
  /* Estimated Total on the check out page */
  var rightPartWrapper = document.getElementById('ItemTotal');
  rightPartWrapper.innerHTML = '';
  rightPartWrapper.innerHTML += '<div id="itemTotal">' + '<br /> Estimated Total=' + '$' + productSum + '.00' + '</div>';
}

//Call this function before navigating away from checkout page (it will save your edits/deletes)
function saveEdits() {
  localStorage.setItem('order', JSON.stringify(productArr2))
}

function deleteProduct(index) {
  alert('Are you sure you want to remove this item?' + index + 1)
  console.log('before we delete');
  console.log('-----', productArr2);

  //Remove this product object from our productArr2 
  productArr2.splice(index, 1);
  console.log('--------', productArr2)
  // productSum = parseInt(productSum - (3 * parseInt(product.quantity)))

  console.log('after we delete');
  console.log('==========\n', productArr2, productSum, '\n=========\n');
  localStorage.setItem('order', JSON.stringify(productArr2));


  listOfProducts.innerHTML = '';

  if (productArr2.length == 0) {
    productSum = 0
    document.getElementById('ItemTotal').innerHTML = '<div id="itemTotal">' + '<br /> Estimated Total=' + '$ 0.00' + '</div>';
  } else {
    productSum = 0
    for (var i = 0; i < productArr2.length; i++) {

      var product = productArr2[i];
      console.log('product', product)
      if (product) {
        var productGlaze = product.glaze;
        var productQuantity = product.quantity;
        var TempTotal = 3 * parseInt(productQuantity);
        console.log('quantity', productQuantity)
        productSum += TempTotal

        if (productGlaze == 'None') {
          listOfProducts.innerHTML += '<div class="bunsInCart"">Original Cinnamon Bun' + '<br />' + 'Glaze: ' + productGlaze + '<br />' + ' Quantity: ' + productQuantity + '</div>';
          listOfProducts.innerHTML += '<span onclick="deleteProduct(' + i + ')"><button class="remove-btn" type="button">Remove</button></span>';
          listOfProducts.innerHTML += '<div><img class="original-image-cart" src="images/original.jpg"></div>';
          listOfProducts.innerHTML += '<div class="productsInCart">' + '<br /> Total=' + '$' + TempTotal + '.00' + '</div>';
          listOfProducts.innerHTML += '<br /><br /><br />';
        }
        else {
          listOfProducts.innerHTML += '<div class="bunsInCart"" onclick="wow()">Original Cinnamon Bun' + '<br />' + 'Glaze: ' + productGlaze + '<br />' + ' Quantity: ' + productQuantity + '</div>';
          listOfProducts.innerHTML += '<span onclick="deleteProduct(' + i + ')"><button class="remove-btn" type="button">Remove</button></span>';
          listOfProducts.innerHTML += '<div><img class="original-image-cart" src="images/original.jpg"></div>';
          listOfProducts.innerHTML += '<div class="productsInCart">' + '<br /> Total=' + '$' + TempTotal + '.00' + '</div>';
        }
        document.getElementById('ItemTotal').innerHTML = '<div id="itemTotal">' + '<br /> Estimated Total=' + '$' + productSum + '.00' + '</div>'


      }
      console.log('test', productSum)
      // document.getElementById('ItemTotal').innerHTML = '';
    }
  }

}

function wow() {
  alert('None was clicked')
}
//middlePartWrapper.innerHTML = '';
//middlePartWrapper.innerHTML += '<div><img class="original-image-cart" src="images/original.jpg"> </div>';


//page unload or page navigation event in vanilla javascript
//vanila javascript alert button events

/* Click right arrow to see original cinnamon roll's ingredients */

window.onload = function () {
  let rightBtn = document.getElementById('right-arrow');
  rightBtn.onclick = function (pressR) {
    pressR.preventDefault();
    var imgBun = document.getElementById('original-image');
    imgBun.setAttribute("src", "images/original_ingredients.png");
  }

  let leftBtn = document.getElementById('left-arrow');
  leftBtn.onclick = function (pressL) {
    pressL.preventDefault();
    var imgBun = document.getElementById('original-image');
    imgBun.setAttribute("src", "images/original.jpg");
  }

}



