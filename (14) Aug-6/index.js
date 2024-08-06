// let products = [
//     { id: 1, brand: "TrendWear", title: "Casual Shirt", description: "Floral print. Comfortable casual shirt for everyday wear.", price: "250", image: "./images/floral_shirt.jpg" },
//     { id: 2, brand: "TrendWear", title: "Casual Shirt", description: "Lemon Print. Comfortable casual shirt for everyday wear.", price: "250", image: "./images/lemon_shirt.jpg" },
//     { id: 3, brand: "TrendWear", title: "Casual Shirt", description: "Stripes Print. Comfortable casual shirt for everyday wear.", price: "250", image: "./images/stripes_shirt.jpg" },
//     { id: 4, brand: "EliteFashion", title: "Formal Pants", description: "Elegant formal pants for office and events.", price: "450", image: "./images/formal_pants.jpg" },
//     { id: 5, brand: "StyleHub", title: "Graphic Tee", description: "Trendy graphic tee with unique designs.", price: "150", image: "./images/tshirt.jpg" },
//     { id: 6, brand: "UrbanEdge", title: "Denim Jacket", description: "Stylish denim jacket for a cool look.", price: "600", image: "./images/denim_jacket.jpg" },
//     { id: 7, brand: "Fashionista", title: "Voyou Dress", description: "Crepe and satin dress.", price: "350", image: "./images/dress.jpg" },
//     { id: 8, brand: "CozyWear", title: "Hoodie", description: "Soft and warm hoodie for chilly days.", price: "400", image: "./images/hoodie.jpg" },
//     { id: 9, brand: "FitGear", title: "Running Shoes", description: "High-performance running shoes for all terrains.", price: "700", image: "./images/shoes.jpg" },
//     { id: 10, brand: "ChicStyle", title: "Leather Belt", description: "Sleek leather belt to complement your outfits.", price: "200", image: "./images/belt.jpg" },
//     { id: 11, brand: "WinterWarm", title: "Wool Scarf", description: "Cozy wool scarf to keep you warm in winter.", price: "300", image: "./images/scarf.jpg" },
//     { id: 12, brand: "Glamour", title: "Evening Gown", description: "Elegant evening gown for special occasions.", price: "1500", image: "./images/gown.jpg" },
// ];

// let users = [
//     { email: "admin@gmail.com", password: "12345678", admin: true },
//     { email: "user@gmail.com", password: "11223344", admin: false }
// ];

let cart = [];

let currentUser;

let loggedIn = false;

function dummyAdminLogin() {
    currentUser = { email: "admin@gmail.com", password: "12345678", admin: true },
        toggleLoginLogout();
    renderShop();
}

function dummyUserLogin() {
    currentUser = { email: "user@gmail.com", password: "11223344", admin: false };
    toggleLoginLogout();
    renderShop();
}

document.addEventListener('DOMContentLoaded', (event) => {
    dummyAdminLogin();
    // dummyUserLogin();
    renderShop();
});

async function fetchAllProducts() {
    const url = `http://localhost:8000/products`;

    return fetch(url)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
            return (data);
        });
}

async function fetchProductById(id) {
    const url = `http://localhost:8000/products/${id}`;

    return fetch(url)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
            return (data);
        });
}

async function fetchbyQuery(endpoint, property, value) {
    const url = `http://localhost:8000/${endpoint}/?${property}=${value}`;

    return fetch(url)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
            return (data);
        });
}

function addItem(event) {
    event.preventDefault();
    const itemTitle = document.getElementById("item-title").value
    const itemBrand = document.getElementById("item-brand").value
    const itemDescription = document.getElementById("item-description").value
    const itemPrice = document.getElementById("item-price").value

    if (!(itemTitle && itemBrand && itemDescription && itemPrice)) {
        return;
    }

    let item = {
        // id: (products.length) + 1,
        brand: itemBrand,
        title: itemTitle,
        description: itemDescription,
        price: itemPrice,
        image: "./images/noimage.png"
    }
    item = JSON.stringify(item);

    const url = `http://localhost:8000/products/`;

    return fetch(url, {
        method: 'POST',
        headers: {
            'content-type': "application/json"
        },
        body: item
    })
        .then((res) => {
            alert("Item added successfully!");
        })
}

