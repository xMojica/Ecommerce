import React from "react";
import Logo from "../../images/Logo.png";
import Form from "./Form";

function Singup() {
    return (
        <>
            <div className="divcontenedor">
                <Form comp={"singup"} />
                <img src={Logo} alt="Logo" width="480px" />
            </div>
        </>
    );
}

export default Singup
