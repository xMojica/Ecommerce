import React from 'react';
import { useContext } from 'react';
import data from './data';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../Context/main';

// import axios from 'axios';

import './Home.css';

function Products(props) {
    const context = useContext(Context)
    const navigate = useNavigate();
    // const [data, setData] = useState({})

    // useEffect(() => {
    //     axios.get('https://ecommerceback-dlmy.onrender.com/api/product')
    //         .then((response) => {
    //             if (response.data[0] !== null) { // OJO ACA
    //                 sessionStorage.setItem('Products', JSON.stringify(response.data));
    //                 setData(response.data[0]);
    //             } else {
    //                 // Aquí puedes mostrar un mensaje en caso de que no haya productos
    //                 console.log('No hay productos');
    //             }
    //         })
    //         .catch((error) => {
    //             // Manejo de errores en caso de que la llamada falle
    //             console.error('Error al obtener los productos:', error);
    //         });
    // }, []);


    function handleClick(product) {
        navigate("/Article")
        sessionStorage.setItem("Article", JSON.stringify(product));
    }

    return (
        <>
            {context.busqueda === "" ? (
                // Mostrar todos los productos sin filtrar
                data.products.map((product) => {
                    if (props.categoria && product.category !== props.categoria) {
                        return null;
                    }

                    return (
                        <div key={product.id} className="product" onClick={() => handleClick(product)}>
                            <img src={product.image} alt={product.name} height="335px" />
                            <div className="product-info">
                                <h3>{product.name}</h3>
                            </div>
                            <div className="overview">
                                <h3>${product.price} USD</h3>
                            </div>
                        </div>
                    );
                })
            ) : (
                // Realizar búsqueda en la data por nombre
                data.products
                    .filter((product) => product.name.toLowerCase().includes(context.busqueda.toLowerCase()))
                    .map((product) => {
                        // if (props.categoria && product.category !== props.categoria) {
                        //     return null;
                        // }
                        return (
                            <div key={product.id} className="product" onClick={() => handleClick(product)}>
                                <img src={product.image} alt={product.name} height="335px" />
                                <div className="product-info">
                                    <h3>{product.name}</h3>
                                </div>
                                <div className="overview">
                                    <h3>${product.price} USD</h3>
                                </div>
                            </div>
                        );
                    })
            )}
        </>
    );

}

export default Products;
