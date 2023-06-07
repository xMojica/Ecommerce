import React, { useContext, useState } from 'react'
import "./Cart.css"
import { Context } from '../../Context/main'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { useNavigate } from 'react-router-dom';


function Cart() {
    const navigate = useNavigate()
    const context = useContext(Context)
    let total = 0;
    const [newCart] = useState(context.cart)

    function delet(e) {
        context.cart.splice(e.target.id, 1);
        navigate("/Cart")
    }

    function minus(e) {
        if (newCart[e.target.id].amount && newCart[e.target.id].quantity > 1) {
            newCart[e.target.id].quantity--;
            newCart[e.target.id].total = newCart[e.target.id].quantity * newCart[e.target.id].price;
            context.setCart(newCart)
            navigate("/Cart")
        }
    }

    function plus(e) {
        if (newCart[e.target.id].amount > newCart[e.target.id].quantity) {
            newCart[e.target.id].quantity++;
            newCart[e.target.id].total = newCart[e.target.id].quantity * newCart[e.target.id].price;
            context.setCart(newCart)
            navigate("/Cart")
        }
    }

    function deleteAll() {
        context.setCart([]);
        navigate("/Cart")
    }

    return (
        <>
            < Header />
            <main>
                <i id='arrowcart' className='bx bx-arrow-back bx-lg ' onClick={() => {
                    navigate("/Home")
                }}></i>
                <div id="contenedor">
                    <div className="contenedor-item">
                        <table id='carrito'>
                            {context.cart.length !== 0 ? (
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>

                            ) : (
                                <h3>Empty cart</h3>
                            )}

                            {context.cart.map((e, index) => {
                                total = total + e.total
                                return (
                                    <tbody key={index}>
                                        <tr>
                                            <td id='td-img'><img id="product-img" src={e.img} alt="Product" /></td>
                                            <td>{e.name}</td>
                                            <td>{e.price}</td>
                                            <td>{e.quantity}</td>
                                            <td>${e.total}</td>
                                            <td><i id={index} className='bx bx-minus bx-md' onClick={minus}></i></td>
                                            <td><i id={index} className='bx bx-trash bx-md' onClick={delet}></i></td>
                                            <td><i id={index} className='bx bx-plus bx-md' onClick={plus}></i></td>
                                        </tr>
                                    </tbody>
                                )
                            })}

                            {
                                context.cart.length === 0 ? (null) : (<tbody key="totalRow">
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>Total:</td>
                                        <td id='total'><strong>$ {total}</strong></td>
                                        <td></td>
                                    </tr>
                                </tbody>)
                            }

                        </table>
                    </div>

                    {context.cart.length !== 0 ? (
                        <div className="botonesCart">
                            <button id='deleteall' className='button1 botoncart' onClick={deleteAll}><strong>Empty cart</strong></button>
                            <button className='button1 botoncart'><strong>Buy</strong></button>
                        </div>
                    ) : null}
                </div>
            </main >

            <Footer />
        </>
    )
}

export default Cart