function signup(event) {
    event.preventDefault();
    userEmail = document.getElementById("user-email").value;
    userPassword = document.getElementById("user-password").value;
    if (!(userEmail && userPassword && userPassword.length > 7)) {
        return
    }

    fetchbyQuery('users', 'email', userEmail).then((users) => {
        if (users[0]) {
            alert("user already exists")
            console.log("user already exists, please login");
            return;
        }
    })

    let user = { email: userEmail, password: userPassword, admin: false }

    user = JSON.stringify(user);

    const url = `http://localhost:8000/users/`;

    return fetch(url, {
        method: 'POST',
        headers: {
            'content-type': "application/json"
        },
        body: user
    })
        .then((res) => {
            alert("User created successfully!");
        })
}

function login(event) {
    event.preventDefault();
    userEmail = document.getElementById("user-email").value;
    userPassword = document.getElementById("user-password").value;

    if (!(userEmail && userPassword && userPassword.length > 7)) {
        return
    }
    console.log(typeof (userPassword));
    fetchbyQuery('users', 'email', userEmail).then((users) => {
        if (users[0]) {
            if (users[0].password === userPassword) {
                console.log("correct password");
                currentUser = users[0];
                console.log("Current User:", currentUser);
                toggleLoginLogout();
                renderShop();
            } else {
                alert("wrong credentials");
            }
        } else {
            alert("user doesn't exist, please signup");
        }
    })
}

function deleteProduct(id) {
    const url = `http://localhost:8000/products/${id}`;
    return fetch(url, { method: 'DELETE' })
        .then((res) => {
            renderShop();
        })
}

function renderDetails(id) {
    const root = document.getElementById("root");
    root.innerHTML = ""

    fetchProductById(id)
        .then((products) => {
            root.innerHTML +=
                `<div class="card" id="card-${products.id}">
                    <img src="${products.image}" alt="">
                    <span>${products.brand}</span>
                    <h1>${products.title}</h1>
                    <p>${products.description}</p>
                    <div class="price">
                        <h4>${products.price} <span>EGP</span></h4>
                        <button onclick="addToCart(${products.id})">add to cart</button>
                    </div>
                </div>`
        });
}

function renderCart() {
    console.log(cart);

    const root = document.getElementById("root");

    root.innerHTML = ""
    if (cart.length == 0) {
        showMessage(
            {
                heading: "Your Cart is Empty",
                paragraph: "It looks like you don’t have any items in your cart. Start adding items to begin shopping!"
            },
            "root"
        );
        return;
    }

    const proCard = document.createElement('div');
    proCard.id = 'pro-card';
    root.appendChild(proCard);

    fetchAllProducts().then((products) => {
        for (let i = 0; i < cart.length; i++) {
            let item = products.find(item => item.id === cart[i].id);
            proCard.innerHTML +=
                `<div class="card" id="card-${item.id}">
                    <img src="${item.image}" alt="">
                    <span>${item.brand}</span>
                    <h1>${item.title}</h1>
                    <p>${item.description}</p>
                    <div class="price">
                        <h4>${item.price} <span>EGP</span></h4>
                        <button id="remove-button" onclick="removeFromCart('${item.id}')">Remove</button>
                    </div>
                    <div class="items-count">
                        <h4 id="count-${item.id}">${cart[i].count} <span>items</span></h4>
                        <button id="decrement-item" onclick="decrementCartItem('${cart[i].id}')">-</button>
                        <button id="increment-item" onclick="incrementCartItem('${cart[i].id}')">+</button>
                    </div>
                </div>`;
        }
    })
}

function addToCart(id) {
    console.log(typeof (id));
    console.log("ID of Item added:", id);
    const existingItem = cart.find(item => item.id === id);
    if (existingItem) {
        existingItem.count += 1;
    } else {
        cart.push({ id: id, count: 1 });
    }
    alert("Added item to cart successfully")
}

function removeFromCart(id) {
    const card = document.getElementById(`card-${id}`)
    console.log(`card-${id}`);
    console.log("ID of Item to be removed:", id);
    console.log("Cart before removal:", cart);
    cart = cart.filter(item => item.id !== id);
    console.log("Cart after removal:", cart);
    card.remove();
    if (cart.length === 0) {
        showMessage(
            {
                heading: "Your Cart is Empty",
                paragraph: "It looks like you don’t have any items in your cart. Start adding items to begin shopping!"
            },
            "root"
        );
    }
    alert("Removed item from cart successfully");
}

