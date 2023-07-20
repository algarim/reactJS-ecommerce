import { useState } from "react"

// CSS
import "./ItemCount.css"

const ItemCount = ({ inicial, stock, mostrarContador = true, funcionAgregar }) => {
    const [contador, setContador] = useState(inicial);

    // Función para incrementar contador
    const incrementarContador = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    // Función para disminuir contador
    const decrementarContador = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    }

    return (
        <div className="add-to-cart-button">
            {mostrarContador && (
                <div className="d-flex align-items-center counter">
                    <button onClick={decrementarContador} className="button boton-decrementar"> - </button>
                    <span className="counter-number"> {contador} </span>
                    <button onClick={incrementarContador} className="button boton-incrementar"> + </button>
                </div>
                )
            }

            <button onClick={() => funcionAgregar(contador)} className="button">Agregar al carrito</button>
        </div>
    )
}

export default ItemCount