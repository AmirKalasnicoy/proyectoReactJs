import { createContext, useContext,useState } from "react";

const AppContext= createContext();

 export const useAppContext= () => useContext(AppContext);

export const ContextProvider = (props)=>{

    const [carrito,setCarrito]= useState([])

    function agregarAlCarrito(prod,cantidad) {
        const nuevoProducto = {
            ...prod,
            cantidad: 1,
        };
        if(carrito.some(el=> el.id===prod.id)){
            const newCarrito= carrito.map(element=>{
                if(element.id===prod.id){
                    return{
                        ...element,
                        cantidad: element.cantidad+prod.cantidad
                    }
                }else{
                    return element;
                }
            })
            setCarrito(newCarrito)
        }else{
            setCarrito([...carrito,nuevoProducto])
        }

        console.log("Vas a agregar", nuevoProducto);
    };

    return(
        <AppContext.Provider value={{carrito,agregarAlCarrito}}>
            {props.children}
        </AppContext.Provider>
    )
}