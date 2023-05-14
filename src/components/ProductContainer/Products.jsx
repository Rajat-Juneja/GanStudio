import React, { useRef, useState } from 'react';
import { dataObject } from '../../constants/dataObject';
import Product from './Product';

const Products = () => {
    const [cartProducts, setCartProducts] = useState({});
    let cartIds = useRef([]);

    function updateCart(data) {
        let cart = cartProducts;
        if (cart[data.id]) {
            delete cart[data.id];
            cartIds.current = cartIds.current.filter(cartId => cartId !== data.id);
        } else {
            cart[data.id] = data;
            cartIds.current.push(data.id);
        }
        setCartProducts({...cart});
    }
    return (
        <div className="container text-center">
            <div className="row">
                {dataObject.map((data, index) => {
                    return (
                        <div className="col col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <Product imgUrl={data.imgUrl} name={data.name} price={data.price} updateCart={() => updateCart(data)} addedToCart={cartProducts[data.id]}/>
                        </div>
                    )
                })}
                
            </div>    
            <br /> 
            <button onClick={() => {console.log('Print the IDs of the products selected: ',cartIds.current)}}>
                Checkout (Items: {Object.keys(cartProducts).length})
            </button>
        </div>
    )
}

export default Products;