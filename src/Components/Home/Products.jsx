import React from 'react'
import data from './data'

import './Home.css'


function Products() {


    return (
        data.products.map((product) => {
            return (
                <>
                    <div
                        key={`${product.id}`}
                        className="product">
                        <img
                            src={product.image}
                            alt={product.name}
                        />
                        <div className="product-info">
                            <h3>{product.name}</h3>
                        </div>
                        <div className="overview">
                            <h3>{product.price}</h3>
                        </div>
                    </div>
                </>
            )
        })
    );
}

export default Products



//data.products.map((product) => {
// return (
//     <>
//         <div
//             key={`${product.id}`}
//             className="product">
//             <img
//                 src={product.image}
//                 alt={product.name}
//             />
//             <div className="product-info">
//                 <h3>{product.name}</h3>
//             </div>
//             <div className="overview">
//                 <h3>{product.price}</h3>
//             </div>
//         </div>
//     </>
// )
//   })