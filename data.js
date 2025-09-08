// داده‌های دسته‌بندی‌ها با شناسه منحصر به فرد
const categories = [
    { id: 520, name: "نوشیدنی" },
    { id: 580, name: "کیک" },
    { id: 530, name: "کلچه" }
];

// داده‌های محصولات
const allProducts = [
    {
        id: "cake-001",
        name: "کیک ککویی",
        price: "500",
        categoryId: 580, // شناسه دسته‌بندی کیک
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwa90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1089&q=80",
        details: {
            title: "جزئیات کیک ککویی",
            content: `
                <p>این کیک ککویی با بهترین مواد اولیه و بدون هیچ گونه مواد نگهدارنده تهیه شده است. از ویژگی‌های این محصول:</p>
                <ul>
                    <li>حاوی ککو مرغوب بلژیکی</li>
                    <li>فاقد مواد نگهدارنده</li>
                    <li>مناسب برای افراد دیابتی (نسخه بدون قند)</li>
                    <li>حجم: ۱ کیلوگرم</li>
                    <li>ماندگاری: ۵ روز در یخچال</li>
                </ul>
            `
        }
    },
    {
        id: "bread-001",
        name: "کلچه با طعم قهوه",
        price: "300",
        categoryId: 530, // شناسه دسته‌بندی کلچه
        image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
        details: {
            title: "جزئیات کلچه با طعم قهوه",
            content: `
                <p>کلچه با طعم قهوه تازه پخته شده با روش سنتی و مواد اولیه مرغوب. از ویژگی‌های این محصول:</p>
                <ul>
                    <li>تهیه شده از آرد ستاره</li>
                    <li>فاقد هرگونه قند شیرین</li>
                    <li>حاوی شیر تازه</li>
                    <li>تازه پخته شده روزانه</li>
                    <li>مصرف بهتر: همان روز تولید</li>
                </ul>
            `
        }
    },
    {
        id: "sweet-001",
        name: "کیک خامه خوشک",
        price: "400",
        categoryId: 580, // شناسه دسته‌بندی کیک
        image: "https://images.unsplash.com/photo-1612203985729-70726954388c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
        details: {
            title: "جزئیات کیک خامه خشک",
            content: `
                <p>کیک خامه سنتی با طعمی بی‌نظیر و کیفیت بالا. از ویژگی‌های این محصول:</p>
                <ul>
                    <li>انواع مختلف: بادامی، نارگیلی، پستهای</li>
                    <li>تهیه شده با بهترین مواد اولیه</li>
                    <li>فاقد روغن نباتی</li>
                    <li>بسته‌بندی شکیل و مناسب برای سوغات</li>
                    <li>ماندگاری: ۳۰ روز در دمای محیط</li>
                </ul>
            `
        }
    },
    {
        id: "tea-001",
        name: "چای مخصوص",
        price: "350",
        categoryId: 520, // شناسه دسته‌بندی نوشیدنی
        image: "https://images.unsplash.com/photo-1563822245302-272c9e0e71e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        details: {
            title: "جزئیات چای مخصوص",
            content: `
                <p>چای مخصوص با ترکیبی منحصر به فرد من از بهترین برگ‌های چای و گیاهان معطر. از ویژگی‌های این محصول:</p>
                <ul>
                    <li>ترکیبی من از چای سیاه مرغوب و گیاهان معطر</li>
                    <li>عاری از هرگونه اسانس مصنوعی</li>
                    <li>مناسب برای مصرف روزانه</li>
                    <li>بسته‌بندی نفوذناپذیر برای حفظ عطر و طعم</li>
                    <li>وزن خالص: ۴۵۰ گرام</li>
                </ul>
            `
        }
    }
];

