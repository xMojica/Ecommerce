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
                    <h1>{article.name}</h1>
                    <h3>{`$ ${article.price}`}</h3>
                    <div className="input-div one">
                        <div className="div">
                            <input type="number" placeholder="Amount" className="input" id='cantidad' />
                        </div>
                    </div >
                    <button className='button1'>Comprar</button>
                </div>
            </main>
            <Footer />
        </>

    )
}

export default Articulo