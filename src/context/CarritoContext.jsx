import { useState, createContext } from "react";

//2) Creamos un nuevo contexto: 

export const CarritoContext = createContext({
    carrito: [],
    total: 0,
    cantidadTotal: 0
})

export const CarritoProvider = ({children}) => {
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);
    const [cantidadTotal, setCantidadTotal] = useState(0);

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
                    return {...prod, cantidad: cantidad};
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