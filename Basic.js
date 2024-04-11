

  // -----------========================================--CART--------------------------
  document.addEventListener('DOMContentLoaded', function () {
    var CartButton = document.querySelector('.Cart1');
    var CartForm = document.querySelector (`.CartForm`);
    if (CartButton && CartForm) {
             CartButton.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the default behavior
            CartForm.style.display = `flex`;
        });
    }
  });

  document.addEventListener('DOMContentLoaded', function () {
    var CloseCart = document.querySelector('.CloseCart');
    var CartForm = document.querySelector('.CartForm');
    if (CloseCart && CartForm) {
            CloseCart.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the default behavior
            CartForm.style.display = `none`;
        });
    }
  });

//  CART WORKING JS
if(document.readyState ==  'loading'){
  document.addEventListener('DOMContentLoaded', ready)
} else{
  ready();
}

// MAKING FUNCTION
function ready(){
    var removeCartButtons = document.getElementsByClassName("CartRemove")
    console.log(removeCartButtons)
    for(var i =0 ; i < removeCartButtons.length; i++){
      var button = removeCartButtons[i];
      button.addEventListener("click", removeCartItem);
    }
    // Quantity changes
    var quantityInputs = document.getElementsByClassName("Cartquantity")
    for ( var  i =0; i < quantityInputs.length; i ++) {
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChanged)
    }
  }

  function removeCartItem(event){
      var buttonClicked = event.target;
      buttonClicked.parentElement.remove();
      updatetotal();
    }


    // QUANTITY CHANGES
    function quantityChanged(event){
      var input = event.target;
      if (NaN(input.value) || input <= 0   ){
        input
      }
    }
// UPDATE TOTAL 
function updatetotal(){
  var cartContent = document.getElementsByClassName("Cartcontent")[0];
  var CartBoxes = cartContent.getElementsByClassName("cartbox") ;
  var total = 0;
  for (var i = 0; i < CartBoxes.length; i++ ){
    var cartBox = CartBoxes[i];
    var priceElement = cartBox.getElementsByClassName("CartPrice")[0];
    var quantityElement = cartBox.getElementsByClassName("Cartquantity")[0];
    var price = parseFloat(priceElement.innerText.replace("$",""));
    var quantity = quantityElement.value;
    total = total + (price * quantity); 
    document.getElementsByClassName('Totalprice')[0].innerText = "$" + total;
  }
}



















  // // // -------------------------------------------

  // if(document.readyState == "loading"){
  //   document.addEventListener("DOMContentLoaded", ready);
  // }else{
  //   ready();
  // }
  // function removeCartItem(event){
  //   var buttonClicked = event.target;
  //   buttonClicked.parentElement.remove();
  //   updatetotal();
  // }
  // function ready(){
  //   var removeCartButtons = document.getElementsByClassName("CartRemove")
  //   console.log(removeCartButtons)
  //   for(var i =0 ; i < removeCartButtons.length; i++){
  //     var button = removeCartButtons[i];
  //     button.addEventListener("click", removeCartItem);
  //   }
  //   // Quantity changes
  //   var quantityInputs = document.getElementsByClassName("Cart-quantity")
  //   for ( var  i =0; i < quantityInputs.length; i ++) {
  //       var input = quantityInputs[i];
  //       input.addEventListener("change", quantityChanged)
  //   }
  // }

  // // QUANTITY CHANGES
  // function quantityChanged(event){
  //   var input = event.target;
  //   if(isNaN(input.value)|| input.value <=0){
  //     input.value=1;
  //   }
  //   updatetotal();
  // }

  // function updatetotal(){
  // var CartContent = document.getElementsByClassName("Cart-content")[0];
  // var CartBoxes = CartContent.getElementsByClassName("cart-box");
  // var total = 0;
  // for (var i =0; i < CartBoxes; i++ ){
  //   var CartBoxes = CartBoxes[i];
  //   var priceElement = CartBoxes.getElementsByClassName("Cart-quantity")[0];
  //   var price = parseFloat(priceElement.innerText.replace("$", ""));
  //   var quantity = quantityElement.value;
  //   total = total + price* quantity;

  //   document.getElementsByClassName("Total-price")[0].innerText = "$" + total;
  // }
  // }
  