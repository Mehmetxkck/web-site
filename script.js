// Slider
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.dots');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentSlide = 0;

// Slider güncelleyici
function updateSlider() {
    const slideWidth = slides[0].clientWidth;

    // Slider'ı güncelle
    document.querySelector('.slides').style.transform = `translateX(-${currentSlide * slideWidth}px)`;

    // Aktif dot'u güncelle
    dotsContainer.querySelectorAll('.dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

// Dot'ları oluştur
function createDots() {
    // İlk olarak mevcut dot'ları temizle
    dotsContainer.innerHTML = '';

    // Her bir slide için dot oluştur
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active'); // İlk dot aktif
        dot.setAttribute('data-slide', index);
        dotsContainer.appendChild(dot);
    });

    // Dot'lara tıklama olayını bağla
    dotsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('dot')) {
            currentSlide = parseInt(e.target.getAttribute('data-slide'));
            updateSlider();
        }
    });
}

// Slider ileri
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlider();
}

// Slider geri
function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlider();
}

// Tıklama olaylarını bağla
nextBtn?.addEventListener('click', nextSlide);
prevBtn?.addEventListener('click', prevSlide);

// Otomatik kaydırma
setInterval(nextSlide, 5000);

// Sayfa yüklendiğinde başlat
document.addEventListener('DOMContentLoaded', () => {
    if (slides.length > 0) {
        createDots();
        updateSlider();
    }
});


