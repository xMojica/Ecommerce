import React from 'react';
import { useContext, useState, useEffect } from 'react';
// import data from './data';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../Context/main';

import axios from 'axios';

import './Home.css';

function Products() {
    const context = useContext(Context)
    const navigate = useNavigate();
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('https://ecommerceback-dlmy.onrender.com/api/product')
            .then((response) => {
                if (response.data !== null) {
                    sessionStorage.setItem('Products', JSON.stringify(response.data));
                    setData(response.data);
                } else {
                    console.log('No hay productos');
                }
            })
            .catch((error) => {
                console.error('Error al obtener los productos:', error);
            });
    }, [data]);


    function handleClick(product) {
        navigate("/Article")
        sessionStorage.setItem("Article", JSON.stringify(product));
    }

    return (
        <>
            {context.busqueda === "" ? (
                // Mostrar todos los productos sin filtrar
                data.map((product) => {
                    if (context.categoria && product.category !== context.categoria) {
                        return null;
                    }

                    return (
                        <div key={product.id} className="product" onClick={() => handleClick(product)}>
                            <img src={product.img} alt={product.name} height="335px" />
                            <div className="product-info">
                                <h3>{product.name}</h3>
                            </div>
                            <div className="overview">
                                <h3>${product.price} USD</h3>
                            </div>
                        </div>
                    );
                })
            ) : (

                data.filter((product) => product.name.toLowerCase().includes(context.busqueda.toLowerCase()))
                    .map((product) => {
                        return (
                            <div key={product.id} className="product" onClick={() => handleClick(product)}>
                                <img src={product.img} alt={product.name} height="335px" />
                                <div className="product-info">
                                    <h3>{product.name}</h3>
                                </div>
                                <div className="overview">
                                    <h3>${product.price} USD</h3>
                                </div>
                            </div>
                        );
                    })
            )}
        </>
    );
}

export default Products;