// تابع فیلتر کردن محصولات بر اساس دسته‌بندی - نسخه اصلاح شده
function filterProductsByCategory(categoryId) {
    const productCards = document.querySelectorAll('.product-card');
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    productCards.forEach(card => {
        const productCategoryId = card.dataset.categoryId;
        const productName = card.dataset.name.toLowerCase();
        
        // اعمال فیلتر دسته‌بندی و جستجو همزمان
        const categoryMatch = categoryId === 'all' || parseInt(productCategoryId) === categoryId;
        const searchMatch = searchTerm === '' || productName.includes(searchTerm);
        
        if (categoryMatch && searchMatch) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

// تابع برای فیلتر کردن محصولات بر اساس جستجو - نسخه اصلاح شده
function filterProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const productCards = document.querySelectorAll('.product-card');
    const currentCategory = document.querySelector('.categories-list li.active')?.dataset.categoryId || 'all';
    
    productCards.forEach(card => {
        const productName = card.dataset.name.toLowerCase();
        const productCategoryId = card.dataset.categoryId;
        
        // اعمال فیلتر جستجو و دسته‌بندی همزمان
        const searchMatch = productName.includes(searchTerm);
        const categoryMatch = currentCategory === 'all' || parseInt(productCategoryId) === parseInt(currentCategory);
        
        if (searchMatch && categoryMatch) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

// در تابع populateCategories، یک کلاس active برای دسته‌بندی انتخاب شده اضافه کنید
function populateCategories() {
    const categoriesList = document.getElementById('categoriesList');
    categoriesList.innerHTML = ''; // پاک کردن لیست قبل از پر کردن مجدد
    
    // اضافه کردن دسته‌بندی "همه"
    const allItem = document.createElement('li');
    allItem.textContent = 'همه محصولات';
    allItem.dataset.categoryId = 'all';
    allItem.classList.add('active'); // فعال کردن پیش‌فرض
    allItem.addEventListener('click', function() {
        // حذف کلاس active از همه آیتم‌ها
        document.querySelectorAll('.categories-list li').forEach(li => {
            li.classList.remove('active');
        });
        // اضافه کردن کلاس active به آیتم انتخاب شده
        this.classList.add('active');
        
        filterProductsByCategory('all');
        closeCategories();
    });
    categoriesList.appendChild(allItem);
    
    // اضافه کردن هر دسته‌بندی
    categories.forEach(category => {
        const li = document.createElement('li');
        li.textContent = category.name;
        li.dataset.categoryId = category.id;
        li.addEventListener('click', function() {
            // حذف کلاس active از همه آیتم‌ها
            document.querySelectorAll('.categories-list li').forEach(li => {
                li.classList.remove('active');
            });
            // اضافه کردن کلاس active به آیتم انتخاب شده
            this.classList.add('active');
            
            filterProductsByCategory(category.id);
            closeCategories();
        });
        categoriesList.appendChild(li);
    });
}

// تابع برای بستن منوی دسته‌بندی‌ها
function closeCategories() {
    document.getElementById('categoriesSidebar').classList.remove('open');
    document.getElementById('categoriesOverlay').style.display = 'none';
}

// تابع برای باز کردن منوی دسته‌بندی‌ها
function openCategories() {
    document.getElementById('categoriesSidebar').classList.add('open');
    document.getElementById('categoriesOverlay').style.display = 'block';
}

// تابع برای نمایش محصولات
function renderProducts() {
    const container = document.getElementById('products-container');
    const productTemplate = document.getElementById('product-template');
    const detailsTemplate = document.getElementById('details-template');
    
    // پاک کردن محتوای قبلی
    container.innerHTML = '';
    document.querySelectorAll('.product-details:not(#details-template)').forEach(el => el.remove());
    
    // ساخت محصولات
    allProducts.forEach(product => {
        // ساخت کارت محصول
        const productCard = productTemplate.cloneNode(true);
        productCard.style.display = 'block';
        productCard.removeAttribute('id');
        productCard.dataset.name = product.name;
        productCard.dataset.categoryId = product.categoryId;
        productCard.dataset.id = product.id;
        
        // پر کردن اطلاعات
        productCard.querySelector('.product-image').style.backgroundImage = `url('${product.image}')`;
        productCard.querySelector('.product-title').textContent = product.name;
        productCard.querySelector('.product-price').textContent = `${product.price} افغانی`;
        
        // تنظیم دکمه‌ها
        const addBtn = productCard.querySelector('.add-to-cart');
        addBtn.dataset.id = product.id;
        addBtn.dataset.name = product.name;
        addBtn.dataset.price = product.price;
        
        const detailsBtn = productCard.querySelector('.details-btn');
        detailsBtn.dataset.details = `details-${product.id}`;
        
        // اضافه به صفحه
        container.appendChild(productCard);
        
        // ساخت جزئیات محصول
        const detailsElement = detailsTemplate.cloneNode(true);
        detailsElement.style.display = 'none';
        detailsElement.id = `details-${product.id}`;
        detailsElement.querySelector('.details-title').textContent = product.details.title;
        detailsElement.querySelector('.product-details-content').innerHTML = product.details.content;
        
        document.body.appendChild(detailsElement);
    });
    
    // اضافه کردن event listeners
    attachEventListeners();
}

// تابع برای اضافه کردن event listeners به محصولات
function attachEventListeners() {
    // اضافه کردن event listeners به دکمه‌های جدید
    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', function() {
            addToCart(
                this.dataset.name, 
                parseInt(this.dataset.price), 
                this.dataset.id
            );
        });
    });
    
    document.querySelectorAll('.details-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            showProductDetails(this.dataset.details);
        });
    });
    
    document.querySelectorAll('.close-details').forEach(btn => {
        btn.addEventListener('click', closeProductDetails);
    });
}

