import React, { useRef, useState } from 'react'
import Header from '../Header/Header'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./edit.css"


function Edit() {
    const products = JSON.parse(sessionStorage.getItem("Products"))
    const id = JSON.parse(sessionStorage.getItem("id"))
    const product = products.find(item => item.id === id);

    const navigate = useNavigate();
    const messageRef = useRef(null);
    const [mensaje, setmensaje] = useState("");
    const [name, setName] = useState(product.name);
    const [price, setPrice] = useState(product.price);
    const [amount, setAmount] = useState(product.amount);
    const [img, setImg] = useState(product.img);
    const [description, setDescription] = useState(product.description);
    const category = product.category

    function mostrarMensaje(men) {
        setmensaje(men);
        document.getElementById("mensaje").style.visibility = "visible";
        document.getElementById("mensaje").classList.add("animacion");
        setTimeout(function () { document.getElementById("mensaje").style.visibility = "hidden"; }, 4000);
    }

    function handleClick(e) {
        e.preventDefault()
        console.log(product.id)
        console.log(category)
        const prod = {
            name: name,
            description: description,
            price: price,
            img: img,
            amount: amount,
            category: category
        }

        axios.put(`https://ecommerceback-dlmy.onrender.com/api/product/${product.id}/`, prod)
            .then(() => {
                mostrarMensaje("Successfully edited");
                setTimeout(() => {
                    navigate("/home")
                }, 4000)
            })
            .catch(() => {
                mostrarMensaje("Edit failed")
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
                    <p id="heading">Edit product</p>

                    <div className="field field-add">
                        <p>Name: </p>
                        <input
                            placeholder={"Name: " + name}
                            className="input-field"
                            type="text"
                            value={name}

                            onChange={(e) => { setName(e.target.value) }}
                        />
                    </div>

                    <div className="field field-add">
                        <p>Price: </p>
                        <input
                            placeholder={"Price "}
                            className="input-field"
                            type="text"
                            value={price}
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
                        <p>Amount: </p>
                        <input
                            placeholder={"Amount:" + amount}
                            className="input-field"
                            type="text"
                            value={amount}
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
                        <p>Description: </p>
                        <input
                            placeholder={"Description:" + description}
                            className="input-field"
                            type="text"
                            value={description}
                            onChange={(e) => { setDescription(e.target.value) }}
                        />
                    </div>

                    <div className="field field-add">
                        <p>Img: </p>
                        <input
                            placeholder={"Img:" + img}
                            className="input-field"
                            type="text"
                            value={img}
                            onChange={(e) => { setImg(e.target.value) }}
                        />
                    </div>

                    <div className="btn">
                        <button className="button1" onClick={handleClick}>
                            Edit
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

export default Edit