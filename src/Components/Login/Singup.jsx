import { useNavigate } from 'react-router-dom';
import { React, useState } from "react";
import Logo from "../../images/Logo.png";
import axios from 'axios';

function Singup() {
    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [cliente, setCliente] = useState({});
    const [mensaje, setmensaje] = useState("");

    function mostrarMensaje(men) {
        setmensaje(men);
        document.getElementById("mensaje").style.visibility = "visible";
        setTimeout(function () { document.getElementById("mensaje").style.visibility = "hidden"; }, 4000);
    }

    function verificarName() {
        let regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
        if (regex.test(name)) {
            return true;
        } else {
            mostrarMensaje("The fullname field only contains alphabetic characters.");
        }
    }

    function verificarContact() {
        let regex = /^\d{10}$/;
        if (regex.test(contact)) {
            return true
        } else {
            mostrarMensaje("The phone number must be 10 numbers.");
            return false
        }
    }

    function verificarPassword() {
        if (password !== "") {
            return true
        } else {
            mostrarMensaje("The password cannot be empty.")
            return false
        }
    }

    function verificarEmail() {
        let band = false
        axios
            .get(`https://ecommerceback-dlmy.onrender.com/api/client`)
            .then((response) => {
                response.data.forEach(element => {
                    if (element.email === email) {
                        band = true
                    }
                });
            })
            .catch(() => { })

        if (band === true) {
            mostrarMensaje("Correo en uso")
        } else {
            return true
        }
    }


    function handleclick(e) {
        e.preventDefault();
        if (verificarName() && verificarContact() && verificarPassword() && verificarEmail()) { // Verifico todo y si es true hago el post

            setCliente({
                fullname: name,
                contact: contact,
                email: email,
                password: password,
                admin: "Off"
            })

            axios
                .post(`https://ecommerceback-dlmy.onrender.com/api/client/`, cliente)
                .then(() => {
                    mostrarMensaje("Successful registration")
                    setTimeout(function () { navigate("/") }, 4000)
                })
                .catch(() => { });
        }
    }

    return (
        <>
            <div className="divcontenedor">
                <form className="form">
                    <p id="heading">Register</p>
                    <div className="field">
                        <svg
                            className="input-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path>

                        </svg>
                        <input
                            placeholder="Full name"
                            className="input-field"
                            type="text"
                            onChange={(e) => { setName(e.target.value) }}
                        />
                    </div>

                    <div className="field">
                        <svg className='input-icon'
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="m20.487 17.14-4.065-3.696a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a.997.997 0 0 0-.085-1.39z"></path>
                        </svg>
                        <input
                            placeholder="Contact"
                            className="input-field"
                            type="text"
                            onChange={(e) => { setContact(e.target.value) }}
                        />
                    </div>

                    <div className="field">
                        <svg
                            className="input-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z" />
                        </svg>

                        <input
                            autoComplete="off"
                            placeholder="Email"
                            className="input-field"
                            type="text"
                            onChange={(e) => { setEmail(e.target.value) }}
                        />
                    </div>

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
                            placeholder="Password"
                            className="input-field"
                            type="password"
                            onChange={(e) => { setPassword(e.target.value) }}
                        />
                    </div>
                    <p id="note">Note: All fields are required</p>
                    <div className="btn">
                        <button className="button1" onClick={handleclick}>
                            Register
                        </button>
                    </div>
                    <div className="btn">
                        <button
                            className="button1"
                            onClick={() => {
                                navigate("/");
                            }}
                        >
                            Back
                        </button>
                    </div>
                    <p id="mensaje">
                        {mensaje}
                    </p>
                </form >
                <img id="logo" src={Logo} alt="Logo" width="600px" height={"600px"} />
            </div >
        </>
    );
}

export default Singup