// نمایش جزئیات محصول
function showProductDetails(detailsId) {
    const detailsElement = document.getElementById(detailsId);
    const overlay = document.getElementById('detailsOverlay');
    
    if (detailsElement) {
        detailsElement.style.display = 'block';
        overlay.style.display = 'block';
    }
}

// بستن جزئیات محصول
function closeProductDetails() {
    const detailsElements = document.querySelectorAll('.product-details');
    const overlay = document.getElementById('detailsOverlay');
    
    detailsElements.forEach(element => {
        element.style.display = 'none';
    });
    
    overlay.style.display = 'none';
}

// نمایش نوتیفیکیشن
function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// تابع برای افزودن محصول به سبد خرید
function addToCart(name, price, id) {
    // بررسی آیا محصول از قبل در سبد وجود دارد
    const existingItemIndex = cart.findIndex(item => item.id === id);
    
    if (existingItemIndex !== -1) {
        // اگر محصول وجود دارد، تعداد را افزایش می‌دهیم
        cart[existingItemIndex].quantity += 1;
    } else {
        // اگر محصول وجود ندارد، جدید اضافه می‌کنیم
        cart.push({ id, name, price, quantity: 1 });
    }
    
    updateCart();
    
    // نمایش نوتیفیکیشن به جای alert
    showNotification(`${name} به سبد خرید اضافه شد!`);
    
    // انیمیشن سبد خرید
    animateCart();
}

