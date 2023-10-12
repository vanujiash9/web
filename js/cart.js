const cart = JSON.parse(localStorage.getItem('cart')) || [];

function calculateTotalPrice() {
    let total = cart.reduce((acc, curr) => acc + curr.quantity * curr.price, 0);
    document.getElementById('totalPrice').innerHTML = total.toLocaleString();
}

function renderCart() {
    let element = '';
    for (let i = 0; i < cart.length; i++) {
        element += `
        <section class="cart">
        <td>${cart[i].id}</td>
        <div class="cart-item">
          <img
            src="${cart[i].img}"
            alt="Sản phẩm 1"
          />
          <td>${cart[i].quantity}</td>
          <div class="product-details">
            <h2>${cart[i].name}</h2>
            <p style="color: red">${(cart[i].quantity * cart[i].price).toLocaleString()}đ</p>
            <div class="quantity">
              <button class="quantity-button minus">-</button>
              <span class="quantity-text">${cart[i].quantity}</span>
              <button class="quantity-button plus">+</button>
            </div>
          </div>
          <button class="remove-button">Xóa</button>
        </div>
      </section>
        `;
    }
    document.getElementById('tb-body').innerHTML = element;
    calculateTotalPrice();
}

// Gọi hàm để hiển thị giỏ hàng
renderCart();
