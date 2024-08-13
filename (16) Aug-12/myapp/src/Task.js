import './Task.css';
import { useState } from 'react';
import shirt_img from './floral_shirt.jpg'

function App() {
    let products = [
        { id: 1, brand: "TrendWear", title: "Casual Shirt", description: "Floral print. Comfortable casual shirt for everyday wear.", price: "250", image: shirt_img },
        { id: 2, brand: "TrendWear", title: "Casual Shirt", description: "Lemon Print. Comfortable casual shirt for everyday wear.", price: "250", image: shirt_img },
        { id: 3, brand: "TrendWear", title: "Casual Shirt", description: "Stripes Print. Comfortable casual shirt for everyday wear.", price: "250", image: shirt_img },
        { id: 4, brand: "EliteFashion", title: "Formal Pants", description: "Elegant formal pants for office and events.", price: "450", image: shirt_img },
        { id: 5, brand: "StyleHub", title: "Graphic Tee", description: "Trendy graphic tee with unique designs.", price: "150", image: shirt_img },
        { id: 6, brand: "UrbanEdge", title: "Denim Jacket", description: "Stylish denim jacket for a cool look.", price: "600", image: shirt_img },
        { id: 7, brand: "Fashionista", title: "Voyou Dress", description: "Crepe and satin dress.", price: "350", image: shirt_img },
        { id: 8, brand: "CozyWear", title: "Hoodie", description: "Soft and warm hoodie for chilly days.", price: "400", image: shirt_img },
        { id: 9, brand: "FitGear", title: "Running Shoes", description: "High-performance running shoes for all terrains.", price: "700", image: shirt_img },
        { id: 10, brand: "ChicStyle", title: "Leather Belt", description: "Sleek leather belt to complement your outfits.", price: "200", image: shirt_img },
        { id: 11, brand: "WinterWarm", title: "Wool Scarf", description: "Cozy wool scarf to keep you warm in winter.", price: "300", image: shirt_img },
        { id: 12, brand: "Glamour", title: "Evening Gown", description: "Elegant evening gown for special occasions.", price: "1500", image: shirt_img },
    ];
    var [productCards, setProducts] = useState(products);
    const handleClick = () => {
        setProducts([]);
    }

    return (
        <>
            <button onClick={handleClick}>Delete All Products</button>
            <div key="pro-card">
                {productCards.map((productCard) => {
                    return (
                        <div className="card">
                            <img src={productCard.image} alt="" />
                            <span>{productCard.brand}</span>
                            <h1>{productCard.title}</h1>
                            <p>{productCard.description}</p>
                            <div className="price">
                                <h4>{productCard.price} <span>EGP</span></h4>
                                <button>add to cart</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default App;