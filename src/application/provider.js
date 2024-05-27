import { createContext, useState } from "react";

const MyProvider = (props) => {   // ESTADO GLOBAL: 1 OBJETOS CON 2 ESTADOS GLOBALES
  const [state, setState] = useState({q:"U2",videoSeleccion: 0});  // inicializo el estado del objeto con una propiedad de búsqueda pq sino toma undefined
  

  return (
    <div>
      <AppContext.Provider value={[state, setState]}>
        {props.children}
      </AppContext.Provider>
    </div>
  );
};
/* 
const MyProviderTxt = (props) => {
  const [q, setQ] = useState("Queen");

  return (
    <div>
      <AppContext.Provider value={[q, setQ]}>
        {props.children}
      </AppContext.Provider>
    </div>
  );
}; */
export { MyProvider };
export const AppContext = createContext();
