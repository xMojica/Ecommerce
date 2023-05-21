import React from 'react'
import data from './data'

import './Home.css'

function Products(props) {
    return (
        <>
            {data.products.map((product) => {
                if (props.categoria && product.category !== props.categoria) {
                    return null;
                }

                return (
                    <div key={product.id} className="product">
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

export default Products
