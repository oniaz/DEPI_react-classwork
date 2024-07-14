let products = [
    { brand: "TrendWear", title: "Casual Shirt", description: "Floral print. Comfortable casual shirt for everyday wear.", price: "250", image: "./images/floral_shirt.jpg" },
    { brand: "TrendWear", title: "Casual Shirt", description: "Lemon Print. Comfortable casual shirt for everyday wear.", price: "250", image: "./images/lemon_shirt.jpg" },
    { brand: "TrendWear", title: "Casual Shirt", description: "Stripes Print. Comfortable casual shirt for everyday wear.", price: "250", image: "./images/stripes_shirt.jpg" },
    { brand: "EliteFashion", title: "Formal Pants", description: "Elegant formal pants for office and events.", price: "450", image: "./images/formal_pants.jpg" },
    { brand: "StyleHub", title: "Graphic Tee", description: "Trendy graphic tee with unique designs.", price: "150", image: "./images/tshirt.jpg" },
    { brand: "UrbanEdge", title: "Denim Jacket", description: "Stylish denim jacket for a cool look.", price: "600", image: "./images/denim_jacket.jpg" },
    { brand: "Fashionista", title: "Voyou Dress", description: "Crepe and satin dress.", price: "350", image: "./images/dress.jpg" },
    { brand: "CozyWear", title: "Hoodie", description: "Soft and warm hoodie for chilly days.", price: "400", image: "./images/hoodie.jpg" },
    { brand: "FitGear", title: "Running Shoes", description: "High-performance running shoes for all terrains.", price: "700", image: "./images/shoes.jpg" },
    { brand: "ChicStyle", title: "Leather Belt", description: "Sleek leather belt to complement your outfits.", price: "200", image: "./images/belt.jpg" },
    { brand: "WinterWarm", title: "Wool Scarf", description: "Cozy wool scarf to keep you warm in winter.", price: "300", image: "./images/scarf.jpg" },
    { brand: "Glamour", title: "Evening Gown", description: "Elegant evening gown for special occasions.", price: "1500", image: "./images/gown.jpg" },
];


let root = document.getElementById("pro-card")

for (let i = 0; i < products.length; i++) {
    root.innerHTML += `
    <div class="card">
        <img src="${products[i].image}" alt="">
        <span>${products[i].brand}</span>
        <h1>${products[i].title}</h1>
        <p>${products[i].description}</p>
        <div class="price">
            <h4>${products[i].price} <span>EGP</span></h4>
                <button>add to cart</button>
        </div>
    </div>`
}

document.getElementById('search-button').addEventListener('click', function () {
    root.innerHTML = ''
    let query = document.getElementById('search-input').value;
    if (query)
        console.log(query);

    for (let i = 0; i < products.length; i++) {
        if (products[i].title.includes(query) || products[i].description.includes(query)) {
            root.innerHTML +=
                `<div class="card">
                    <img src="${products[i].image}" alt="">
                    <span>${products[i].brand}</span>
                    <h1>${products[i].title}</h1>
                    <p>${products[i].description}</p>
                    <div class="price">
                        <h4>${products[i].price} <span>EGP</span></h4>
                        <button>add to cart</button>
                    </div>
                </div>`
        }
    }

    if (root.innerHTML == '') {
        root.innerHTML +=
            `<h1>No results found</h1>`
    }
})

document.getElementById('price-search-button').addEventListener('click', function () {
    let max_price = Number(document.getElementById('price-search-input').value);
    if (max_price == 0) {
        return;
    }
    root.innerHTML = ''
    // max_price = parseInt(max_price)
    console.log(max_price);
    console.log(typeof (max_price));

    for (let i = 0; i < products.length; i++) {
        if (products[i].price <= max_price) {
            root.innerHTML +=
                `<div class="card">
                    <img src="${products[i].image}" alt="">
                    <span>${products[i].brand}</span>
                    <h1>${products[i].title}</h1>
                    <p>${products[i].description}</p>
                    <div class="price">
                        <h4>${products[i].price} <span>EGP</span></h4>
                        <button>add to cart</button>
                    </div>
                </div>`
        }
    }

    if (root.innerHTML == '') {
        root.innerHTML +=
            `<h1>No results found</h1>`
    }
})