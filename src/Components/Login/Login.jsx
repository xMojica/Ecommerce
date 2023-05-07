import React from "react";
import Logo from "../../images/Logo.png";
import Form from "./Form";
import './Login.css'

function Login() {
  return (
    <>
      <div className="divcontenedor">
        <Form />
        <img id="logo" src={Logo} alt="Logo" width="600px" />
      </div>
    </>
  );
}

export default Login;
