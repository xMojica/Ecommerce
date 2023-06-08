import React, { useRef, useState } from 'react'
import Header from '../Header/Header'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./addp.css"


function Addp() {
    const navigate = useNavigate();
    const messageRef = useRef(null);
    const [mensaje, setmensaje] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState("");
    const [img, setImg] = useState("");
    const [description, setDescription] = useState("");

    function mostrarMensaje(men) {
        setmensaje(men);
        document.getElementById("mensaje").style.visibility = "visible";
        document.getElementById("mensaje").classList.add("animacion");
        setTimeout(function () { document.getElementById("mensaje").style.visibility = "hidden"; }, 4000);
    }

    function handleClick(e) {
        e.preventDefault();

        const product = {
            name: name,
            description: description,
            price: price,
            img: img,
            amount: amount,
            category: category
        }


        axios
            .post(
                `https://ecommerceback-dlmy.onrender.com/api/product/`, product)
            .then(() => {
                mostrarMensaje("Product added successfully")
                setTimeout(function () { navigate('/home') }, 4000);
            })
            .catch(() => {
                mostrarMensaje("You cannot leave any field empty")
            });
    }


    return (
        <>
            <Header />
            <main>
                <i className='bx bx-arrow-back bx-lg' onClick={() => {
                    navigate("/Home")
                }}></i>
                <div id='contenedorChange'></div>
                <form id='change' className="form">
                    <p id="heading">Add product</p>

                    <div className="field field-add">
                        <input
                            placeholder="Name:"
                            className="input-field"
                            type="text"
                            onChange={(e) => { setName(e.target.value) }}
                        />
                    </div>

                    <div className="field field-add">
                        <input
                            placeholder="Price:"
                            className="input-field"
                            type="text"
                            onChange={(e) => {
                                if (!isNaN(e.target.value)) {
                                    setPrice(e.target.value)
                                } else {
                                    e.target.value = "";
                                    mostrarMensaje("The price must be a number")
                                }
                            }}
                        />
                    </div>

                    <div className="field field-add">
                        <input
                            placeholder="Amount:"
                            className="input-field"
                            type="text"
                            onChange={(e) => {
                                if (!isNaN(e.target.value)) {
                                    setAmount(e.target.value)
                                } else {
                                    e.target.value = "";
                                    mostrarMensaje("The amount must be a number")
                                }
                            }}
                        />
                    </div>

                    <div className="field field-add">
                        <input
                            placeholder="Description:"
                            className="input-field"
                            type="text"
                            onChange={(e) => { setDescription(e.target.value) }}
                        />
                    </div>

                    <div className="field field-add">
                        <input
                            placeholder="Img:"
                            className="input-field"
                            type="text"
                            onChange={(e) => { setImg(e.target.value) }}
                        />
                    </div>

                    <div className="field field-add" id='cat'>
                        <select name="category" id="menu-category" className='menu' onChange={(e) => {
                            if (e.target.value === "0") {
                                setCategory("console")
                            } else if (e.target.value === "1") {
                                setCategory("license")
                            } else if (e.target.value === "2") {
                                setCategory("subscription")
                            }
                        }}>
                            <option defaultValue>Category</option>
                            <option value="0">Console</option>
                            <option value="1">License</option>
                            <option value="2">Subscription</option>
                        </select>
                    </div>

                    <div className="btn">
                        <button className="button1" onClick={handleClick}>
                            Add
                        </button>
                    </div>

                    <p ref={messageRef} id="mensaje">
                        {mensaje}
                    </p>
                </form>
            </main>
        </>
    )
}

export default Addp