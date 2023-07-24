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
                  <h5 className="card-title fs-4"> {item.nombre} </h5>

                  <div className="card-text precio precio-unidad">
                    <span> precio x unidad: </span>
                    <span className="ms-2"> {item.precio}  </span>
                    <img className='currency-icon d-inline-block px-1' src="../img/heart.png" alt="corazones" />
                  </div>

                  <p className="card-text m-2"> Cantidad: {cantidad}</p>
                </div>



                <div className="precio fs-5">
                  <span> {item.precio * cantidad} </span>
                  <img className='currency-icon d-inline-block px-1' src="../img/heart.png" alt="corazones" />
                </div>


                <div>
                  <button className="carrito-item-eliminar btn p-0" onClick={() => eliminarProducto(item.id)}>
                    <img src="../img/bin.png" alt="Eliminar producto" />
                  </button>
                </div>


              </div>




            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default CartItem