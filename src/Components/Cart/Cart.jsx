import React, { useContext } from 'react'
import "./Cart.css"
import { Context } from '../../Context/main'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { useNavigate } from 'react-router-dom';


function Cart() {
    const navigate = useNavigate()
    const context = useContext(Context)
    let total = 0;

    function delet(e) {

        context.cart.splice(e.target.id, 1);
        navigate("/Cart")
    }

    function minus() {

    }

    function plus() {

    }

    return (
        <>
            < Header />
            <main>
                <div id="contenedor">
                    <div className="contenedor-item">
                        <table id='carrito'>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            {context.cart.map((e, index) => {
                                total = total + e.total
                                return (
                                    <tbody>
                                        <tr key={index}>
                                            <td id='td-img'><img id="product-img" src={e.img} alt="Product" /></td>
                                            <td>{e.name}</td>
                                            <td>{e.price}</td>
                                            <td>{e.quantity}</td>
                                            <td>{e.total}</td>
                                            <td><i id={index} className='bx bx-trash bx-md' onClick={delet}></i></td>
                                            <td><i className='bx bx-minus bx-md' onClick={minus}></i></td>
                                            <td><i className='bx bx-plus bx-md' onClick={plus}></i></td>
                                        </tr>
                                    </tbody>
                                )
                            })}
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>Total:</td>
                                    <td id='total'>{total}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </main >
            <Footer />
        </>
    )
}

export default Cart