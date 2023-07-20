import { useContext } from "react"
import { Link } from "react-router-dom"
import { CarritoContext } from "../../context/CarritoContext"

//Style
import './CartWidget.css'


const CartWidget = () => {
  const {cantidadTotal} = useContext(CarritoContext)

  return (
    <Link to='/cart' className='carrito-widget'>
        <img src="../img/shopping-cart.png" alt="Carrito de compras"/>
        {(cantidadTotal>0) && <span className='numero-carrito-widget'> {cantidadTotal} </span>}
    </Link>
  )
}

export default CartWidget