// Products
const products = [
    { id: 1, name: "Kaju", price: 800, category: "kuruyemis", image: "images/kaju.jpg", description: "Lezzetli ve besleyici kaju fıstığı, yüksek kaliteli ve taze.", weights: [1000, 750, 500, 250] },
    { id: 2, name: "Soslu Fıstık", price: 220, category: "kuruyemis", image: "images/soslu_fistik.jpg", description: "Baharatlarla zenginleştirilmiş, çiğnendikçe lezzetini arttıran fıstık.", weights: [1000, 750, 500, 250] },
    { id: 3, name: "Antep Fıstığı", price: 900, category: "kuruyemis", image: "images/fistik.jpg", description: "En kaliteli antep fıstığı, lezzetli ve besleyici.", weights: [1000, 750, 500, 250] },
    { id: 4, name: "Soslu Mısır", price: 160, category: "kuruyemis", image: "images/soslu_misir.jpg", description: "Baharatlarla tatlandırılmış çıtır mısır, mükemmel atıştırmalık.", weights: [1000, 750, 500, 250] },
    { id: 5, name: "Fındık içi", price: 775, category: "kuruyemis", image: "images/findik.jpg", description: "Taze ve doğal fındık içi, vitamin ve mineral deposu.", weights: [1000, 750, 500, 250] },
    { id: 6, name: "Tuzlu Dakota Çekirdek", price: 165, category: "kuruyemis", image: "images/tuzlu_çekirdek.jpg", description: "Fırınlanmış ve tuzlanmış çekirdekler, lezzetli bir atıştırmalık.", weights: [1000, 750, 500, 250] },
    { id: 7, name: "Tuzsuz Kabak Çekirdeği", price: 625, category: "kuruyemis", image: "images/tuzsuz_kabak.jpg", description: "Tuzsuz kabak çekirdeği, sağlıklı ve lezzetli bir seçenek.", weights: [1000, 750, 500, 250] },
    { id: 8, name: "Atom Karışık Kuruyemiş", price: 800, category: "kuruyemis", image: "images/karisik.jpg", description: "Farklı kuruyemişlerin karışımı, lezzetli ve besleyici.", weights: [1000, 750, 500, 250] },
    { id: 9, name: "Kabuklu Ceviz", price: 280, category: "kuruyemis", image: "images/ceviz.jpg", description: "Taze ve lezzetli kabuklu ceviz, doğal ve sağlıklı.", weights: [1000, 750, 500, 250] },
    { id: 10, name: "Cevizli Pekmezli Sucuk", price: 290, category: "sekerleme", image: "images/maraş-sucuğu.jpg", description: "Ceviz ve pekmezin birleşimi, tatlı ve enerji verici..", weights: [1000, 750, 500, 250] },
    { id: 11, name: "Tuzlu Badem İçi Yerli", price: 735, category: "kuruyemis", image: "images/tuzlu-badem.jpg", description: "Yerli badem, tuzla harmanlanarak lezzetli bir atıştırmalık sunar.", weights: [1000, 750, 500, 250] },
    { id: 12, name: "Çakıl Taşı", price: 80, category: "draje", image: "images/çakıl-tasi.jpg", description: "Farklı aromalı çakıl taşları, keyifli ve çarpıcı bir tat.", weights: [1000, 750, 500, 250] },
    { id: 13, name: "Siirt Fıstığı", price: 900, category: "kuruyemis", image: "images/siirt-fıstığı.jpg", description: "Siirt fıstığı, kendine has tadı ile eşsiz bir lezzet sunar.", weights: [1000, 750, 500, 250] },
    { id: 14, name: "Çifte Kavrulmuş Tuzlu Yer Fıstığı", price: 235, category: "kuruyemis", image: "images/çifte-tuzlu-fıstık.jpg", description: "Çifte kavrulmuş yer fıstığı, ekstra lezzet ve çıtırlık sağlar.", weights: [1000, 750, 500, 250] },
    { id: 15, name: "Şeker Sucuğu", price: 190, category: "sekerleme", image: "images/seker-sucuğu.jpg", description: "Tatlı ve besleyici şeker sucukları, geleneksel lezzeti yansıtır.", weights: [1000, 750, 500, 250] },
    { id: 16, name: "Antep Fıstıklı Cezerye", price: 265, category: "sekerleme", image: "images/antep-fıstıklı-cezerye.jpg", description: "Cezerye içinde antep fıstığı parçaları, doğal ve lezzetli.", weights: [1000, 750, 500, 250] },
    { id: 17, name: "Antep Fıstıklı Nar Aromalı Fitil Lokum", price: 590, category: "sekerleme", image: "images/narlı-fitil.jpg", description: "Nar aroması ve antep fıstığıyla zenginleştirilmiş fitil lokum.", weights: [1000, 750, 500, 250] },
    { id: 18, name: "Sarı Leblebi", price: 210, category: "kuruyemis", image: "images/sarı-leblebi.jpg", description: "Lezzetli ve gevrek sarı leblebi.", weights: [1000, 750, 500, 250] },
    { id: 19, name: "Dağlama Leblebi", price: 210, category: "kuruyemis", image: "images/dağlama.jpg", description: "Klasik bir tat sunan dağlama leblebi.", weights: [1000, 750, 500, 250] },
    { id: 20, name: "Beyaz Leblebi", price: 235, category: "kuruyemis", image: "images/beyaz-leblebi.jpg", description: "Yumuşak ve hafif tatlı beyaz leblebi.", weights: [1000, 750, 500, 250] },
    { id: 21, name: "Çıtır Leblebi", price: 160, category: "kuruyemis", image: "images/çıtır-leblebi.jpg", description: "Kıtır kıtır keyif sunan çıtır leblebi.", weights: [1000, 750, 500, 250] },
    { id: 22, name: "Dut Kurusu", price: 400, category: "kurutulmus-meyve", image: "images/dut-kurusu.jpg", description: "Doğal tatlılıkta, besleyici dut kurusu.", weights: [1000, 750, 500, 250] },
    { id: 23, name: "Siyah Üzüm", price: 400, category: "kurutulmus-meyve", image: "images/siyah-üzüm.jpg", description: "Lezzetli ve enerji veren siyah üzüm kurusu.", weights: [1000, 750, 500, 250] },
    { id: 24, name: "İzmir Üzümü", price: 285, category: "kurutulmus-meyve", image: "images/izmir-üzümü.jpg", description: "Ege'nin eşsiz tadını sunan İzmir üzümü.", weights: [1000, 750, 500, 250] },
    { id: 25, name: "Gün Kurusu Kayısı", price: 565, category: "kurutulmus-meyve", image: "images/gün-kurusu.jpg", description: "Doğal kurutulmuş, enfes gün kurusu kayısı.", weights: [1000, 750, 500, 250] },
    { id: 26, name: "Sarı Kayısı", price: 450, category: "kurutulmus-meyve", image: "images/sari-kayisi.jpg", description: "Tazeliğini koruyan nefis sarı kayısı.", weights: [1000, 750, 500, 250] },
    { id: 27, name: "İncir", price: 675, category: "kurutulmus-meyve", image: "images/incir.jpg", description: "Sağlıklı ve doğal kurutulmuş incir.", weights: [1000, 750, 500, 250] },
    { id: 28, name: "Tuzsuz Dakota Çekirdek", price: 165, category: "kuruyemis", image: "images/tuzsuz-dakota.jpg", description: "Fırınlanmış, tuz eklenmeden yapılan çekirdek, doğal lezzet.", weights: [1000, 750, 500, 250] },
    { id: 29, name: "Tuzlu Kabak Çekirdeği", price: 625, category: "kuruyemis", image: "images/tuzlu-kabak.jpg", description: "Lezzetli ve tuzlu kabak çekirdekleri, besleyici ve enerji verici.", weights: [1000, 750, 500, 250] },
    { id: 30, name: "Tek Kavrulmuş Tuzlu Yer Fıstığı", price: 235, category: "kuruyemis", image: "images/tek-fısici.jpg", description: "Sadece tek kavrulmuş tuzlu yer fıstığı, lezzetli ve sağlıklı.", weights: [1000, 750, 500, 250] },
    { id: 31, name: "Tuzlu Fındık içi", price: 775, category: "kuruyemis", image: "images/tuzlu-fındık.jpg", description: "Tuzlu fındık içi, gevrek ve doğal tatlar sunar.", weights: [1000, 750, 500, 250] },
    { id: 32, name: "Sultan Lokum", price: 225, category: "sekerleme", image: "images/sultan.jpg", description: "Sultan lokumu, enfes tatlı ve geleneksel bir Türk tatlısı.", weights: [1000, 750, 500, 250] },
    { id: 33, name: "Karışık Meyve Aromalı Kuş Lokumu", price: 150, category: "sekerleme", image: "images/karışık-meyve.jpg", description: "Farklı meyve aromalarıyla zenginleştirilmiş kuş lokumu.", weights: [1000, 750, 500, 250] },
    { id: 34, name: "Antep Fıstıklı Hünkar Lokum", price: 600, category: "sekerleme", image: "images/hünkar.jpg", description: "Antep fıstıklı hünkar lokumu, geleneksel ve lezzetli.", weights: [1000, 750, 500, 250] },
    { id: 35, name: "Sade Lokum", price: 125, category: "sekerleme", image: "images/sade.jpg", description: "Klasik sade lokum, geleneksel Türk tatlısı sevenler için.", weights: [1000, 750, 500, 250] },
    { id: 36, name: "Gül Aromalı Lokum", price: 125, category: "sekerleme", image: "images/güllü.jpg", description: "Gül aromalı lokum, hoş ve tatlı bir deneyim sunar.", weights: [1000, 750, 500, 250] },
    { id: 37, name: "Antep Fıstıklı Kuş Lokum", price: 300, category: "sekerleme", image: "images/fıslı-kuş-lokum.jpg", description: "Antep fıstıklı kuş lokumu, geleneksel tat ve zengin içerik.", weights: [1000, 750, 500, 250] },
    { id: 38, name: "Türk Kahvesi", price: 525, category: "kahve", image: "images/kahve.jpg", description: "Klasik Türk kahvesi, geleneksel tarifle hazırlanmış, yoğun ve zengin lezzet.", weights: [1000, 750, 500, 250] },
    { id: 39, name: "Çifte Kavrulmuş Türk Kahvesi", price: 570, category: "kahve", image: "images/çifte-kahve.jpg", description: "Özel olarak çifte kavrulmuş Türk kahvesi, ekstra lezzet ve derin aroma.", weights: [1000, 750, 500, 250] },

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
function filterProductsBySubcategory() {
    const urlParams = new URLSearchParams(window.location.search);
    const subcategory = urlParams.get('subcategory');

    if (subcategory) {
        const filteredProducts = products.filter(product => product.subcategory === subcategory);
        renderProducts(filteredProducts);
    } else {
        renderProducts(products); // Tüm ürünleri göster
    }
}

// Sayfa yüklendiğinde alt kategoriye göre filtrele
window.onload = filterProductsBySubcategory;

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
