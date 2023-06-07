import React, { useContext } from 'react'
import "./Header.css";
import { useNavigate } from 'react-router-dom';
import { Context } from "../../Context/main"
import Home from '../Home/Home';
import axios from 'axios';

function Header() {
    const context = useContext(Context)
    const cliente = JSON.parse(sessionStorage.getItem("cliente"))
    const navigate = useNavigate("");
    const logo = "https://res.cloudinary.com/dbvltbvea/image/upload/v1681261966/Logo_lmojv5.png"

    const user = JSON.parse(sessionStorage.getItem("cliente"));

    function handleChange(e) {
        if (e.target.value === "1") {
            context.setCategoria("console");
            return <Home />;
        } else if (e.target.value === "2") {
            context.setCategoria("license");
            return <Home />;
        } else if (e.target.value === "3") {
            context.setCategoria("subscription");
            return <Home />;
        } else {
            context.setCategoria("");
            return <Home />;
        }
    }
    function handleChange2(e) {
        context.setBusqueda(e.target.value);
    }

    function handleChange3(e) {
        switch (e.target.value) {
            case "1":
                navigate("/Change")
                break;
            case "2":
                navigate("")
                break;
            case "3":
                navigate("")
                break;
            case "4":
                axios.delete(`https://ecommerceback-dlmy.onrender.com/api/client/${cliente.email}`)
                    .then((response) => {
                        console.log('Elemento eliminado exitosamente: ' + response.data);
                        sessionStorage.clear()
                        setTimeout(() => {
                            navigate("/")
                        }, 4000)
                    })
                    .catch(error => {
                        console.error('Error al eliminar el elemento:', error);
                    });
                break;
            case "5":
                navigate("")
                break;
            case "6":
                navigate("")
                break;
            case "7":
                navigate("")
                break;
            case "8":
                navigate("")
                break;
            case "9":
                navigate("")
                break;
            default:
                break;
        }
    }

    return (
        <header>
            <img id='logo' src={logo} alt="Logo Sadimi" width="100px" onClick={() => {
                navigate("/home")
            }} />
            <input id='buscador' type="text" placeholder='Search' onChange={handleChange2}></input>
            <nav id='nav-header'>
                <select name="Categories" id="categories" className='menu' onChange={handleChange}>
                    <option value="4">Categories</option>
                    <option value="1">Console</option>
                    <option value="2">License</option>
                    <option value="3">Subscriptions</option>
                </select>

                <ul>
                    <li>
                        {user.admin === "Off" ? (<select name="Profile" id="Profile" className='menu' onChange={handleChange3} >
                            <option defaultValue>{cliente.fullname}</option>
                            <option value="1">Change password</option>
                            <option value="2">History</option>
                            <option value="3">Payment methods</option>
                            <option value="4">Delete Account</option>
                        </select>) : (<select name="Admin" id="Admin" className='menu' onChange={handleChange3}>
                            <option defaultValue>Admin</option>
                            <option value="5">Add product</option>
                            <option value="6">Add user</option>
                            <option value="7">Edit product</option>
                            <option value="8">Delete product</option>
                        </select>)}
                    </li>
                    <li>
                        <p id='cart-cant' style={{ display: context.cart.length === 0 ? 'none' : 'block' }} onClick={() => {
                            navigate("/Cart");
                        }}>
                            {context.cart.length}
                        </p>
                        <i className='bx bx-cart bx-md' onClick={() => {
                            navigate("/Cart");
                        }}></i>
                    </li>
                    <li id='li-logout'>
                        <div id='div-logout'
                            onClick={() => {
                                context.setBusqueda("");
                                sessionStorage.clear();
                                navigate("/")
                            }}
                        >
                            <i className='bx bx-log-out-circle bx-md'></i>
                        </div>
                    </li>
                </ul>
            </nav>

        </header >


    )
}

export default Header