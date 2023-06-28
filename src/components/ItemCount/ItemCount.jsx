import React from "react";
import { useState } from "react"

const ItemCount = () => {
    const [contador, setContador] = useState(1);

    const stock = 10;

    // Función para incrementar contador
    const incrementarContador = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    // Función para disminuir contador
    const decrementarContador = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }
    }

    return (
        <div className="d-flex align-items-center">
            <button onClick={decrementarContador} className="btn"> - </button>
            <span> {contador} </span>
            <button onClick={incrementarContador} className="btn"> + </button>
        </div>
    )
}

export default ItemCount