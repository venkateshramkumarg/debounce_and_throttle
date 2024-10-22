"use client"

import React, { useState } from 'react';

const ProductList = () => {
    const [cart, setCart] = useState([]);

    const products = [
        { id: 1, unique: 571, name: 'Product 1', price: 10 },
        { id: 2, unique: 572, name: 'Product 2', price: 20 },
        { id: 3, unique: 573, name: 'Product 3', price: 30 },
    ];

    const handleAddToCart = (event) => {
        if (event.target.matches('.add-to-cart-btn')) {
            console.log(event.target.getAttribute('data-unique'));
            console.log(event.target.getAttribute('data-name'));

            const productId = event.target.getAttribute('data-id');
            const product = products.find(p => p.id === Number(productId));
            if (product) {
                setCart((prevCart) => [...prevCart, product]);
                alert(`${product.name} added to cart!`);
            }
        }
    };

    return (
        <div>
            <h2>Products</h2>
            <div onClick={handleAddToCart}>
                {products.map((product) => (
                    <div key={product.id} style={{ marginBottom: '10px' }}>
                        <h3>{product.name}</h3>
                        <p>Price: ${product.price}</p>
                        <button
                            className="add-to-cart-btn"
                            data-id={product.id}
                            data-unique={product.unique}
                            data-name={product.name}
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>

            <h2>Cart</h2>
            <ul>
                {cart.map((item, index) => (
                    <li key={index}>{item.name} - ${item.price}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
