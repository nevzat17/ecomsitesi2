// JavaScript'te interface tanımı yok, sadece nesneleri kullanıyoruz
let cart = [];

// DOM elemanlarını seçiyoruz
const cartItemsElement = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');

// DOM elemanlarının mevcut olup olmadığını kontrol ediyoruz
if (!cartItemsElement || !totalPriceElement) {
    console.error('Cart elements not found.');
    throw new Error('Cart elements not found.');
}

// Sepete ürün ekleme fonksiyonu
function addToCart(productName, productPrice) {
    // Sepette ürün olup olmadığını kontrol ediyoruz
    const item = cart.find(item => item.name === productName);
    if (item) {
        // Ürün varsa miktarını artırıyoruz
        item.quantity += 1;
    } else {
        // Ürün yoksa yeni bir ürün ekliyoruz
        cart.push({ name: productName, price: productPrice, quantity: 1 });
    }
    // Sepeti güncelliyoruz
    updateCart();
}

// Sepeti güncelleme fonksiyonu
function updateCart() {
    // DOM elemanlarının mevcut olup olmadığını tekrar kontrol ediyoruz
    if (!cartItemsElement || !totalPriceElement) {
        console.error('Cart elements not found.');
        return;
    }

    // Sepet öğelerini temizliyoruz
    cartItemsElement.innerHTML = '';
    let totalPrice = 0; // Toplam fiyatı sıfırlıyoruz

    // Sepetteki her ürünü işliyoruz
    cart.forEach(item => {
        const itemElement = document.createElement('li');
        itemElement.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
        cartItemsElement.appendChild(itemElement);
        totalPrice += item.price * item.quantity;
    });

    // Toplam fiyatı güncelliyoruz
    totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
}

// Sepete örnek ürün ekleme
addToCart('Sneaker', 50);
addToCart('Boots', 80);
