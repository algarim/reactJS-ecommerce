import { useState, createContext, useEffect } from "react";

//2) Creamos un nuevo contexto: 

export const CarritoContext = createContext({
    carrito: [],
    total: 0,
    cantidadTotal: 0
})

export const CarritoProvider = ({children}) => {

    // Defino estados carrito, total y cantidadTotal usando localStorage
    
    const [carrito, setCarrito] = useState( () => {
        const carritoGuardado = localStorage.getItem("carrito");

        const carritoInicial = carritoGuardado ? JSON.parse(carritoGuardado) : [];
        return carritoInicial;
    } );

    const [total, setTotal] = useState( () => {
        const totalGuardado = localStorage.getItem("total");

        const totalInicial = Number(totalGuardado) || 0;
        return totalInicial; 
    });

    const [cantidadTotal, setCantidadTotal] = useState( () => {
        const cantidadTotalGuardada = localStorage.getItem("cantidadTotal");

        const cantidadTotalInicial = Number(cantidadTotalGuardada) || 0;
        return cantidadTotalInicial; 
    });

    // Actualizo el localStorage cuando alguno de los parámetros cambia
    useEffect( () => {
        localStorage.setItem("carrito", JSON.stringify(carrito) );
        localStorage.setItem("total", total);
        localStorage.setItem("cantidadTotal", cantidadTotal);
    }, [carrito, total, cantidadTotal] )

    // METODOS: agregar y eliminar elementos; vaciar carrito

    function agregarProducto(item, cantidad) {
        let productoExistente = carrito.find( prod => prod.item.id === item.id );

        if (!productoExistente){
            setCarrito(prev => [...prev, {item, cantidad}]);
            setTotal( prev => prev + item.precio * cantidad );
            setCantidadTotal( prev => prev + cantidad );
        } else{
            const carritoActualizado = carrito.map( prod => {
                if ( prod.item.id === item.id ){
                    return {...prod, cantidad: prod.cantidad + cantidad};
                } else{
                    return prod;
                }
            } );

            setCarrito( carritoActualizado );
            setTotal( prev => prev + item.precio * cantidad );
            setCantidadTotal( prev => prev + cantidad );
        }
    }

    function eliminarProducto(id) {
        const productoEliminado = carrito.find ( prod => prod.item.id === id);
        const carritoActualizado = carrito.filter( prod => prod.item.id !== id);

        setCarrito(carritoActualizado);
        setTotal( prev => prev - productoEliminado.item.precio * productoEliminado.cantidad )
        setCantidadTotal( prev => prev - productoEliminado.cantidad );
    }


    function vaciarCarrito() {
        setCarrito([]);
        setTotal(0);
        setCantidadTotal(0);
    }

    return (
        <CarritoContext.Provider value={{carrito, total, cantidadTotal, agregarProducto, eliminarProducto, vaciarCarrito}}>
            {children}
        </CarritoContext.Provider>
    )
}