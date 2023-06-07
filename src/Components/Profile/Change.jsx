import React, { useState, useRef } from 'react'
import Header from '../Header/Header'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Change.css"

function Change() {
    const navigate = useNavigate();
    const messageRef = useRef(null);
    const [password, setPassword] = useState("");
    const [mensaje, setmensaje] = useState("");
    const cliente = JSON.parse(sessionStorage.getItem("cliente"))

    function mostrarMensaje(men) {
        setmensaje(men);
        document.getElementById("mensaje").style.visibility = "visible";
        document.getElementById("mensaje").classList.add("animacion");
        setTimeout(function () { document.getElementById("mensaje").style.visibility = "hidden"; }, 4000);
    }

    function handleClick(e) {
        e.preventDefault();

        cliente.password = password;

        axios
            .patch(
                `https://ecommerceback-dlmy.onrender.com/api/client/${cliente.email}/`, cliente)
            .then(() => {
                mostrarMensaje("Password changed successfully")
                setTimeout(function () { navigate('/') }, 3500);
            })
            .catch(() => {
                mostrarMensaje("We couldn't change the password at this time, please try again later")
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
                    <p id="heading">Change Password</p>

                    <div className="field">
                        <svg
                            className="input-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                        </svg>
                        <input
                            placeholder="New password"
                            className="input-field"
                            type="password"
                            onChange={(e) => { setPassword(e.target.value) }}
                        />
                    </div>
                    <div className="btn">
                        <button className="button1" onClick={handleClick}>
                            Change
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

export default Change