import { useNavigate } from 'react-router-dom';
import { React, useRef, useState } from "react";
import Logo from "../../images/Logo.png";
import axios from "axios";

import Usuario from './Iconousuario';
import Iconocontra from './Iconocontra';

function Form() {
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const navigate = useNavigate();
	const messageRef = useRef(null);
	const [mensaje, setmensaje] = useState("");

	function mostrarMensaje(men) {
		setmensaje(men);
		document.getElementById("mensaje").style.visibility = "visible";
		setTimeout(function () { document.getElementById("mensaje").style.visibility = "hidden"; }, 4000);
	}

	function handleClick(e) {
		e.preventDefault();

		axios
			.post(`https://ecommerceback-dlmy.onrender.com/api/login/`, {
				email: email,
				password: password
			})
			.then((response) => {
				response.data.password = password
				sessionStorage.setItem("cliente", JSON.stringify(response.data));
				navigate("/home")
			})
			.catch((e) => {
				if (e.response.data.message) {
					mostrarMensaje("Invalid Password");
				} else {
					mostrarMensaje("This user does not exist");
				}
			});
	}


	return (
		<>
			<div className="flex flex-row h-screen w-full items-center justify-center p-8">
				<form className=" flex flex-col w-full sm:w-1/2 justify-center items-center gap-5 bg-white-400/30 m-4 rounded-lg border border-white/10 shadow-lg shadow-gray-500 backdrop-blur-sm">
					<h1 className='text-center text-primary font-extrabold text-4xl sm:mt-5'>Login</h1>
					<div id='usuario' className="flex flex-row h-10 w-2/5 bg-primary justify-center items-center px-3 gap-x-3 rounded-lg shadow-lg shadow-black/30">
						<Usuario />
						<input
							autoComplete="on"
							placeholder="Usuario"
							className="w-full bg-primary outline-none text-secondary"
							type="text"
							onChange={(e) => { setEmail(e.target.value) }}
						/>
					</div>
					<div id='contraseña' className="flex flex-row h-10 w-2/5 bg-primary justify-center items-center px-3 gap-x-3 rounded-lg shadow-lg shadow-black/30">
						<Iconocontra />
						<input
							autoComplete="on"
							placeholder="Contraseña"
							className="w-full bg-primary outline-none text-secondary"
							type="password"
							onChange={(e) => { setPassword(e.target.value) }}
						/>
					</div>
					<div className="flex w-2/5 justify-end ">
						<p
							onClick={() => { navigate("/forgot") }}
							className='items-center justify-center text-sm text-primary hover:cursor-pointer hover:underline'
						>
							Olvidaste tu contraseña?
						</p>
					</div>

					<div className="flex flex-row w-3/4 items-center gap-5 mt-10">
						<button className="w-1/2 text-primary text-center bg-secondary rounded-xl lg:text-2xl text-lg px-8 py-2" onClick={handleClick}>
							Iniciar
						</button>
						<button className="w-1/2 text-primary text-center bg-secondary rounded-xl lg:text-xl text-lg px-8 py-2" onClick={() => { navigate('/signup') }}>
							Registrarse
						</button>
					</div>

					<p ref={messageRef} id="mensaje">
						{mensaje}
					</p>
				</form>
				<div className='hidden sm:w-1/2 sm:flex sm:justify-center sm:flex-col sm:items-center'>
					<img src={Logo} alt="" />
				</div>

			</div >
		</>
	);
}

export default Form;
