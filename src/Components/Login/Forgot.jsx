import { useNavigate } from 'react-router-dom';
import { React, useRef, useState } from "react";
import Logo from "../../images/Logo.png";
import axios from 'axios';

function Forgot() {
  const navigate = useNavigate();
  const messageRef = useRef(null);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setmensaje] = useState("");

  function mostrarMensaje(men) {
    setmensaje(men);
    document.getElementById("mensaje").style.visibility = "visible";
    document.getElementById("mensaje").classList.add("animacion");
    setTimeout(function () { document.getElementById("mensaje").style.visibility = "hidden"; }, 4000);
  }

  function handleClick(e) {
    e.preventDefault();

    axios
      .get(`https://ecommerceback-dlmy.onrender.com/api/client/${email}/`)
      .then((response) => {
        const cliente = response.data
        cliente.password = password;

        axios
          .patch(
            `https://ecommerceback-dlmy.onrender.com/api/client/${email}/`, cliente)
          .then(() => {
            mostrarMensaje("Password changed successfully")
            setTimeout(function () { navigate('/') }, 3500);
          })
          .catch(() => {
            mostrarMensaje("We couldn't change the password at this time, please try again later")
          });
      })
      .catch(() => {
        mostrarMensaje("Email does not exist")
      });
  }

  return (
    <>
      <div className="divcontenedor">
        <form className="form">
          <p id="heading">Forgot Password</p>
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
          <p ref={messageRef} id="mensaje">
            {mensaje}
          </p>
        </form>
        <img id="logo" src={Logo} alt="Logo" width="600px" height={"600px"} />
      </div>
    </>
  );
}

export default Forgot;
