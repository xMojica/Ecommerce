import React, { useState } from 'react'
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import './Article.css'

function Articulo() {
    window.scrollTo(0, 0);
    const article = JSON.parse(sessionStorage.getItem("Article"))
    const [I, setI] = useState(1);

    return (

        <>
            <Header />
            <main id='main-article'>
                <div id='imagen'>
                    <img src={article.img} alt="imagen" />
                </div>
                <div id='descripcion'>
                    <h1><strong>{article.name}</strong></h1>
                    <hr />
                    <h3>{article.description}</h3>
                    <h3>{`$ ${article.price} USD`}</h3>
                    <h3>Quantity Available: {article.amount}</h3>
                    <div className="input-div one">
                        <form >
                            <h3>Amount</h3>
                            <div className="quantity">
                                <button onClick={(e) => {
                                    e.preventDefault()
                                    if (I >= 1) {
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
                    </div >
                    <div id="botones">
                        <button className='button1'>Comprar</button>
                        <button className='button1'>Add</button>
                    </div>

                </div>
            </main>
            <Footer />
        </>

    )
}

export default Articulo