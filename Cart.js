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

// ==========================================================================

document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll(".Mua-ngay");
    addToCartButtons.forEach(function(button) {
      button.addEventListener("click", function(event) {
        event.preventDefault();
        const productItem = button.closest("product-item");
        const productName = productItem.querySelector(".product-name").textContent;
        const productPrice = productItem.querySelector(".product-price").textContent;
        const productImageSrc = productItem.querySelector(".product-thumb img").getAttribute("src");
        
        // Đây là FUNCTION CẬP NHẬT LẠI GIÁ TIỀN

        // Check xem sản phẩm có trong giỏ hàng hay chưa
        let cartItem = findCartItem(productName);
        if (cartItem) {
          // Phần này sẽ check, nếu sản phẩm đã có trong giỏ hàng thì sẽ +1 sản phẩm nữa vào giỏ hàng
          const quantityInput = cartItem.querySelector(".Cartquantity");
          quantityInput.value = parseInt(quantityInput.value) + 1;
        } else {
          // Phần này sẽ tạo thêm 1 item sản phẩm nếu chưa có item đó trong giỏ hàng
          cartItem = document.createElement("div");
          cartItem.classList.add("cartbox");
          cartItem.innerHTML = `
            <img src="${productImageSrc}" alt="" class="cart-img">
            <div class="detail-box">
              <div class="cart-product-title">${productName}</div>
              <div class="CartPrice">${productPrice}</div>
              <input type="number" value="1" class="Cartquantity" >
            </div>
            <box-icon class="CartRemove"  name='trash-alt'></box-icon>
          `;
          const cartContent = document.querySelector(".Cartcontent");
          cartContent.appendChild(cartItem);
        }
        // Sau khi add thành công, giá tiền sẽ được cập nhật lại theo số lượng
        updateTotalPrice();
      });
    });

    // Đây là function xóa 1 item khỏi giỏ hàng khi ấn vào thùng rác
    document.addEventListener("click", function(event) {
      if (event.target && event.target.classList.contains("CartRemove")) {
        event.target.closest(".cartbox").remove();
        // Update total price after removing the product
        updateTotalPrice();
      }
    });
    
    function findCartItem(productName) {
      const cartItems = document.querySelectorAll(".cartbox");
      for (let i = 0; i < cartItems.length; i++) {
        if (cartItems[i].querySelector(".cart-product-title").textContent === productName) {
          return cartItems[i];
        }
      }
      return null;
    }

    // FUNCTION UPDATE TOTEL PRICE IN CART
    function updateTotalPrice() {
      let totalPrice = 0;
      const cartPrices = document.querySelectorAll(".CartPrice");
      
      cartPrices.forEach(function(cartPrice) {
        const price = parseFloat(cartPrice.textContent.replace("$", "").replace(",", ""));
        const quantity = parseInt(cartPrice.parentElement.querySelector(".Cartquantity").value);
        totalPrice += price * quantity;
      });
      const totalPriceElement = document.querySelector(".Totalprice");
      totalPriceElement.textContent = "$" + totalPrice.toFixed(2);
    }
    
  });
  
  

  // FUNCTION FIND THE PRODUCT BY INPUT 


  document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.querySelector(".input");
    const productItems = document.querySelectorAll("product-item");
  
    searchInput.addEventListener("keyup", function(event) {
      const searchValue = event.target.value.toLowerCase();
      productItems.forEach(function(item) {
        const productName = item.querySelector(".product-name").textContent.toLowerCase();
        if (productName.includes(searchValue)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
