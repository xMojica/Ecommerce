import React from 'react';
import data from './data';
import { useNavigate } from 'react-router-dom';

import './Home.css';

function Products(props) {
    const navigate = useNavigate();

    function handleClick(product) {
        navigate("/Article")
        sessionStorage.setItem("Article", JSON.stringify(product));
    }

    return (
        <>
            {data.products.map((product) => {
                if (props.categoria && product.category !== props.categoria) {
                    return null;
                }

                return (
                    <div key={product.id} className="product" onClick={() => handleClick(product)}>
                        <img src={product.image} alt={product.name} height="335px" />
                        <div className="product-info">
                            <h3>{product.name}</h3>
                        </div>
                        <div className="overview">
                            <h3>${product.price} USD</h3>
                        </div>
                    </div>
                );
            })}
        </>
    );
}

export default Products;
