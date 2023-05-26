import React from 'react'
// import { useState } from 'react'
import Products from './Products'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Home(props) {
    // const [categoria, setCategoria] = useState("")
    // setCategoria(sessionStorage.getItem("Busqueda"))
    return (
        <>
            <Header />
            <main>
                <Products />
            </main>
            <Footer />
        </>

    );
}

export default Home

