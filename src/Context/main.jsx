import React, { useState } from "react";
export const Context = React.createContext();

export default function ContextProvider({ children }) {
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("");
  const [cart, setCart] = useState([]);

  return (
    <Context.Provider value={{ busqueda, setBusqueda, categoria, setCategoria, cart, setCart }}>
      {children}
    </Context.Provider>
  );
}
