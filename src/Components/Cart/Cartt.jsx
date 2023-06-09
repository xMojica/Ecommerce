import React, { useContext, useState } from 'react'
import "./Cart.css"
import { Context } from '../../Context/main'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

function Cart() {
    const cliente = JSON.parse(sessionStorage.getItem("cliente"))
    const navigate = useNavigate()
    const context = useContext(Context)
    let total = 0;
    const [newCart] = useState(context.cart)

    function descontarCantidad() {

        context.cart.forEach((e, i) => {
            const prod = {
                name: e.name,
                description: e.description,
                price: e.price,
                img: e.img,
                amount: e.amount - e.quantity,
                category: e.category
            }
            if (prod.amount === 0) {
                axios.delete(`https://ecommerceback-dlmy.onrender.com/api/product/${context.cart[i].id}/`)
            } else {
                axios.put(`https://ecommerceback-dlmy.onrender.com/api/product/${context.cart[i].id}/`, prod)
            }

        })
    }

    function compra() {

        if (cliente.saldo >= total) {
            const letrero = document.getElementById('letrero');
            cliente.saldo = cliente.saldo - total;
            sessionStorage.setItem("cliente", JSON.stringify(cliente))
            letrero.innerHTML = "Purchase approved"
            axios.patch(`https://ecommerceback-dlmy.onrender.com/api/client/${cliente.email}/`, cliente)
            descontarCantidad()
        } else {
            const letrero = document.getElementById('letrero');
            letrero.innerHTML = "Rejected purchase, insufficient balance"
        }
    }

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
                                <h3 id='letrero'>Empty cart</h3>
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
                            <button id='comprar' className='button1 botoncart' onClick={(e) => {
                                e.preventDefault()
                                context.setCart([])
                                setTimeout(() => {
                                    compra()
                                }, 10);

                                setTimeout(() => {
                                    const letrero = document.getElementById("letrero")
                                    letrero.innerHTML = "Empty cart";
                                    navigate("/Home")
                                }, 4000);

                            }} ><strong>Buy</strong></button>
                        </div>
                    ) : null}
                </div>

            </main >

            <Footer />
        </>
    )
}

export default Cart