import React, { useState } from "react";
export const Context = React.createContext();

export default function ContextProvider({ children }) {
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("");

  return (
    <Context.Provider value={{ busqueda, setBusqueda, categoria, setCategoria }}>
      {children}
    </Context.Provider>
  );
}
