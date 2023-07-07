import CartItem from "../CartItem/CartItem"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { CarritoContext } from "../../context/CarritoContext"

const Cart = () => {
    const { carrito, total, cantidadTotal, vaciarCarrito } = useContext(CarritoContext);

    if (cantidadTotal === 0) {
        return (
            <>
                <h3>El carrito está vacío</h3>
                <Link to="/"> Volver a la tienda </Link>
            </>
        )
    }

    return (
        <div>
            {carrito.map( prod => <CartItem key={prod.item.id} {...prod} /> )}

            <h3> Total: $ {total} </h3>
            <h4> Cantidad de productos: {cantidadTotal} </h4>
            <button onClick={() => vaciarCarrito()}>Vaciar carrito</button>

            <Link to='/checkout' > Finalizar compra </Link>
        </div>
    )
}

export default Cart