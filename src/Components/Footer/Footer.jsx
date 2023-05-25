import React from 'react'
import "./Footer.css"



function Footer() {

    return (
        <footer>
            <div id='div-logos'>
                <span onClick={() => { window.open('https://www.instagram.com', '_blank') }}><box-icon name='instagram' type='logo' size="70px" color="#fff"></box-icon></span>
                <span onClick={() => { window.open('https://www.facebook.com', '_blank') }}><box-icon name='facebook' type='logo' size="70px" color="#fff"></box-icon></span>
                <span onClick={() => { window.open('https://www.youtube.com', '_blank') }}><box-icon name='youtube' type='logo' size="70px" color="#fff"></box-icon></span>
            </div>
            <hr />
            <p>Todos los derechos reservados &copy; 2023</p>
            <div id='div-super'>
                <img src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.21.22/mercadolibre/sic.png" alt="superintentendcia" />
                <img src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.21.22/mercadolibre/pum.png" alt="nopare" />
            </div>
        </footer>
    )
}

export default Footer