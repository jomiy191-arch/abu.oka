document.addEventListener("DOMContentLoaded", () => {
    const burger = document.getElementById("burger");
    const navList = document.querySelector(".header__list");

    // Burger menyu
    burger.onclick = () => {
        burger.classList.toggle("active");
        navList.classList.toggle("active");
    };

    // ===== HERO SLIDER =====
    const slides = document.querySelectorAll('.hero__image'); // rasm elementlari
    const dotsContainer = document.querySelector('.dots');   // dots container
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentSlide = 0;
    let slideInterval;

    // 1. Dotlarni yaratish
    slides.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if(i === 0) dot.classList.add('active-dot');
        dot.addEventListener('click', () => {
            showSlide(i);
            resetInterval();
        });
        dotsContainer.appendChild(dot);
    });

    function showSlide(index) {
        if(index >= slides.length) currentSlide = 0;
        else if(index < 0) currentSlide = slides.length - 1;
        else currentSlide = index;

        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            dotsContainer.children[i].classList.remove('active-dot');
        });

        slides[currentSlide].classList.add('active');
        dotsContainer.children[currentSlide].classList.add('active-dot');
    }

    function startInterval() {
        slideInterval = setInterval(() => {
            showSlide(currentSlide + 1);
        }, 3000); // 3 soniya
    }

    function resetInterval() {
        clearInterval(slideInterval);
        startInterval();
    }

    // 4. Prev / Next tugmalar
    if(prevBtn && nextBtn){
        prevBtn.addEventListener('click', () => { 
            showSlide(currentSlide - 1); 
            resetInterval(); 
        });
        nextBtn.addEventListener('click', () => { 
            showSlide(currentSlide + 1); 
            resetInterval(); 
        });
    }

    showSlide(currentSlide);
    startInterval();
});
document.addEventListener("DOMContentLoaded", () => {
    const products = [
        {category:'house', title:'Angel Wing Begonia', img:'images/gul1.svg', price:120},
        {category:'house', title:'African Violet', img:'images/gul2.svg', price:90},
        {category:'potter', title:'Bird\'s Nest Fern', img:'images/gul3.svg', price:50},
        {category:'small', title:'Chinese Evergreen', img:'images/gul4.svg', price:30},
        {category:'seeds', title:'Broadleaf Lady Palm', img:'images/gul5.svg', price:60},
        {category:'house', title:'Beach Spider Lily', img:'images/gul6.svg', price:80},
        {category:'house', title:'Beach Spider Lily', img:'images/rasm7.svg', price:80},
        {category:'house', title:'Beach Spider Lily', img:'images/rasm8.svg', price:80},
        {category:'house', title:'Beach Spider Lily', img:'images/rasm9.png', price:80},
    ];

    const productGrid = document.querySelector('.product-grid');

    function renderProducts(list) {
        productGrid.innerHTML = '';
        list.forEach(product => {
            const div = document.createElement('div');
            div.classList.add('product-card');
            div.dataset.category = product.category;
            div.style.backgroundImage = `url(${product.img})`;
            div.innerHTML = `<h4>${product.title}</h4><p>$${product.price}</p>`;
            productGrid.appendChild(div);
        });
    }

    renderProducts(products);

    // ===== Category Filter =====
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const cat = btn.dataset.category;
            const filtered = cat === 'all' ? products : products.filter(p => p.category === cat);
            renderProducts(filtered);
        });
    });

    // ===== Price Range =====
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
    const priceFilter = document.getElementById('priceFilter');

    priceRange.addEventListener('input', () => {
        priceValue.textContent = `$${priceRange.value}`;
    });

    priceFilter.addEventListener('click', () => {
        const maxPrice = parseInt(priceRange.value);
        const filtered = products.filter(p => p.price <= maxPrice);
        renderProducts(filtered);
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const blogPosts = [
        {
            img: "images/tuvak1.svg",
            date: "September 12",
            readTime: "6 minutes",
            title: "Cactus & Succulent Care Tips",
            description: "Cacti and succulents are easy care plants for beginners.",
            link: "#"
        },
        {
            img: "images/tuvak2.svg",
            date: "September 13",
            readTime: "2 minutes",
            title: "Top 10 Succulents for Your Home",
            description: "Best in hanging baskets. Prefers indirect light.",
            link: "#"
        },
        {
            img: "images/tuvak3.svg",
            date: "September 15",
            readTime: "3 minutes",
            title: "Cacti & Succulent Care Tips",
            description: "Cacti and succulents thrive in well-drained soil.",
            link: "#"
        },
        {
            img: "images/tuvak4.svg",
            date: "September 15",
            readTime: "2 minutes",
            title: "Best Houseplants Room By Room",
            description: "The benefits of houseplants are endless. In addition to beauty.",
            link: "#"
        },
    ];

    const blogGrid = document.querySelector(".blog__grid");

    blogPosts.forEach(post => {
        const div = document.createElement("div");
        div.classList.add("blog-card");

        // gradient overlay qo'shish uchun wrapper yaratish
        div.innerHTML = `
            <div class="blog-img-wrapper" style="position:relative; overflow:hidden; border-radius:12px;">
                <img src="${post.img}" alt="${post.title}">
                <div style="position:absolute; inset:0; background: linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0));"></div>
            </div>
            <div class="content">
                <small>${post.date} | Read in ${post.readTime}</small>
                <h4>${post.title}</h4>
                <p>${post.description}</p>
                <a href="${post.link}">Read More →</a>
            </div>
        `;

        blogGrid.appendChild(div);
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const burger = document.getElementById("burger");
    const navList = document.querySelector(".header__list");

    burger.onclick = () => {
        burger.classList.toggle("active");
        navList.classList.toggle("active");
    };
});
document.addEventListener("DOMContentLoaded", () => {
    const decreaseBtn = document.getElementById("decrease");
    const increaseBtn = document.getElementById("increase");
    const quantityInput = document.getElementById("quantity");
    const wishlistBtn = document.querySelector(".wishlist i");

    // Quantity increase / decrease
    decreaseBtn.addEventListener("click", () => {
        let value = parseInt(quantityInput.value);
        if (value > 1) quantityInput.value = value - 1;
    });

    increaseBtn.addEventListener("click", () => {
        let value = parseInt(quantityInput.value);
        quantityInput.value = value + 1;
    });

    // Wishlist toggle
    wishlistBtn.addEventListener("click", () => {
        wishlistBtn.classList.toggle("fas"); // solid heart
        wishlistBtn.classList.toggle("far"); // regular heart
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const mainImage = document.getElementById("currentImage");
    const thumbnails = document.querySelectorAll(".thumbnails img");

    thumbnails.forEach(thumb => {
        thumb.addEventListener("click", () => {
            // Asosiy rasmni o'zgartirish
            mainImage.src = thumb.src;

            // Active class boshqalaridan olib tashlash
            thumbnails.forEach(t => t.classList.remove("active"));
            thumb.classList.add("active");
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab-buttons li");
    const contents = document.querySelectorAll(".tab-content .tab");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const target = tab.dataset.tab;

            // Active classlarni tozalash
            tabs.forEach(t => t.classList.remove("active"));
            contents.forEach(c => c.classList.remove("active"));

            // Yangi active qo‘yish
            tab.classList.add("active");
            document.getElementById(target).classList.add("active");
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const galleryImages = document.querySelector(".gallery-images");
    const pageButtons = document.querySelectorAll(".page-btn");

    let imagesUrl = [
        "images/bos1.svg","images/bos2.svg","images/bos3.svg","images/slider2.svg",
        "images/gul2.svg","images/gul1.svg","images/gul4.svg","images/gul5.svg",
        "images/gul6.svg","images/tuvak1.svg","images/tuvak2.svg","images/tuvak3.svg",
        "images/tuvak4.svg","images/slider1.svg","images/slider2.svg"
    ];

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    imagesUrl = shuffle(imagesUrl);

    const imagesPerPage = 5;

    function renderPage(page) {
        galleryImages.innerHTML = "";
        const start = (page - 1) * imagesPerPage;
        const end = start + imagesPerPage;
        imagesUrl.slice(start, end).forEach(src => {
            const img = document.createElement("img");
            img.src = src;
            galleryImages.appendChild(img);
        });

        pageButtons.forEach(btn => btn.classList.remove("active"));
        pageButtons[page - 1].classList.add("active");
    }

    renderPage(1);

    pageButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const page = parseInt(btn.dataset.page);
            renderPage(page);
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {

    const buyButtons = document.querySelectorAll(".buy-now");

    buyButtons.forEach(button => {
        button.addEventListener("click", () => {

            window.location.href = "buy.html";
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const decreaseBtn = document.getElementById("decrease");
    const increaseBtn = document.getElementById("increase");
    const quantityInput = document.getElementById("quantity");
    const totalPriceSpan = document.getElementById("totalPrice");

    // Mahsulot asl narxi
    const price = parseFloat(document.getElementById("productPrice").innerText);

    // Dastlabki quantity va total
    let quantity = 1;
    quantityInput.value = quantity;
    totalPriceSpan.innerText = price.toFixed(2);

    // - tugma
    decreaseBtn.addEventListener("click", () => {
        if(quantity > 1){
            quantity--;
            quantityInput.value = quantity;
            totalPriceSpan.innerText = (price * quantity).toFixed(2);
        }
    });

    // + tugma
    increaseBtn.addEventListener("click", () => {
        quantity++;
        quantityInput.value = quantity;
        totalPriceSpan.innerText = (price * quantity).toFixed(2);
    });
});
    