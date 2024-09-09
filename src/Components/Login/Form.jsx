import { useNavigate } from 'react-router-dom';
import { React, useState } from "react";
import axios from "axios";
import Usuario from './Iconousuario';
import Iconocontra from './Iconocontra';
// import Icono from "./../../images/Logo.png"
import { Alert } from '@mui/material';

function Form() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();
	const [mensaje, setmensaje] = useState("");

	function mostrarMensaje(men) {
		setmensaje(men);
		setTimeout(function () {
			setmensaje("");

			// crear un componente alert que reciba por las props el mensaje a mostrar y valide el icono segun caso

		}, 4000);
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
					mostrarMensaje("Contraseña incorrecta");
				} else {
					mostrarMensaje("El usuario no esta registrado");
				}
			});
	}


	return (
		<>
			<div className="flex flex-row h-screen w-full items-center justify-center p-8">
				<form className=" flex flex-col w-full sm:w-1/2 justify-center items-center gap-5 bg-white-400/30 m-4 p-4 rounded-lg border border-black/20 shadow-lg shadow-black backdrop-blur-sm">
					<h1 className='text-center text-primary font-extrabold text-4xl sm:mt-5'>Iniciar Sesión</h1>
					<div id='usuario' className="flex flex-row h-10 w-2/5 bg-primary justify-center items-center px-3 gap-x-3 rounded-lg shadow-lg shadow-black/30">
						<Usuario />
						<input
							autoComplete="on"
							placeholder="Email:"
							className="w-full bg-primary outline-none text-secondary"
							type="text"
							onChange={(e) => { setEmail(e.target.value) }}
						/>
					</div>
					<div id='contraseña' className="flex flex-row h-10 w-2/5 bg-primary justify-center items-center px-3 gap-x-3 rounded-lg shadow-lg shadow-black/30">
						<Iconocontra />
						<input
							autoComplete="on"
							placeholder="Contraseña:"
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
					<Alert severity="success">conexion exitosa</Alert>
					<div className="flex flex-row w-3/4 items-center justify-center gap-5">
						<button className="w-1/2 text-primary text-center bg-secondary rounded-xl lg:text-xl text-lg px-8 mt-2" onClick={handleClick}>
							Iniciar
						</button>
						<button className="w-1/2 text-primary text-center bg-secondary rounded-xl lg:text-xl text-lg px-8 mt-2" onClick={() => { navigate('/singup') }}>
							Registrarse
						</button>
					</div>


				</form>
				<div className='hidden sm:w-1/2 sm:flex sm:justify-center sm:flex-col sm:items-center'>
					<h1 className='text-8xl text-primary font-[Pacifico] text-shadow-xl shadow-green-400'>Sadimi</h1>
				</div>

			</div >
		</>
	);
}

export default Form;
