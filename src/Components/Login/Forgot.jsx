import React from "react";
import Form from "./Form";
import Logo from "../../images/Logo.png";

function Forgot() {
  return (
    <>
      <div className="divcontenedor">
        <Form comp={"forgot"} />
        <img src={Logo} alt="Logo" width="480px" />
      </div>
    </>
  );
}

export default Forgot;
