import React from 'react'
import Header from "../Header/Header"
import './Article.css'

function Articulo() {
    const article = JSON.parse(sessionStorage.getItem("Article"))

    return (

        <>
            <Header />

            <main id="main-descripcion">
                <div id='imagen'>
                    <img src={article.image} alt="imagen" />
                </div>
                <div id='descripcion'>
                    <h1>{article.name}</h1>
                    <h3>{`$ ${article.price}`}</h3>
                    <div className="input-div one">
                        <div className="div">
                            <input type="number" placeholder="Cantidad" className="input" id='cantidad' />
                        </div>
                    </div >
                    <button className='button1'>Comprar</button>
                </div>
            </main>
        </>

    )
}

export default Articulo