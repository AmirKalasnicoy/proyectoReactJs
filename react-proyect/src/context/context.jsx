import { createContext, useContext,useState } from "react";

const AppContext= createContext();

 export const useAppContext= () => useContext(AppContext);

export const ContextProvider = (props)=>{

    const [carrito,setCarrito]= useState([])

    function agregarAlCarrito(prod, cantidad) {
        const nuevoProducto = {
          ...prod,
          cantidad: cantidad,
        };
      
        if (carrito.some(el => el.id === prod.id)) {
          const nuevoCarrito = carrito.map(el => {
            if (el.id === prod.id) {
              return {
                ...el,
                cantidad: el.cantidad + cantidad 
              };
            }
            return el;
          });
      
          setCarrito(nuevoCarrito);
        } else {
          setCarrito([...carrito, nuevoProducto]);
        }
      
        console.log("Agregado al carrito:", nuevoProducto);
      }

      function vaciarCarrito() {
        setCarrito([]);
      }
      

    return(
        <AppContext.Provider value={{carrito,agregarAlCarrito,vaciarCarrito }}>
            {props.children}
        </AppContext.Provider>
    )
}