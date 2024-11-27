import './Task.css';
import { useState, useEffect } from 'react';

function Task() {
    const [ProductData, setProductData] = useState({});

    useEffect(() => {
        fetch('http://localhost:8000/products/2')
            .then(res => res.json())
            .then(data => {
                setProductData(data);
            })
            .catch(error => console.error('Error fetching product:', error));
    }, []);

    return (
        <div className="pro-card">
            <div className="product-image">
                <div className="product-display-image">
                    <img 
                        src={ProductData.image || `${process.env.PUBLIC_URL}/lemon_shirt.jpg`} 
                        alt={ProductData.title || 'Lemon Shirt'} 
                    />
                </div>
                <div className="thumbnail-images">
                    <img src={ProductData.image || `${process.env.PUBLIC_URL}/lemon_shirt.jpg`} alt="Thumbnail 1" />
                    <img src={ProductData.image || `${process.env.PUBLIC_URL}/lemon_shirt.jpg`} alt="Thumbnail 2" />
                    <img src={ProductData.image || `${process.env.PUBLIC_URL}/lemon_shirt.jpg`} alt="Thumbnail 3" />
                    <img src={ProductData.image || `${process.env.PUBLIC_URL}/lemon_shirt.jpg`} alt="Thumbnail 4" />
                    <img src={ProductData.image || `${process.env.PUBLIC_URL}/lemon_shirt.jpg`} alt="Thumbnail 5" />
                </div>
            </div>
            <div className="product-details">
                <h1>{ProductData.title || 'TITLE'}</h1>
                <h3>{ProductData.price ? `$${ProductData.price}` : '$22.78'}</h3>
                <label htmlFor="product-size-list">Pick a size:</label>

                <select className="product-size-list" id="product-size-list">
                    <option value="XXS">XXS</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                    <option value="XXXL">XXXL</option>
                </select>
                <p className="product-description">
                    {ProductData.description || 'Product description goes here.'}
                </p>
                <button>ADD TO CART</button>
            </div>
        </div>
    );
}

export default Task;
