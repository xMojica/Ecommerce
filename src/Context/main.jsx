import React, { useState } from "react";
export const Context = React.createContext();

export default function ContextProvider({ children }) {
  const [busqueda, setBusqueda] = useState("");

  return (
    <Context.Provider value={{ busqueda, setBusqueda }}>
      {children}
    </Context.Provider>
  );
}
