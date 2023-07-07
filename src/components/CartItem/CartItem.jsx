import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext";


const CartItem = ({item, cantidad}) => {
    const {eliminarProducto} = useContext(CarritoContext);

  return (
    <div>
        <h3>{item.nombre}</h3>
        <p> Cantidad: {cantidad} </p>
        <p>${item.precio * cantidad}</p>
        <button onClick={() => eliminarProducto(item.id)}> Eliminar producto </button>
    </div>
  )
}

export default CartItem