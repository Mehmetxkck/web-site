// Dinamik Bölüm Gösterme
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.add('hidden'));
    document.getElementById(sectionId).classList.remove('hidden');
}

// Ürün Ekleme
function showAddProductForm() {
    document.getElementById('add-product-form').classList.toggle('hidden');
}

function addProduct() {
    const name = document.getElementById('product-name').value;
    const price = document.getElementById('product-price').value;
    const stock = document.getElementById('product-stock').value;

    // Ürün Ekleme Mantığı
    const productList = document.getElementById('product-list');
    const productHTML = `<p>${name} - ${price} TL - Stok: ${stock}</p>`;
    productList.innerHTML += productHTML;
}

// Kupon Ekleme
function showAddCouponForm() {
    document.getElementById('add-coupon-form').classList.toggle('hidden');
}

function addCoupon() {
    const code = document.getElementById('coupon-code').value;
    const discount = document.getElementById('discount').value;

    // Kupon Ekleme Mantığı
    const couponList = document.getElementById('coupon-list');
    const couponHTML = `<p>Kod: ${code} - İndirim: ${discount}%</p>`;
    couponList.innerHTML += couponHTML;
}
