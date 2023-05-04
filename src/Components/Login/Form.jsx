import { useNavigate } from 'react-router-dom';
import { React, useRef } from "react";
// import axios from "axios";

import "./Login.css";

function Form(props) {
  // const [password, setPassword] = useState("");
  // const [user, setUser] = useState("");
  const navigate = useNavigate();
  const messageRef = useRef(null);

  // function contraseña(event) {
  //   setPassword(event.target.value);
  // }

  // function usuario(event) {
  //   setUser(event.target.value);
  // }

  if (props.comp === "login") { // para Login 

    function handleClick(e) {
      e.preventDefault();
      navigate('/Home');
      // axios
      //   .get(`https://randomuser.me/api/`)
      //   .then((response) => {
      //     if (
      //       response.data.password === password &&
      //       response.data.username === user
      //     ) {
      //       sessionStorage.setItem("user", JSON.stringify(response.data));
      //       navigate("/home");
      //     } else {
      //       document.getElementById("mensaje").style.display = "block";
      //       document.getElementById("mensaje").classList.add("animacion");
      //       setTimeout(function () {
      //         document.getElementById("mensaje").style.display = "none";
      //       }, 4000);
      //     }
      //   })
      //   .catch(() => {
      //     document.getElementById("mensaje").style.display = "block";
      //     document.getElementById("mensaje").classList.add("animacion");
      //     setTimeout(function () {
      //       document.getElementById("mensaje").style.display = "none";
      //     }, 4000);
      //   });
    }

    return (
      <form className="form">
        <p id="heading">Login</p>
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
            placeholder="Username"
            className="input-field"
            type="text"
          // onChange={usuario}
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
          //onChange={contraseña}
          />
        </div>
        <div className="btn">
          <button className="button1" onClick={handleClick}>
            Login
          </button>
          <button className="button1" onClick={() => { navigate('/singup') }}>
            Singup
          </button>
        </div>
        <div className="btn">
          <button
            onClick={() => {
              navigate("/Forgot");
            }}
            className="button3"
          >
            Forgot Password
          </button>
        </div>
        <p ref={messageRef} id="mensaje" style={{ display: "none" }}>
          Invalid username or password!
        </p>
      </form>
    );

  } else if (props.comp === "forgot") { // Cuando es Forgot password

    function handleClick(e) {
      e.preventDefault();
      // let user = {};
      // axios
      //   .get(`https://sadimi-eoya.onrender.com/api/employee/${user}`)
      //   .then((response) => {
      //     user = response.data;
      //     user.password = password;

      //   axios
      //     .patch(
      //       `https://sadimi-eoya.onrender.com/api/employee/${user}`,
      //       user
      //     )
      //     .then(() => {
      //       document.getElementById("mensaje2").style.display = "block";
      //       document.getElementById("mensaje2").classList.add("animacion");
      //       setTimeout(function () {
      //         document.getElementById("mensaje2").style.display = "none";
      //         navigate("/");
      //       }, 5000);
      //     })
      //     .catch((e) => {
      //       console.log("No se pudo cambiar la contraseña: Error" + e);
      //       document.getElementById("mensaje").style.display = "block";
      //       document.getElementById("mensaje").classList.add("animacion");
      //       setTimeout(function () {
      //         document.getElementById("mensaje").style.display = "none";
      //       }, 4000);
      //     });
      // })
      // .catch(() => {
      //   console.log("El usuario ingresado no existe");
      //   document.getElementById("mensaje").style.display = "block";
      //   document.getElementById("mensaje").classList.add("animacion");
      //   setTimeout(function () {
      //     document.getElementById("mensaje").style.display = "none";
      //   }, 4000);
      // });
    }

    return (
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
            placeholder="Username"
            className="input-field"
            type="text"
          // onChange={usuario}
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
          // onChange={contraseña}
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
        <p ref={messageRef} id="mensaje" style={{ display: "none" }}>
          Invalid username
        </p>
        <p ref={messageRef} id="mensaje2" style={{ display: "none" }}>
          Password change successful
        </p>
      </form>
    );
  } else { //Cuando es Singup

    return (
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
            placeholder="Name"
            className="input-field"
            type="text"
          //onChange={name}
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
            <path d="M12 22s8.029-5.56 8-12c0-4.411-3.589-8-8-8S4 5.589 4 9.995C3.971 16.44 11.696 21.784 12 22zM8 9h3V6h2v3h3v2h-3v3h-2v-3H8V9z"></path>
          </svg>
          <input
            placeholder="Addres"
            className="input-field"
            type="text"
          // onChange={addres}
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
            placeholder="Username"
            className="input-field"
            type="text"
          //onChange={usuario}
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
          // onChange={contraseña}
          />
        </div>

        <div className="btn">
          <button className="button1" >
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
        <p ref={messageRef} id="mensaje" style={{ display: "none" }}>
          Invalid username
        </p>
        <p ref={messageRef} id="mensaje2" style={{ display: "none" }}>
          Successfully registered
        </p>
      </form>
    );
  }
}

export default Form;
