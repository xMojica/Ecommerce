import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import './Article.css'
import { Context } from '../../Context/main';

function Articulo() {
    const context = useContext(Context)
    const navigate = useNavigate()
    const article = JSON.parse(sessionStorage.getItem("Article"))
    const [I, setI] = useState(1);

    function addCart() {
        const article2 = article
        article2.total = article.price * I; // total a pagar
        article2.quantity = I; // cantidad de unidades pedidas
        context.setCart([...context.cart, article2])
    }

    useEffect(() => {
        const updateCart = () => {
            const quantityMap = {};
            context.cart.forEach(item => {
                if (quantityMap[item.id]) {
                    if (quantityMap[item.id].quantity + item.quantity <= quantityMap[item.id].amount) {
                        quantityMap[item.id].quantity += item.quantity;
                        quantityMap[item.id].total = quantityMap[item.id].quantity * quantityMap[item.id].price;
                    }
                } else {
                    quantityMap[item.id] = { ...item };
                }
            });
            const updatedCart = Object.values(quantityMap);
            context.setCart(updatedCart);
        };

        updateCart();
    }, [context.cart, context]);

    return (

        <>
            <Header />
            <main id='main-article'>
                <i className='bx bx-arrow-back bx-lg' onClick={() => {
                    navigate("/Home")
                }}></i>
                <div id='imagen'>
                    <img src={article.img} alt="imagen" />
                </div>
                <div id='descripcion'>
                    <h1 id='title'>{article.name}</h1>
                    <p id='article-description'>{article.description}</p>
                    <p id='article-quantity'>Quantity Available: <strong>{article.amount}</strong></p>
                    <div className="input-div one">
                        <form id='form-article'>
                            <div><p>Amount: </p></div>
                            <div className="quantity">
                                <button onClick={(e) => {
                                    e.preventDefault()
                                    if (I > 1) {
                                        setI(I - 1);
                                    }

                                }}>
                                    <i className='bx bx-minus bx-sm' id='icon-min' ></i>

                                </button>
                                <label>{I}</label>
                                <button onClick={(e) => {
                                    e.preventDefault()
                                    if (I < article.amount) {
                                        setI(I + 1);
                                    }

                                }}>
                                    <i className='bx bx-plus bx-sm' id='icon-mas'></i>

                                </button>
                            </div>
                        </form>
                        <h3 id='article-price'>{`$ ${article.price * I} USD`}</h3>
                    </div >
                    <div id="botones">
                        <button className='button1' id='buy' onClick={() => {
                            addCart()
                            setTimeout(() => {
                                navigate("/Cart")
                                setTimeout(() => {
                                    const boton = document.getElementById("comprar")
                                    boton.click()
                                })
                            })
                        }}>Buy</button>
                        <button className='button1' id='add' onClick={addCart}>Add cart</button>
                    </div>

                </div>
            </main >
            <Footer />
        </>

    )
}

export default Articulo