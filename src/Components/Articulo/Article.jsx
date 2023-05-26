import React from 'react'
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import './Article.css'

function Articulo() {
    window.scrollTo(0, 0);
    const article = JSON.parse(sessionStorage.getItem("Article"))

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
                            <label for="lang">Amount</label>
                            <select name="Amount" id="amount">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                            </select>
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