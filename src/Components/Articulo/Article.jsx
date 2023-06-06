import React, { useState, useContext, useEffect } from 'react'
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import './Article.css'
import { Context } from '../../Context/main';

function Articulo() {
    window.scrollTo(0, 0);
    const context = useContext(Context)
    const article = JSON.parse(sessionStorage.getItem("Article"))
    const [I, setI] = useState(1);

    useEffect(() => {
        console.log(context.cart)
    }, [context.cart])

    function addCart() {
        const article2 = article
        article2.total = article.price * I; // total a pagar
        article2.quantity = I; // cantidad de unidades pedidas
        context.setCart([...context.cart, article2])

    }

    return (

        <>
            <Header />
            <main id='main-article'>
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
                                    <box-icon name='minus'></box-icon>
                                </button>
                                <label>{I}</label>
                                <button onClick={(e) => {
                                    e.preventDefault()
                                    if (I < article.amount) {
                                        setI(I + 1);
                                    }

                                }}>
                                    <box-icon name='plus'></box-icon>
                                </button>
                            </div>
                        </form>
                        <h3 id='article-price'>{`$ ${article.price * I} USD`}</h3>
                    </div >
                    <div id="botones">
                        <button className='button1' id='buy' >Buy</button>
                        <button className='button1' id='add' onClick={addCart}>Add cart</button>
                    </div>

                </div>
            </main >
            <Footer />
        </>

    )
}

export default Articulo