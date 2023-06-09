import { useState } from "react"

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
                <div className="d-flex align-items-center">
                    <button onClick={decrementarContador} className="btn"> - </button>
                    <span> {contador} </span>
                    <button onClick={incrementarContador} className="btn"> + </button>
                </div>
                )
            }

            <button onClick={() => funcionAgregar(contador)} className="button">Agregar al carrito</button>
        </div>
    )
}

export default ItemCount