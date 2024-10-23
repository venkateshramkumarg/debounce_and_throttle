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
            const productId = event.target.getAttribute('data-id');
        
            const product = products.find(p => p.id === Number(productId));
            if (product) {
                setCart((prevCart) => [...prevCart, product]);
                alert(`${product.name} added to cart!`);
            }
        }
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Products</h2>
            <div onClick={handleAddToCart} className="space-y-4">
                {products.map((product) => (
                    <div key={product.id} className="p-4 border rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold">{product.name}</h3>
                        <p className="text-gray-700">Price: ${product.price}</p>
                        <button
                            className="add-to-cart-btn mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            data-id={product.id}
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Cart</h2>
            <ul className="list-disc pl-5">
                {cart.map((item, index) => (
                    <li key={index} className="text-gray-700">{item.name} - ${item.price}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
