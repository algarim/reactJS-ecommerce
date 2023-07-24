import CartItem from "../CartItem/CartItem"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { CarritoContext } from "../../context/CarritoContext"

//CSS
import "./Cart.css"

const Cart = () => {
    const { carrito, total, cantidadTotal, vaciarCarrito } = useContext(CarritoContext);

    if (cantidadTotal === 0) {
        return (
            <div id="carrito">
                <h3 className="mb-4">El carrito está vacío</h3>
                <Link to="/" className="button"> Volver a la tienda </Link>
            </div>
        )
    }

    return (
        <div id="carrito">
            <h2>Su carrito</h2>

            <hr />

            {carrito.map(prod => <CartItem key={prod.item.id} {...prod} />)}

            <hr />

            
            <h3 className="fs-4"> Total: $ {total} </h3>

            <div className="carrito-buttons">

            <button onClick={() => vaciarCarrito()} className="button">Vaciar carrito</button>

            <Link to='/checkout' className="button button-alt" > Finalizar compra </Link>

            </div>
        </div>
    )
}

export default Cart