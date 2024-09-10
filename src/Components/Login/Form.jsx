import { useNavigate } from 'react-router-dom';
import { React, useState, useContext } from "react";
import axios from "axios";
import Usuario from './Iconousuario';
import Iconocontra from './Iconocontra';
import Alerta from './Alerta';
import { Context } from '../../Context/main'


function Form() {
	const navigate = useNavigate();
	const context = useContext(Context)
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");


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
					context.setOpen(true)
					context.setSeverity("error")
					context.setMensaje("Contraseña incorrecta");
				} else {
					context.setOpen(true)
					context.setSeverity("error")
					context.setMensaje("El usuario no esta registrado");
				}
			});
	}


	return (
		<>
			<div className="flex flex-row h-screen w-full items-center justify-center p-8">
				<form className="flex flex-col w-full sm:w-1/2  h-[32rem] items-center gap-5 bg-white-400/30 m-4 px-4 pt-2 pb-2 rounded-lg border border-white/10 shadow-md shadow-black backdrop-blur-sm">
					<h1 className='text-center text-primary font-extrabold text-4xl sm:m-5'>Iniciar Sesión</h1>
					<div id='usuario' className="flex flex-row h-10 w-3/5 bg-primary justify-center items-center px-3 gap-x-3 rounded-lg shadow-lg shadow-black/30 hover:scale-105 ease-out duration-200">
						<Usuario />
						<input
							autoComplete="on"
							placeholder="Email:"
							className="w-full bg-primary outline-none text-secondary"
							type="text"
							onChange={(e) => { setEmail(e.target.value) }}
						/>
					</div>
					<div id='contraseña' className="flex flex-row h-10 w-3/5 bg-primary justify-center items-center px-3 gap-x-3 rounded-lg shadow-lg shadow-black/30 hover:scale-105 ease-out duration-200">
						<Iconocontra />
						<input
							autoComplete="on"
							placeholder="Contraseña:"
							className="w-full bg-primary outline-none text-secondary"
							type="password"
							onChange={(e) => { setPassword(e.target.value) }}
						/>
					</div>
					<div className="flex w-3/5 justify-end ">
						<p
							onClick={() => { navigate("/forgot") }}
							className='items-center justify-center text-sm text-primary hover:cursor-pointer hover:underline'
						>
							Olvidaste tu contraseña?
						</p>
					</div>
					<div className='h-16 w-3/5 justify-center'>
						<Alerta />
					</div>
					<div className="flex flex-row w-3/4 items-center justify-center gap-5">
						<button className="w-1/2 text-primary text-center bg-secondary rounded-xl lg:text-xl text-lg p-3 mt-8  hover:scale-105 ease-out duration-200" onClick={handleClick}>
							Iniciar
						</button>
						<button className="w-1/2 text-primary text-center bg-secondary rounded-xl lg:text-xl text-lg p-3 mt-8  hover:scale-105 ease-out duration-200" onClick={() => { navigate('/signup') }}>
							Registrarse
						</button>
					</div>

				</form>
				<div className='hidden sm:w-1/2 sm:flex sm:justify-center sm:flex-col sm:items-center'>
					<h1 className='text-8xl text-primary font-[Pacifico] cursor-default hover:scale-125 ease-out duration-500'>Sadimi</h1>
				</div>

			</div >
		</>
	);
}

export default Form;
