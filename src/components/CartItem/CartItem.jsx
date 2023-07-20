import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext";

//CSS
import "./CartItem.css"

const CartItem = ({ item, cantidad }) => {
  const { eliminarProducto } = useContext(CarritoContext);

  return (
    <div>

      <div className="card mb-3">
        <div className="row g-0 d-flex align-items-center">

          <div className="col-md-4">
            <img src={item.img} className="img-fluid rounded-start" alt={item.nombre} />
          </div>

          <div className="col-md-8">

            <div className="card-body">

              <div className="carrito-item-info">

                <div className="carrito-item-descripcion">
                  <h5 className="card-title"> {item.nombre} </h5>

                  <div className="card-text precio">
                    <span> {item.precio} </span>
                    <img className='currency-icon d-inline-block px-1' src="../img/heart.png" alt="corazones" />
                  </div>
                </div>



                <div>

                  <div className="carrito-item-cantidad">
                    <p className="card-text m-0"> Cantidad: {cantidad}</p>
                    <button className="carrito-item-eliminar btn p-0" onClick={() => eliminarProducto(item.id)}>
                      <img src="../img/bin.png" alt="Eliminar producto" />
                    </button>
                  </div>

                </div>

              </div>

              <div className="carrito-item-subtotal precio">
                <span> Subtotal: {item.precio * cantidad} </span>
                <img className='currency-icon d-inline-block px-1' src="../img/heart.png" alt="corazones" />
              </div>



            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default CartItem