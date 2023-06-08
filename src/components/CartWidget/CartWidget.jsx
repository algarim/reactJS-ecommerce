import React from 'react'
import './CartWidget.css'
import iconoCarrito from "../../assets/img/shopping-cart.png"

const CartWidget = () => {
  return (
    <div className='carrito'>
        <img src={iconoCarrito} alt="Carrito de compras"/>
        <span className='numero-carrito'>5</span>
    </div>
  )
}

export default CartWidget