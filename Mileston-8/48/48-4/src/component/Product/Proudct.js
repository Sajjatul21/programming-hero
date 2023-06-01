import React from 'react';
import './Product.css';
const Proudct = (props) => {
    const { name, img, seller, price, ratings } = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <p className='product-name'>Product: {name}</p>
        </div>
    );
};

export default Proudct;