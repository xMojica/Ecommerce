import React, { useState } from "react";
export const Context = React.createContext();

export default function ContextProvider({ children }) {
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("");
  const [cart, setCart] = useState([]);
  const [mensaje, setMensaje] = useState("");
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState("");

  return (
    <Context.Provider value={{ busqueda, setBusqueda, categoria, setCategoria, cart, setCart, mensaje, setMensaje, open, setOpen, severity, setSeverity }}>
      {children}
    </Context.Provider>
  );
}
