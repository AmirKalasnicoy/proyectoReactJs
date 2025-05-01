import { createContext, useContext,useState } from "react";

const AppContext= createContext();

 export const useAppContext= () => useContext(AppContext);

export const ContextProvider = (props)=>{

    const numero=1;
    const [carrito,setCarrito]= useState([])

    return(
        <AppContext.Provider value={{numero,carrito}}>
            {props.children}
        </AppContext.Provider>
    )
}