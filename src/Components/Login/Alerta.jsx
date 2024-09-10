import { React, useContext } from "react";
import { Alert } from '@mui/material';
import { Context } from '../../Context/main'


function Alerta() {

    const context = useContext(Context)

    const handleClose = () => {
        context.setOpen(false); // Cierra la alerta cuando se llama a handleClose
    };

    return (

        <>

            {
                context.open && (
                    <div className="ease-in-out duration-500">
                        <Alert severity={context.severity} onClose={handleClose}>
                            {context.mensaje}
                        </Alert>
                    </div>
                )
            }
        </>

    )
}

export default Alerta