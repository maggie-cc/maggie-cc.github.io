var productArr = []

class Product {
    constructor (glaze, quantity) {
        this.glaze = glaze
        this. quantity = quantity
    }
}

function addToCart() {
    alert ("Successfully added your item :)")
    var glaze = document.getElementById ('glazeType').value 
    var quantity = document.getElementById ('originalQuantity').value 
    var quantCount = parseInt(quantity)
    
    for (var i = 0; i < quantCount; i++) {
        var product = new Product (glaze, quantity)
        productArr.push(product)
    }

    //productArr.push(product)
    console.log (productArr)

    updateCartNumber (productArr.length)
    updatePrice (quantCount)
   
}

/*var quant = parseInt(quant)
for (var i = 0; i < quantCount; i++) {
  var original = new Product(glaze, quantity)
  productArr.push(original)
}*/

function updateCartNumber (num) {
    var cartCount = document.getElementById('cartCount')
    cartCount.innerHTML = '(' + num + ')'
}

function updatePrice (quantCount) {
    var originalPrice = document.getElementById('originalPrice')
    originalPrice.innerHTML = '$' + (3 * quantCount) + '.00'
    console.log (originalPrice)
}


//page unload or page navigation event in vanilla javascript
//vanila javascript alert button events

/* Click right arrow to see original cinnamon roll's ingredients */ 
  let rightBtn = document.getElementById ('right-arrow');
  rightBtn.onclick = function (pressR) {
    pressR.preventDefault();
    var imgBun = document.getElementById('original-image');
    imgBun.setAttribute ("src", "images/original_ingredients.png");
  }

  let leftBtn = document.getElementById('left-arrow');
  leftBtn.onclick = function (pressL) {
    pressL.preventDefault();
    var imgBun = document.getElementById('original-image');
    imgBun.setAttribute ("src", "images/original.jpg");
  }

  var productArr2;  

function goToCheckoutPage() {
    //set the product order in local storage
    localStorage.setItem("order", JSON.stringify(productArr));
	  var loadedProductArr = localStorage.getItem("order");
    productArr2 = JSON.parse(loadedProductArr);
    
}
console.log (productArr2)


/*var product= JSON.stringify(productArr)
var new_product = JSON.parse(product)

let localStorage = window.localStorage
localStorage.getItem ('order')


/* 
function myFunctionGlaze() {
    document.getElementById ("myDropdown").classList.toggle ("show")
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-glaze");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

function myFunction() {
    document.getElementById ("OriQuantDropbtn").classList.toggle ("show")
}

window.onclick = function(event) {
    if (!event.target.matches('.quanDropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-quantity");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  */