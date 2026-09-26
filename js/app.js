const products = [
  { id: 1, name: "DJI Air 3 Drone", category: "Drone", price: 1899, rating: "4.9", label: "🚁 DJI", image: "https://images.unsplash.com/photo-1631052941794-2a6e26d4ac17?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTl8fERKSSUyMEFpciUyMDMlMjBEcm9uZXxlbnwwfHwwfHx8MA%3D%3D", description: "• Dual 48MP cameras with 4K/60fps HDR video and 3x zoom<br>• Up to 46 minutes flight time with obstacle sensing" },
  { id: 2, name: "Microsoft Xbox Series X", category: "Gaming", price: 1299, rating: "4.8", label: "🎮 XBOX", image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fE1pY3Jvc29mdCUyMFhib3glMjBTZXJpZXMlMjBYfGVufDB8fDB8fHww", description: "• 1TB SSD with 4K gaming up to 120 FPS<br>• Supports ray tracing and backward compatibility." },
  { id: 3, name: "XGIMI Halo+ Portable Projector", category: "Projector", price: 1199, rating: "4.7", label: "📽️ XGIMI", image: "https://static0.pocketlintimages.com/wordpress/wp-content/uploads/wm/160585-tv-review-xgimi-halo-plus-review-image8-mk1fxwmheo.jpg?w=1600&h=900&fit=crop", description: "• Full HD 1080p resolution with Android TV support<br>• Portable design with auto focus and built-in battery." },
  { id: 4, name: "Wacom One Graphics Tablet", category: "Design", price: 599, rating: "4.6", label: "✏️ WACOM", image: "https://media.wired.com/photos/65454583cfc11df05cbad49e/master/w_1600%2Cc_limit/Wacom-One-13-2023-Drawing-Gear.jpghttps://aecmag.com/wp-content/uploads/2020/04/Wacom_One.jpghttps://images.unsplash.com/photo-1561054241-98e5dba7f214?w=500&h=400&fit=crop", description: "• Battery-free pen with 2048 pressure levels<br>• Compatible with Windows, Mac, and Android." },
  { id: 5, name: "TP-Link Archer AX73", category: "Networking", price: 399, rating: "4.5", label: "📡 TP-LINK", image: "https://www.tpstech.in/cdn/shop/files/615NM7s016L._SL1000.jpg?v=1742817087&width=1445https://www.digitalcitizen.life/wp-content/uploads/2023/06/tp_link_archer_ax73.pnghttps://images.unsplash.com/photo-1621905167918-48416bd8575a?w=500&h=400&fit=crop", description: "•AX5400 dual-band WiFi 6 high-speed connectivity<br>• Handles multiple devices with low latency." },
  { id: 6, name: "Samsung T7 Shield 1TB SSD", category: "Storage", price: 499, rating: "4.7", label: "💾 SAMSUNG", image: "https://9to5mac.com/wp-content/uploads/sites/6/2022/04/Samsung-T7-Shield-03.jpg?quality=82&strip=all&w=1600https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&h=400&fit=crop", description: "• Up to 1050MB/s high-speed data transfer<br>• Rugged, water and dust resistant design." },
  { id: 7, name: "Blackmagic Pocket Cinema Camera 6K", category: "Cinema Camera", price: 1799, rating: "4.8", label: "📹 BLACKMAGIC", image: "https://images.blackmagicdesign.com/images/products/blackmagicpocketcinemacamera/landing/hero/hero-en-lg.jpg?_v=1652932669https://images.unsplash.com/photo-1611532736592-5d1d67d51e1b?w=500&h=400&fit=crop", description: "• 6K resolution with 10-bit RAW recording<br>• Advanced color science and low-light performance." },
  { id: 8, name: "RTX 4060 Gaming PC i5 10400F", category: "Gaming Desktop", price: 1699, rating: "4.8", label: "🖥️ RTX 4060", image: "https://m.media-amazon.com/images/I/81DjMCxHS8L.jpg", description: "High-performance gaming PC with NVIDIA RTX 4₀₆₀ and Intel i₅-₁₀₄₀₀F for smooth gameplay." },
  { id: 9, name: "Canon EOS R5 Mirrorless Camera", category: "Camera", price: 1399, rating: "4.9", label: "📷 CANON", image: "https://images.unsplash.com/photo-1636389523949-95c81a913259?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fENhbm9uJTIwRU9TJTIwUjUlMjBNaXJyb3JsZXNzJTIwQ2FtZXJhfGVufDB8fDB8fHww", description: "• 45MP sensor with 8K video recording<br>• Advanced color science and low-light performance." },
  { id: 10, name: "Sony WH-1000XM5 Headphones", category: "Audio", price: 699, rating: "4.8", label: "🎧 SONY", image: "https://images.unsplash.com/photo-1612858250170-dd5b2e82a8b8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFNvbnklMjBXSC0xMDAwWE01JTIwSGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D", description: "• Industry-leading noise cancellation<br>• 30-hour battery life." },
  { id: 11, name: "Meta Quest 3 VR Headset", category: "VR", price: 999, rating: "4.7", label: "🥽 META", image: "https://sm.ign.com/ign_ap/gallery/m/meta-quest/meta-quest-3-photos_sk49.jpg", description: "• Immersive VR experience with high-resolution displays<br>• Advanced hand tracking and spatial audio." },
  { id: 12, name: "Apple MacBook Pro 16 inch", category: "Laptop", price: 2399, rating: "4.9", label: "🍎 APPLE", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=400&fit=crop", description: "• M3 Pro/Max chip, high performance<br>• 16.2\" XDR display, long battery life." },
  { id: 13, name: "GoPro Hero 12 Black", category: "Action Camera", price: 799, rating: "4.6", label: "🎥 GOPRO", image: "https://www.cnet.com/a/img/resize/04c2e9b2a39133abc1b6d7dd52728d466182c1c1/hub/2023/09/07/23fbad81-f88c-40b3-814b-441e8d5725be/gopro-hero-12-black-10-promo.jpg?auto=webp&fit=crop&height=900&width=1200", description: "• 4K video recording<br>• Waterproof and shockproof design." },
  { id: 14, name: "Apple iPad Pro 12.9 inch", category: "Tablet", price: 1099, rating: "4.8", label: "📱 APPLE", image: "https://www.choice.com.au/wp-content/uploads/2023/02/apple_iPad_Pro_M2_on_teal_background.jpg?w=1200", description: "• Liquid Retina XDR display<br>• Powerful A12Z Bionic chip." }
];

const serviceCharge = 99;
const checkoutStorageKey = "rentloop-last-checkout";

function getCart() {
  return JSON.parse(localStorage.getItem("rentloop-cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("rentloop-cart", JSON.stringify(cart));
}

function getLastCheckout() {
  return JSON.parse(localStorage.getItem(checkoutStorageKey)) || null;
}

function saveLastCheckout(order) {
  localStorage.setItem(checkoutStorageKey, JSON.stringify(order));
}

function formatCurrency(value) {
  return `Rs. ${value.toLocaleString("en-IN")}`;
}

function updateNavCount() {
  const navCount = document.getElementById("navCartCount");
  if (!navCount) return;
  const totalItems = getCart().reduce((sum, item) => sum + item.quantity, 0);
  navCount.textContent = totalItems;
}

function addToCart(productId) {
  const cart = getCart();
  const existingItem = cart.find(item => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    const product = products.find(item => item.id === productId);
    cart.push({ ...product, quantity: 1 });
  }

  saveCart(cart);
  updateNavCount();
  alert("Item added to cart");
}

function renderProducts(filteredProducts = products) {
  const productList = document.getElementById("productList");
  if (!productList) return;

  productList.innerHTML = filteredProducts.map(product => `
    <div class="col-md-6 col-lg-4 col-xl-3">
      <div class="product-card">
        <div class="product-image" style="background-image: url('${product.image}'); background-size: cover; background-position: center;"></div>
        <div class="product-body">
          <span class="badge text-bg-light border mb-2">${product.category}</span>
          <h5>${product.name}</h5>
          <p class="product-meta mb-2">${product.description}</p>
          <div class="d-flex justify-content-between product-meta">
            <span>Rating: ${product.rating} / 5</span>
            <span>Returnable</span>
          </div>
          <div class="price-row">
            <div>
              <div class="rent-price">${formatCurrency(product.price)}</div>
              <small class="text-muted">per week</small>
            </div>
            <button class="btn btn-warning" onclick="addToCart(${product.id})">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  `).join("");
}

function changeQuantity(productId, delta) {
  let cart = getCart();
  cart = cart.map(item => item.id === productId ? { ...item, quantity: item.quantity + delta } : item)
    .filter(item => item.quantity > 0);
  saveCart(cart);
  renderCartPage();
  renderCheckoutPage();
  updateNavCount();
}

function clearCart() {
  saveCart([]);
  renderCartPage();
  renderCheckoutPage();
  updateNavCount();
}

function renderCartPage() {
  const cartItemsContainer = document.getElementById("cartItems");
  if (!cartItemsContainer) return;

  const cart = getCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const grandTotal = cart.length ? totalAmount + serviceCharge : 0;

  document.getElementById("summaryCount").textContent = totalItems;
  document.getElementById("summaryTotal").textContent = formatCurrency(totalAmount);
  document.getElementById("grandTotal").textContent = formatCurrency(grandTotal);

  if (!cart.length) {
    cartItemsContainer.innerHTML = `
      <div class="empty-state">
        <h5>Your cart is empty</h5>
        <p class="mb-3">Add some rental electronics from the home page.</p>
        <a href="index.html" class="btn btn-warning">Continue Shopping</a>
      </div>
    `;
    return;
  }

  cartItemsContainer.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="d-flex flex-column flex-md-row justify-content-between gap-3">
        <div>
          <h5 class="mb-1">${item.name}</h5>
          <p class="text-muted mb-1">${item.category}</p>
          <p class="mb-0 fw-semibold">${formatCurrency(item.price)} per week</p>
        </div>
        <div class="item-controls">
          <button class="btn btn-outline-secondary btn-sm" onclick="changeQuantity(${item.id}, -1)">-</button>
          <span class="quantity-badge">${item.quantity}</span>
          <button class="btn btn-outline-secondary btn-sm" onclick="changeQuantity(${item.id}, 1)">+</button>
          <span class="fw-semibold ms-md-3">${formatCurrency(item.price * item.quantity)}</span>
        </div>
      </div>
    </div>
  `).join("");
}

function renderCheckoutPage() {
  const checkoutItems = document.getElementById("checkoutItems");
  if (!checkoutItems) return;

  const cart = getCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const grandTotal = cart.length ? totalAmount + serviceCharge : 0;

  document.getElementById("checkoutCount").textContent = totalItems;
  document.getElementById("checkoutTotal").textContent = formatCurrency(totalAmount);
  document.getElementById("checkoutGrandTotal").textContent = formatCurrency(grandTotal);

  if (!cart.length) {
    checkoutItems.innerHTML = `
      <div class="empty-state">
        <p class="mb-0">No items in cart. Add products before checkout.</p>
      </div>
    `;
    return;
  }

  checkoutItems.innerHTML = cart.map(item => `
    <div class="summary-line">
      <span>${item.name} x ${item.quantity}</span>
      <strong>${formatCurrency(item.price * item.quantity)}</strong>
    </div>
  `).join("");
}

function setupSearch() {
  const searchInput = document.getElementById("searchInput");
  if (!searchInput) return;

  searchInput.addEventListener("input", event => {
    const query = event.target.value.toLowerCase().trim();
    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query)
    );
    renderProducts(filteredProducts);
  });
}

function setupCartActions() {
  const clearCartBtn = document.getElementById("clearCartBtn");
  if (clearCartBtn) {
    clearCartBtn.addEventListener("click", clearCart);
  }
}

function setupCheckoutForm() {
  const checkoutForm = document.getElementById("checkoutForm");
  if (!checkoutForm) return;

  checkoutForm.addEventListener("submit", event => {
    event.preventDefault();

    if (!getCart().length) {
      alert("Your cart is empty.");
      return;
    }

    const cart = getCart();
    const rentalStartDate = document.getElementById("rentalStartDate")?.value || "";
    saveLastCheckout({
      items: cart,
      rentalStartDate,
      checkedOutAt: new Date().toISOString()
    });

    document.getElementById("orderMessage").classList.remove("d-none");
    checkoutForm.reset();
    saveCart([]);
    renderCheckoutPage();
    renderReturnPage();
    updateNavCount();
  });
}

function formatDisplayDate(dateValue) {
  if (!dateValue) return "Not selected";
  const date = new Date(dateValue);
  if (Number.isNaN(date.getTime())) return dateValue;
  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });
}

function renderReturnPage() {
  const returnItems = document.getElementById("returnItems");
  if (!returnItems) return;

  const order = getLastCheckout();

  if (!order || !order.items || !order.items.length) {
    returnItems.innerHTML = `
      <div class="empty-state">
        <h5>No checked out products found</h5>
        <p class="mb-3">Complete checkout first to see items available for return.</p>
        <a href="checkout.html" class="btn btn-warning">Go To Checkout</a>
      </div>
    `;
    return;
  }

  returnItems.innerHTML = `
    <div class="mb-3">
      <p class="mb-1"><strong>Rental start:</strong> ${formatDisplayDate(order.rentalStartDate)}</p>
      <p class="mb-0"><strong>Total products:</strong> ${order.items.reduce((sum, item) => sum + item.quantity, 0)}</p>
    </div>
    ${order.items.map(item => `
      <div class="summary-line">
        <span>${item.name} x ${item.quantity}</span>
        <strong>${formatCurrency(item.price * item.quantity)}</strong>
      </div>
    `).join("")}
  `;
}

function setupReturnForm() {
  const returnForm = document.getElementById('returnForm');
  if (!returnForm) return;

  returnForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const method = document.getElementById('returnMethod').value;
    const date = document.getElementById('returnDate').value;
    const time = document.getElementById('returnTime').value;
    const notes = document.getElementById('returnNotes').value;

    // Highlight the confirmed step
    const confirmedStep = document.getElementById('confirmedStep');
    confirmedStep.classList.add('active');

    // Show details
    document.getElementById('displayMethod').textContent = method;
    document.getElementById('displayDate').textContent = date;
    document.getElementById('displayTime').textContent = time;
    document.getElementById('displayNotes').textContent = notes || 'None';

    document.getElementById('confirmedDetails').style.display = 'block';

    document.getElementById('returnMessage').classList.remove('d-none');
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  renderCartPage();
  renderCheckoutPage();
  renderReturnPage();
  setupSearch();
  setupCartActions();
  setupCheckoutForm();
  setupReturnForm();
  updateNavCount();
});
