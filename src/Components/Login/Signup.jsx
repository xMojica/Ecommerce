import { useNavigate } from 'react-router-dom';
import { React, useState, useContext } from "react";
import axios from 'axios';
import { Context } from '../../Context/main';
import Alerta from "./Alerta"

function Singup() {
    const navigate = useNavigate();
    const context = useContext(Context);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [direccion, setDireccion] = useState("");
    const [email, setEmail] = useState("");
    const [contraseña, setContraseña] = useState("");

    function verificarNombre() {
        const regex = /^[a-zA-Z]{2,}([a-zA-Z]{2,})?$/
        if (regex.test(nombre)) {
            return true;
        } else {
            context.setOpen(true)
            context.setSeverity("error")
            context.setMensaje("Debes ingresar un nombre valido");
            setNombre("")
            return false
        }
    }

    function verificarApellido() {
        const regex = /^[a-zA-Z]{2,}([a-zA-Z]{2,})?$/
        if (regex.test(apellido)) {
            return true;
        } else {
            context.setOpen(true)
            context.setSeverity("error")
            context.setMensaje("Debes ingresar un apellido valido");
            setApellido("")
            return false

        }
    }

    function verificarTelefono() {
        let regex = /^\d{10}$/;
        if (regex.test(telefono)) {
            return true
        } else {
            context.setOpen(true)
            context.setSeverity("error")
            context.setMensaje("El numero de telefono debe contener minimo 6 numeros");
            setTelefono("")
            return false
        }
    }

    function verificarDireccion() {
        let regex = /^[a-zA-Z0-9\s,.'-]{3,100}$ /;
        if (regex.test(direccion)) {
            return true
        } else {
            context.setOpen(true)
            context.setSeverity("error")
            context.setMensaje("Debes ingresar una direccion correcta");
            setDireccion("")
            return false
        }
    }

    function verificarEmail() {
        let regex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (regex.test(email)) {
            axios.get(`https://ecommerceback-dlmy.onrender.com/api/client/${email}/`)
                .then(() => {
                    context.setOpen(true)
                    context.setSeverity("error")
                    context.setMensaje("Este email ya esta en uso");
                    setEmail("")
                }).catch((e) => { //necesito que cuando se busque por email, me responda con el error y el codigo de respuesta
                    // if (codigo de respuesta es 200ok entonces return true sino retorne false 
                    //     y muestre que en este momento no se puede registrar un cliente, que 
                    //     intente mas tarde)
                    return true
                })


        } else if (email !== "") {
            context.setOpen(true)
            context.setSeverity("error")
            context.setMensaje("Debes ingresar una email valido");
            return false
        } else {
            context.setOpen(true)
            context.setSeverity("error")
            context.setMensaje("Debes ingresar el Email");
            return false
        }
    }

    function verificarContraseña() {
        if (contraseña !== "") {
            return true
        } else {
            context.setOpen(true)
            context.setSeverity("error")
            context.setMensaje("Debes ingresar la contraseña");
            return false
        }
    }

    function handleclick(e) {
        e.preventDefault();

        if (verificarNombre() && verificarApellido() && verificarTelefono() && verificarDireccion() && verificarEmail() && verificarContraseña()) {

            const cliente = {
                nombre: nombre,
                apellido: apellido,
                telefono: telefono,
                direccion: direccion,
                email: email,
                password: contraseña,
                admin: "Off"
            }

            axios.post(`https://ecommerceback-dlmy.onrender.com/api/client/`, cliente)
                .then(() => {
                    context.setOpen(true)
                    context.setSeverity("success")
                    context.setMensaje("Usuario registrado con exito")
                }).catch((e) => {
                    context.setOpen(true)
                    context.setSeverity("error")
                    context.setMensaje("Email invalido");
                })
        }

    }

    return (
        <>
            <div className="flex flex-row h-screen w-full items-center justify-center p-8">
                <div className='h-16 w-2/5 fixed top-5 justify-center'>
                    <Alerta />
                </div>
                <form className="flex flex-col w-full sm:w-1/2 h-[34rem] items-center gap-5 bg-white-400/30 m-4 px-4 pt-2 pb-2 rounded-lg border border-white/10 shadow-md shadow-black backdrop-blur-sm">
                    <h1 className='text-center text-primary font-extrabold text-4xl sm:m-5'>Registrarse</h1>
                    <div className='grid grid-cols-2 gap-5 '>
                        <div className="flex flex-row h-10 bg-primary justify-center items-center px-3 rounded-lg shadow-lg shadow-black/30 hover:scale-105 ease-out duration-200">
                            <svg
                                className="fill-secondary"
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path>

                            </svg>
                            <input
                                placeholder="Nombre: "
                                className="w-full bg-primary outline-none text-secondary"
                                type="text"
                                onChange={(e) => { setNombre(e.target.value) }}
                            />
                        </div>

                        <div className="flex flex-row h-10 bg-primary justify-center items-center px-3 rounded-lg shadow-lg shadow-black/30 hover:scale-105 ease-out duration-200">
                            <svg
                                className="fill-secondary"
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path>

                            </svg>
                            <input
                                placeholder="Nombre completo: "
                                className="w-full bg-primary outline-none text-secondary"
                                type="text"
                                onChange={(e) => { setApellido(e.target.value) }}
                            />
                        </div>

                        <div className="flex flex-row h-10 bg-primary justify-center items-center px-3 rounded-lg shadow-lg shadow-black/30 hover:scale-105 ease-out duration-200">
                            <svg className='fill-secondary'
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="m20.487 17.14-4.065-3.696a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a.997.997 0 0 0-.085-1.39z"></path>
                            </svg>
                            <input
                                placeholder="Telefono: "
                                className="w-full bg-primary outline-none text-secondary"
                                type="number"
                                onChange={(e) => { setTelefono(e.target.value) }}
                            />
                        </div>

                        <div className="flex flex-row h-10 bg-primary justify-center items-center px-3 rounded-lg shadow-lg shadow-black/30 hover:scale-105 ease-out duration-200">
                            <svg className='fill-secondary'
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="m20.487 17.14-4.065-3.696a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a.997.997 0 0 0-.085-1.39z"></path>
                            </svg>
                            <input
                                placeholder="Direccion: "
                                className="w-full bg-primary outline-none text-secondary"
                                type="number"
                                onChange={(e) => { setDireccion(e.target.value) }}
                            />
                        </div>

                        <div className="flex flex-row h-10 bg-primary justify-center items-center px-3 rounded-lg shadow-lg shadow-black/30 hover:scale-105 ease-out duration-200">
                            <svg
                                className="fill-secondary"
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                fill="currentColor"
                                viewBox="0 0 16 16"
                            >
                                <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z" />
                            </svg>

                            <input
                                autoComplete="off"
                                placeholder="Email: "
                                className="w-full bg-primary outline-none text-secondary"
                                type="email"
                                onChange={(e) => { setEmail(e.target.value) }}
                            />
                        </div>

                        <div className="flex flex-row h-10 bg-primary justify-center items-center px-3 rounded-lg shadow-lg shadow-black/30 hover:scale-105 ease-out duration-200">
                            <svg
                                className="fill-secondary"
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                fill="currentColor"
                                viewBox="0 0 16 16"
                            >
                                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                            </svg>
                            <input
                                placeholder="Contraseña: "
                                className="w-full bg-primary outline-none text-secondary"
                                type="password"
                                onChange={(e) => { setContraseña(e.target.value) }}
                            />
                        </div>
                    </div>

                    <div className="flex flex-row w-3/4 items-center justify-center gap-5">
                        <button className="w-1/2 text-primary text-center bg-secondary rounded-xl lg:text-xl text-lg p-3 mt-8  hover:scale-105 ease-out duration-200" onClick={handleclick}>
                            Registrarse
                        </button>
                    </div>
                    <div className="flex flex-row w-3/4 items-center justify-center gap-5">
                        <button
                            className="w-1/2 text-primary text-center bg-secondary rounded-xl lg:text-xl text-lg p-3 hover:scale-105 ease-out duration-200"
                            onClick={() => {
                                if (sessionStorage.getItem("cliente")) {
                                    navigate("/Home")
                                } else {
                                    navigate("/");
                                }
                            }}
                        >
                            Volver
                        </button>
                    </div>
                </form >
            </div >
        </>
    );
}

export default Singup
