import React, { useContext } from 'react'
import "boxicons";
import "./Header.css";
import { useNavigate } from 'react-router-dom';
import { Context } from "../../Context/main"


function Header() {
    const context = useContext(Context)
    const navigate = useNavigate("");
    const logo = "https://res.cloudinary.com/dbvltbvea/image/upload/v1681261966/Logo_lmojv5.png"

    function handleChange(e) {
        sessionStorage.setItem("Busqueda", e.target.value);
        context.setBusqueda(e.target.value)
    }

    return (
        <header>
            <img id='logo' src={logo} alt="Logo Sadimi" width="100px" />
            <input id='buscador' type="text" placeholder='Search' onChange={handleChange}></input>
            <nav id='nav-header'>
                <ul>
                    <li>Categories</li>
                    <li>Profile</li>
                    <li>
                        <box-icon name='cart' color='#ffffff' size="md"></box-icon>
                    </li>
                    <li id='li-logout'>
                        <div id='div-logout'
                            onClick={() => {
                                navigate("/");
                                sessionStorage.clear();
                            }}
                        >
                            <box-icon name='log-out-circle' color='#ffffff' size="md"></box-icon>
                        </div>
                    </li>
                </ul>
            </nav>


        </header >

    )
}

export default Header