function decrementCartItem(id) {
    const cardElement = document.getElementById(`card-${id}`)
    const countsElement = document.getElementById(`count-${id}`)
    console.log(id);
    existingItem = cart.find(item => item.id == id);
    console.log('count: ', existingItem.count, "type: ", typeof (existingItem.count));
    if (existingItem.count == 1) {
        cart = cart.filter(item => item.id !== id);
        cardElement.remove();
        if (cart.length === 0) {
            showMessage(
                {
                    heading: "Your Cart is Empty",
                    paragraph: "It looks like you don’t have any items in your cart. Start adding items to begin shopping!"
                },
                "root"
            );
        }
    } else {
        existingItem.count -= 1;
        countsElement.innerHTML = existingItem.count + ' <span>items</span>';
    }
    console.log('after dec', cart);
}

function incrementCartItem(id) {
    // const card = document.getElementById(`card-${id}`)
    const countsElement = document.getElementById(`count-${id}`)

    existingItem = cart.find(item => item.id == id);
    existingItem.count += 1;
    countsElement.innerHTML = existingItem.count + ' <span>items</span>';
    console.log('after inc', cart);
}

function renderAddItem() {
    const root = document.getElementById("root")
    root.innerHTML =
        `
    <div class="login-signin">
        <form class="form" onsubmit = "addItem(event)">
            <p class="form-title">Add items to the shop</p>
            <div class="input-container">
                <input id="item-title" placeholder="Enter item title" required>
            </div>

            <div class="input-container">
                <input id="item-brand" placeholder="Enter item brand" required>
            </div>

            <div class="input-container">
                <input id="item-description" placeholder="Enter item description" required>
            </div>

            <div class="input-container">
                <input id="item-price" type="number" placeholder="Enter item price" required>
            </div>

            <input type="submit" class="submit" value="add item">
        </form>
    </div>
    `
}

function renderLogin() {
    const root = document.getElementById("root")
    root.innerHTML =
        `
        <div class="login-signin">
            <form class="form" onsubmit="login(event)">
            <p class="form-title">Sign in to your account</p>
                <div class="input-container">
                <input id = "user-email" type="email" placeholder="Enter email" required>
                <span></span>
            </div>
            <div class="input-container">
                <input id = "user-password" type="password" placeholder="Enter password" minlength="8" required>
                <span></span>
            </div>
                <input type="submit" class="submit" value="Sign in">
                <p class="signup-link">
                No account?
                    <a href="#" onclick="renderSignup()">Sign up</a>
                </p>
            </form>
        </div>
        `
}

function renderSignup() {
    const root = document.getElementById("root")
    root.innerHTML =
        `
        <div class="login-signin">
            <form class="form" onsubmit = "signup(event)">
                <p class="form-title">Create an account</p>
                <div class="input-container">
                    <input id = "user-email" type="email" placeholder="Enter email" required>
                    <span>
                    </span>
                </div>

                <div class="input-container">
                    <input id = "user-password" type="password" placeholder="Enter password" minlength="8" required>
                    <span></span>
                </div>

                <input type="submit" class="submit" value= "Sign up">
            </form>
        </div>
        `
}

// function login(event) {
//     event.preventDefault();
//     userEmail = document.getElementById("user-email").value;
//     userPassword = document.getElementById("user-password").value;
//     if (!(userEmail && userPassword && userPassword.length > 7)) {
//         return
//     }

//     const user = users.find(user => user.email === userEmail);

//     if (user) {
//         console.log("user email exists")
//         if (user.password === userPassword) {
//             console.log("correct password")
//             currentUser = user;
//             console.log("Current User:", currentUser);
//             toggleLoginLogout();
//             renderShop();
//         } else {
//             alert("wrong credentials")
//             console.log("wrong password")
//         }
//     } else {
//         alert("user doesn't exist")
//         console.log("user doesn't exist")
//     }
// }

// function addUser(event) {
//     event.preventDefault();
//     userEmail = document.getElementById("user-email").value;
//     userPassword = document.getElementById("user-password").value;
//     if (!(userEmail && userPassword && userPassword.length > 7)) {
//         return
//     }

//     if (users.find(user => user.email === userEmail)) {
//         alert("user already exists")
//         console.log("user already exists")
//     } else {
//         const user = { email: userEmail, password: userPassword, admin: false }
//         users.push(user);
//         console.log("Created new user successfuly");
//         alert("User created successfully")
//         console.log(users);
//         renderLogin()
//     }
// }

function logout() {
    toggleLoginLogout()
    renderShop();
}

