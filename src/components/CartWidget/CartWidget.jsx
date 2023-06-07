import React from 'react'
import './CartWidget.css'

const CartWidget = () => {
  return (
    <div className='carrito'>
        <img src="src/assets/img/shopping-cart.png" alt="Carrito de compras"/>
        <span className='numero-carrito'>5</span>
    </div>
  )
}

export default CartWidget