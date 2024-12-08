// Slider
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.dots');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentSlide = 0;

// Check if slides exist before proceeding
if (slides.length > 0) {
    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.setAttribute('data-slide', index);
        dotsContainer.appendChild(dot);
    });

    // Update slider
    function updateSlider() {
        const width = slides[0].clientWidth;
        document.querySelector('.slides').style.transform = `translateX(-${currentSlide * width}px)`;

        dotsContainer.querySelectorAll('.dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    // Next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlider();
    }

    // Previous slide
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlider();
    }

    // Event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    dotsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('dot')) {
            currentSlide = parseInt(e.target.getAttribute('data-slide'));
            updateSlider();
        }
    });

    // Auto-slide
    setInterval(nextSlide, 5000);
}

// Products
const products = [
    { id: 1, name: "Kaju", price: 150, category: "kuruyemis", subcategory: "cig", image: "images/kaju.jpg" },
    { id: 2, name: "Soslu Fıstık", price: 120, category: "kuruyemis", subcategory: "kavrilmis", image: "images/soslu_fistik.jpg" },
    { id: 3, name: "Antep Fıstığı", price: 200, category: "kuruyemis", subcategory: "cig", image: "images/fistik.jpg" },
    { id: 4, name: "Soslu Mısır", price: 130, category: "kuruyemis", subcategory: "kavrilmis", image: "images/soslu_misir.jpg" },
    { id: 5, name: "Fındık", price: 330, category: "kuruyemis", subcategory: "cig", image: "images/findik.jpg" },
    { id: 6, name: "Tuzlu Çekirdek", price: 230, category: "kuruyemis", subcategory: "kavrilmis", image: "images/tuzlu_çekirdek.jpg" },
    { id: 7, name: "Tuzsuz Kabak Çekirdeği", price: 190, category: "kuruyemis", subcategory: "cig", image: "images/tuzsuz_kabak.jpg" },
    { id: 8, name: "Karışık Kuruyemiş", price: 250, category: "kuruyemis", subcategory: "cig", image: "images/karisik.jpg" },
    { id: 9, name: "Kabuklu Ceviz", price: 50, category: "kuruyemis", subcategory: "kavrilmis", image: "images/ceviz.jpg" },
    { id: 10, name: "Maraş Sucuğu", price: 40, category: "sekerleme", subcategory: null, image: "images/maraş-sucuğu.jpg" },
    { id: 11, name: "Tuzlu Badem", price: 25, category: "kuruyemis", subcategory: "kavrilmis", image: "images/tuzlu-badem.jpg" },
    { id: 12, name: "Çakıl Taşı", price: 80, category: "draje", subcategory: null, image: "images/çakıl-tasi.jpg" }
];

let cart = [];

// Render product card
function renderProductCard(product) {
    return `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" />
            <h3>${product.name}</h3>
            <p>${product.price} TL</p>
            <button class="add-to-cart" data-id="${product.id}">Sepete Ekle</button>
        </div>
    `;
}

// Render products
function renderProducts(productList) {
    const productListContainer = document.getElementById("product-list");
    productListContainer.innerHTML = "";

    productList.forEach(product => {
        productListContainer.innerHTML += renderProductCard(product);
    });
}

// Add to cart
function addToCart(productId, weight) {
    const product = products.find(p => p.id === parseInt(productId));
    if (product) {
        cart.push({ ...product, weight, quantity: 1 });
        updateCart();
    }
}

// Update cart
function updateCart() {
    const cartCount = document.getElementById("cart-count");
    cartCount.textContent = cart.length; // Total cart items
    localStorage.setItem("cart", JSON.stringify(cart)); // Save cart to localStorage
}

// Render product details
function renderProductDetail(product) {
    const productDetailContainer = document.getElementById('product-detail-container');

    productDetailContainer.innerHTML = `
        <div class="product-detail-card">
            <img src="${product.image}" alt="${product.name}" class="product-image" />
            <h3>${product.name}</h3>
            <p>${product.price} TL</p>
            <div class="product-weight">
                <h4>Ağırlık Seçenekleri:</h4>
                <select id="weight-selector">
                    <option value="250">250 gr</option>
                    <option value="500">500 gr</option>
                    <option value="750">750 gr</option>
                    <option value="1000">1000 gr</option>
                </select>
            </div>
            <button class="add-to-cart" data-id="${product.id}">Sepete Ekle</button>
        </div>
    `;
}

// Load product details page
function loadProductDetail(productId) {
    const product = products.find(p => p.id === parseInt(productId));
    if (product) {
        renderProductDetail(product);
    } else {
        alert('Ürün bulunamadı!');
    }
}

// Sidebar menu toggle
const menuButton = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.querySelector('.close-btn');

// Sidebar toggle
function toggleSidebar() {
    if (sidebar.style.display === 'none' || sidebar.style.display === '') {
        sidebar.style.display = 'block';
        setTimeout(() => sidebar.classList.add('active'), 10);
    } else {
        sidebar.classList.remove('active');
        setTimeout(() => sidebar.style.display = 'none', 300);
    }
}

// Open/close sidebar
menuButton.addEventListener('click', toggleSidebar);

// Close sidebar when clicking outside
document.addEventListener('click', (event) => {
    if (!sidebar.contains(event.target) && !menuButton.contains(event.target)) {
        sidebar.classList.remove('active');
        setTimeout(() => sidebar.style.display = 'none', 300);
    }
});

// Close sidebar on button click
if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        sidebar.classList.remove('active');
        setTimeout(() => sidebar.style.display = 'none', 300);
    });
}

// Render products on page load
document.addEventListener("DOMContentLoaded", () => {
    renderProducts(products);

    // Load cart from localStorage
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if (savedCart) {
        cart = savedCart;
        updateCart();
    }
});
