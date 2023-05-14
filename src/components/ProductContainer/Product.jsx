import React from 'react';

const Product = ({imgUrl, name, price, updateCart, addedToCart}) => {
    return (
        <div className="card" style={{marginBottom: '40px'}}>
            <div>
                <img src={imgUrl} className="card-img-top productImg" alt="..." />
            </div>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">${price}</p>
                <button className='addToCart' onClick={() => updateCart()}>{addedToCart ? "Remove" : "Add To Cart"}</button>
            </div>
        </div>
    )
}

export default Product;