function toggleLoginLogout() {
    const navbarLinks = document.getElementById("navbar-links");

    if (loggedIn) {
        loggedIn = false;
        currentUser = {};
        cart = []

        const navbarLogout = document.getElementById("navbar-logout");
        if (navbarLogout) {
            navbarLinks.removeChild(navbarLogout);
        }

        const navbarCart = document.getElementById("navbar-cart");
        if (navbarCart) {
            navbarLinks.removeChild(navbarCart);
        }

        const navbarAddItem = document.getElementById("navbar-addItem");
        if (navbarAddItem) {
            navbarLinks.removeChild(navbarAddItem);
        }

        navbarLinks.innerHTML +=
            `<a id="navbar-login" href="#" onclick="renderLogin()">Login</a>`;

    } else {
        loggedIn = true;
        const navbarLogin = document.getElementById("navbar-login");
        if (navbarLogin) {
            navbarLinks.removeChild(navbarLogin);
        }

        navbarLinks.innerHTML +=
            `<a id="navbar-cart" href="#" onclick="renderCart()">Cart</a>`;

        if (currentUser.admin) {
            console.log("is admin")
            navbarLinks.innerHTML +=
                `<a id="navbar-addItem" href="#" onclick="renderAddItem()">Add Item</a>`;
        }

        navbarLinks.innerHTML +=
            `<a id="navbar-logout" href="#" onclick="logout()">Logout</a>`;

    }
}

function renderShop() {
    const root = document.getElementById("root");

    root.innerHTML = ""
    if (!loggedIn) {
        showMessage(
            {
                heading: "You're not logged in",
                paragraph: "Please log in first to start shopping."
            },
            "root"
        );
        return;
    }

    root.innerHTML = `
        <div class="search">
            <div>
                <label id="search-label">Search by item name/description:</label>
                <input id="search-input" placeholder="item name or description" type="text">
            </div>
            <div>
                <label id="price-search-label">Max price:</label>
                <input id="price-search-input" placeholder="price" type="number">
            </div>
            <div>
                <button id="search-button" onclick="searchItem()">Search</button>
            </div>
        </div>


        <div id="pro-card">
        </div>
    `
    renderAllItems()
}

function renderAllItems() {
    const proCard = document.getElementById("pro-card");
    fetchAllProducts().then((products) => {
        for (let i = 0; i < products.length; i++) {
            proCard.innerHTML +=
                `<div class="card" id="card-${products[i].id}">
                        <img src="${products[i].image}" alt="">
                        <span>${products[i].brand}</span>
                        <h1>${products[i].title}</h1>
                        <p>${products[i].description}</p>
                        <div class="price">
                            <h4>${products[i].price} <span>EGP</span></h4>
                            <button onclick="addToCart('${products[i].id}')">add to cart</button>
                        </div>
                        <button onclick="renderDetails('${products[i].id}')">details</button>
                        <button onclick="deleteProduct('${products[i].id}')">delete from db</button>
                    </div>`
        }
    });
}

function searchItem() {
    const proCard = document.getElementById("pro-card")
    const query = document.getElementById('search-input').value;
    let max_price = Number(document.getElementById('price-search-input').value);
    if (!max_price) {
        max_price = 10000;
    };
    proCard.innerHTML = ''

    if (query)
        console.log(query);

    for (let i = 0; i < products.length; i++) {
        if ((products[i].title.includes(query) || products[i].description.includes(query)) && products[i].price <= max_price) {
            proCard.innerHTML +=
                `<div class="card" id="card-${products[i].id}">
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

    if (proCard.innerHTML == '') {
        showMessage(
            {
                heading: "No Results Found",
                paragraph: "Sorry, no items match your search criteria."
            },
            "pro-card"
        );
    }
}

function showMessage(message, parentContainerDiv) {
    const parentContainer = document.getElementById(parentContainerDiv);
    const messageContainer = document.createElement('div');
    const messageBox = document.createElement('div');
    const messageHeading = document.createElement('h1');
    const messageParagraph = document.createElement('p');

    messageHeading.textContent = message.heading;
    messageParagraph.textContent = message.paragraph;

    messageContainer.className = 'message-container';
    messageBox.className = 'message-box';

    messageBox.appendChild(messageHeading);
    messageBox.appendChild(messageParagraph);
    messageContainer.appendChild(messageBox);
    parentContainer.appendChild(messageContainer);
}