// تابع برای به‌روزرسانی سبد خرید
function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    const cartCount = document.getElementById('cartCount');
    
    cartItems.innerHTML = '';
    let total = 0;
    let count = 0;
    
    cart.forEach(item => {
        total += item.price * item.quantity;
        count += item.quantity;
        
        const cartItemElement = document.createElement('div');
        cartItemElement.className = 'cart-item';
        cartItemElement.innerHTML = `
            <div class="cart-item-info">
                <div>${item.name}</div>
                <div>${item.price} افغانی</div>
            </div>
            <div class="cart-item-controls">
                <button class="cancel-item" data-id="${item.id}">لغو</button>
                <button class="quantity-btn" data-id="${item.id}" data-action="decrease">-</button>
                <span class="item-quantity">${item.quantity}</span>
                <button class="quantity-btn" data-id="${item.id}" data-action="increase">+</button>
            </div>
        `;
        
        // اضافه کردن event listener برای دکمه‌های افزایش و کاهش
        const increaseBtn = cartItemElement.querySelector('[data-action="increase"]');
        const decreaseBtn = cartItemElement.querySelector('[data-action="decrease"]');
        const cancelBtn = cartItemElement.querySelector('.cancel-item');
        
        increaseBtn.addEventListener('click', function() {
            const itemId = this.getAttribute('data-id');
            increaseQuantity(itemId);
        });
        
        decreaseBtn.addEventListener('click', function() {
            const itemId = this.getAttribute('data-id');
            decreaseQuantity(itemId);
        });
        
        cancelBtn.addEventListener('click', function() {
            const itemId = this.getAttribute('data-id');
            removeItemFromCart(itemId);
        });
        
        cartItems.appendChild(cartItemElement);
    });
    
    cartTotal.textContent = `مجموع: ${total} افغانی`;
    cartCount.textContent = count;
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p>سبد خرید شما خالی است</p>';
    }
}

// سایر توابع مربوط به سبد خرید
function increaseQuantity(id) {
    const itemIndex = cart.findIndex(item => item.id === id);
    if (itemIndex !== -1) {
        cart[itemIndex].quantity += 1;
        updateCart();
    }
}

function decreaseQuantity(id) {
    const itemIndex = cart.findIndex(item => item.id === id);
    if (itemIndex !== -1) {
        if (cart[itemIndex].quantity > 1) {
            cart[itemIndex].quantity -= 1;
        } else {
            // اگر تعداد ۱ است، حذف می‌کنیم
            removeItemFromCart(id);
        }
        updateCart();
    }
}

function removeItemFromCart(id) {
    const itemIndex = cart.findIndex(item => item.id === id);
    if (itemIndex !== -1) {
        cart.splice(itemIndex, 1);
        updateCart();
    }
}

function animateCart() {
    const cartButton = document.getElementById('cartButton');
    cartButton.classList.remove('bounce');
    void cartButton.offsetWidth; // Trigger reflow
    cartButton.classList.add('bounce');
}

// مدیریت سبد خرید
let cart = [];

// صبر می‌کنیم تا DOM کاملاً لود شود
document.addEventListener('DOMContentLoaded', function() {
    // مقداردهی اولیه
    renderProducts();
    populateCategories();
    updateCart();
    
    // مدیریت جستجو
    document.getElementById('searchInput').addEventListener('input', filterProducts);
    
    // سایر event listenerها
    document.getElementById('cartButton').addEventListener('click', openCart);
    document.getElementById('cartOverlay').addEventListener('click', closeCart);
    document.getElementById('closeCart').addEventListener('click', closeCart);
    document.getElementById('checkoutButton').addEventListener('click', showOrderForm);
    
    // مدیریت چت
    document.getElementById('chatButton').addEventListener('click', toggleChatOptions);
    document.getElementById('callOption').addEventListener('click', makeCall);
    document.getElementById('chatOption').addEventListener('click', startChat);
    
    // مدیریت منو و دسته‌بندی‌ها
    document.getElementById('menuToggle').addEventListener('click', openCategories);
    document.getElementById('categoriesOverlay').addEventListener('click', closeCategories);
    document.getElementById('closeCategories').addEventListener('click', closeCategories);
    
    // بستن منوهای باز وقتی کاربر در خارج از آنها کلیک می‌کند
    document.addEventListener('click', function(event) {
        const chatOptions = document.getElementById('chatOptions');
        const chatButton = document.getElementById('chatButton');
        
        if (chatOptions.style.display === 'flex' && !chatOptions.contains(event.target) && !chatButton.contains(event.target)) {
            chatOptions.style.display = 'none';
        }
    });
});
