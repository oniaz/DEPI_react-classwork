var products = [
    { brand: "TrendWear", title: "Casual Shirt", description: "Comfortable casual shirt for everyday wear.", price: "25" },
    { brand: "EliteFashion", title: "Formal Pants", description: "Elegant formal pants for office and events.", price: "45" },
    { brand: "StyleHub", title: "Graphic Tee", description: "Trendy graphic tee with unique designs.", price: "15" },
    { brand: "UrbanEdge", title: "Denim Jacket", description: "Stylish denim jacket for a cool look.", price: "60" },
    { brand: "Fashionista", title: "Summer Dress", description: "Light and breezy dress for summer outings.", price: "35" },
    { brand: "CozyWear", title: "Hoodie", description: "Soft and warm hoodie for chilly days.", price: "40" },
    { brand: "FitGear", title: "Running Shoes", description: "High-performance running shoes for all terrains.", price: "70" },
    { brand: "ChicStyle", title: "Leather Belt", description: "Sleek leather belt to complement your outfits.", price: "20" },
    { brand: "WinterWarm", title: "Wool Scarf", description: "Cozy wool scarf to keep you warm in winter.", price: "30" },
    { brand: "Glamour", title: "Evening Gown", description: "Elegant evening gown for special occasions.", price: "150" },
];


var root = document.getElementById("pro-card")

for (let i = 0; i < products.length; i++) {
    root.innerHTML += `
    <div class="card">
        <img src="poster.jpeg" alt="">
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
    var query = document.getElementById('search-input').value;
    console.log(query);

    for (let i = 0; i < products.length; i++) {
        if (products[i].title.includes(query) || products[i].description.includes(query)) {
            root.innerHTML +=
                `<div class="card">
                    <img src="poster.jpeg" alt="">
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
