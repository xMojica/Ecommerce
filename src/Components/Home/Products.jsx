import React from 'react';
import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../Context/main';

import axios from 'axios';

import './Home.css';

function Products() {
    const context = useContext(Context)
    const navigate = useNavigate();
    const [data, setData] = useState([])
    const cliente = JSON.parse(sessionStorage.getItem("cliente"))

    useEffect(() => {
        axios.get('https://ecommerceback-dlmy.onrender.com/api/product/')
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

    function deleteProd(e) {
        e.stopPropagation()
        if (window.confirm("Are you sure you want to delete this product?")) {
            axios.delete(`https://ecommerceback-dlmy.onrender.com/api/product/${e.target.id}`)
                .then(() => {
                    console.log('Elemento eliminado exitosamente');
                })
                .catch(error => {
                    console.error('Error al eliminar el elemento:', error);
                });
        }

    }

    function editProd(e) {
        e.stopPropagation()
        sessionStorage.setItem("id", e.target.id);
        navigate("/Edit")
    }

    if (cliente.admin === "Off") {
        return (
            <>
                {context.busqueda === "" ? (
                    // Mostrar todos los productos sin filtrar
                    data.map((product) => {
                        if (context.categoria && product.category !== context.categoria) {
                            return null;
                        }

                        if (product.amount === 0) {
                            return (
                                <div key={product.id} className="product" onClick={() => { alert("At this moment the product is not in stock, contact us next week") }}>
                                    <img src={product.img} alt={product.name} height="335px" />
                                    <div className="product-info">
                                        <h3>{product.name}</h3>
                                    </div>
                                    <div className="overview">
                                        <h3>${product.price} USD</h3>
                                    </div>
                                </div>
                            );
                        } else {
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
                        }

                    })
                ) : (

                    data.filter((product) => product.name.toLowerCase().includes(context.busqueda.toLowerCase()))
                        .map((product) => {
                            return (
                                <div key={product.id} className="product" onClick={() => { alert("At this moment the product is not in stock, contact us next week") }}>
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
    } else { // cuando es administrador
        return (
            <>
                {context.busqueda === "" ? (
                    // Mostrar todos los productos sin filtrar
                    data.map((product) => {
                        if (context.categoria && product.category !== context.categoria) {
                            return null;
                        }
                        if (product.amount === 0) {
                            return (
                                <div key={product.id} className="product" onClick={() => { alert("There is no stock of this product") }}>
                                    <img src={product.img} alt={product.name} height="335px" />
                                    <div className="product-info">
                                        <h3>{product.name}</h3>
                                    </div>
                                    <div className="overview ov-admin">
                                        <h3>${product.price} USD</h3>
                                        <i id={product.id} className='bx bx-trash bx-sm btn-adm' onClick={deleteProd}></i>
                                        <i id={product.id} className='bx bx-edit-alt btn-adm' onClick={editProd}></i>
                                    </div>
                                </div>
                            );
                        } else {
                            return (
                                <div key={product.id} className="product" onClick={() => handleClick(product)}>
                                    <img src={product.img} alt={product.name} height="335px" />
                                    <div className="product-info">
                                        <h3>{product.name}</h3>
                                    </div>
                                    <div className="overview ov-admin">
                                        <h3>${product.price} USD</h3>
                                        <i id={product.id} className='bx bx-trash bx-sm btn-adm' onClick={deleteProd}></i>
                                        <i id={product.id} className='bx bx-edit-alt btn-adm' onClick={editProd}></i>
                                    </div>
                                </div>
                            );
                        }
                    })
                ) : (

                    data.filter((product) => product.name.toLowerCase().includes(context.busqueda.toLowerCase()))
                        .map((product) => {
                            if (product.amount === 0) {
                                return (
                                    <div key={product.id} className="product" onClick={() => { alert("There is no stock of this product") }}>
                                        <img src={product.img} alt={product.name} height="335px" />
                                        <div className="product-info">
                                            <h3>{product.name}</h3>
                                        </div>
                                        <div className="overview ov-admin">
                                            <h3>${product.price} USD</h3>
                                            <i id={product.id} className='bx bx-trash bx-sm btn-adm' onClick={deleteProd}></i>
                                            <i id={product.id} className='bx bx-edit-alt btn-adm' onClick={editProd}></i>
                                        </div>
                                    </div>
                                );
                            } else {
                                return (
                                    <div key={product.id} className="product" onClick={() => handleClick(product)}>
                                        <img src={product.img} alt={product.name} height="335px" />
                                        <div className="product-info">
                                            <h3>{product.name}</h3>
                                        </div>
                                        <div className="overview ov-admin">
                                            <h3>${product.price} USD</h3>
                                            <i id={product.id} className='bx bx-trash bx-sm btn-adm' onClick={deleteProd}></i>
                                            <i id={product.id} className='bx bx-edit-alt btn-adm' onClick={editProd}></i>
                                        </div>
                                    </div>
                                );
                            }

                        })
                )}
            </>
        );

    }
}

export default Products;
