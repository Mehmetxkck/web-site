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
    { id: 1, name: "Kaju", price: 150, category: "kuruyemis", image: "images/kaju.jpg" },
    { id: 2, name: "Soslu Fıstık", price: 120, category: "kuruyemis", image: "images/soslu_fistik.jpg" },
    { id: 3, name: "Antep Fıstığı", price: 200, category: "kuruyemis", image: "images/fistik.jpg" },
    // Add more products here...
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

// Sidebar kapalıyken tamamen gizleme
function toggleSidebar() {
    if (sidebar.style.display === 'none' || sidebar.style.display === '') {
        sidebar.style.display = 'block';
        setTimeout(() => sidebar.classList.add('active'), 10); // Animasyon için
    } else {
        sidebar.classList.remove('active');
        setTimeout(() => sidebar.style.display = 'none', 300); // Animasyon sonrası gizle
    }
}

// Open/close sidebar
menuButton.addEventListener('click', toggleSidebar);

// Close sidebar when clicking outside
document.addEventListener('click', (event) => {
    if (!sidebar.contains(event.target) && !menuButton.contains(event.target)) {
        sidebar.classList.remove('active');
        setTimeout(() => sidebar.style.display = 'none', 300); // Delay for animation
    }
});

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

