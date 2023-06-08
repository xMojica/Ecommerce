import React from 'react'
// import { useState } from 'react'
import Products from './Products'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Home() {
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

