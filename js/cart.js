const cart = JSON.parse(localStorage.getItem("cart")) || [];

function tinhtongtien(){
  let total = cart.reduce((acc,curr) => acc + curr.quantity* curr.price,0)
  document.getElementById("totall").innerHTML = total;
}


function renderCart() {
  let element = "";
  for (let i = 0; i < cart.length; i++) {
    element += `




          <section class="cart">
          <div class="cart-item">
            <img
              src=${cart[i].image}
              alt="Sản phẩm 1"
            />
            <div class="product-details">
              <h2>${cart[i].name}</h2>
              <p style="color: red">${cart[i].price.toLocaleString()} VND</p>
              <div class="quantity">
                <button class="quantity-button minus">-</button>
                <span class="quantity-text">${ cart[i].quantity}</span>
                <button class="quantity-button plus">+</button>
              </div>
            </div>
            <button class="remove-button">Xóa</button>
          </div>
        </section>
  
    `;
  }

  document.getElementById("cartlist").innerHTML = element;
}

renderCart();
tinhtongtien();