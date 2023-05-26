import React, { useContext } from 'react'
import "boxicons";
import "./Header.css";
import { useNavigate } from 'react-router-dom';
import { Context } from "../../Context/main"
import Home from '../Home/Home';



function Header() {
    const context = useContext(Context)
    const navigate = useNavigate("");
    const logo = "https://res.cloudinary.com/dbvltbvea/image/upload/v1681261966/Logo_lmojv5.png"

    function handleChange(e) {
        if (e.target.value === "1") {
            context.setCategoria("console");
            return <Home />;
        } else if (e.target.value === "2") {
            context.setCategoria("license");
            return <Home />;
        } else if (e.target.value === "3") {
            context.setCategoria("Subscription");
            return <Home />;
        } else {
            context.setCategoria("");
            return <Home />;
        }
    }
    function handleChange2(e) {
        context.setBusqueda(e.target.value);
    }

    return (
        <header>
            <a href="/Home"><img id='logo' src={logo} alt="Logo Sadimi" width="100px" /></a>
            <input id='buscador' type="text" placeholder='Search' onChange={handleChange2}></input>
            <nav id='nav-header'>
                <select name="Categories" id="categories" onChange={handleChange}>
                    <option disabled selected>Categories</option>
                    <option value="1">Console</option>
                    <option value="2">License</option>
                    <option value="3">Subscriptions</option>
                    <option value="4">All</option>
                </select>

                <ul>
                    <li>Profile</li>
                    <li>
                        <box-icon name='cart' color='#ffffff' size="md"></box-icon>
                    </li>
                    <li id='li-logout'>
                        <div id='div-logout'
                            onClick={() => {
                                context.setBusqueda("");
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