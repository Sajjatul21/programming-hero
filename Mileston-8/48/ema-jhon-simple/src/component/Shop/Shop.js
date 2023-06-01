import React, { useEffect, useState } from 'react';
import './Shop.css'
import Proudct from '../Product/Proudct';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Proudct
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Proudct>)
                }
            </div>
            <div className="cart-container">
                <h4>Order Summary</h4>
                <p>Selected Items {cart.length}</p>

            </div>
        </div>
    );
};

export default Shop;