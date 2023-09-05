import { useContext, useState } from "react"
import { db } from "../../services/config"
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore"
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";

// CSS
import "./Checkout.css"

const Checkout = () => {

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [sinStock, setSinStock] = useState(false);
    const [ordenId, setOrdenId] = useState("");

    const [isLoading, setIsLoading] = useState(false);

    const { carrito, vaciarCarrito, total } = useContext(CarritoContext);


    // FUNCIONES Y VALIDACIONES

    const manejadorFormulario = (event) => {
        setIsLoading(true);

        event.preventDefault();

        //Verificamos que los campos estén completos:
        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Por favor, completa todos los campos.");
            return;
        }

        // Verificamos que los dos campos de email coincidan
        if (email !== emailConfirmacion) {
            setError("Los campos del email no coinciden");
            return;
        }

        // Creamos un objeto con los datos de la orden de compra
        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        };

        // Uso Promise.all para ejecutar varias promesas en paralelo: para cada uno de los productos comprados, cambiar el correspondiente stock en el inventario. 

        //Una vez resueltas dichas promesas, ejecutamos otra promesa que cree la orden de compra.

        Promise.all(
            orden.items.map(async (productoOrden) => {
                const productoRef = doc(db, "inventario", productoOrden.id);
                const productoDoc = await getDoc(productoRef);

                const stockActual = productoDoc.data().stock;

                if (stockActual - productoOrden.cantidad >= 0) {
                    setSinStock(false);

                    await updateDoc(productoRef, {
                        stock: stockActual - productoOrden.cantidad
                    })

                } else {
                    setSinStock(true);

                    throw new Error("No hay stock de alguno de los productos seleccionados.");
                }
            })
        )
            .then(() => {
                addDoc(collection(db, "ordenes"), orden)
                    .then(docRef => {
                        setOrdenId(docRef.id);
                        vaciarCarrito();
                    })
                    .catch(error => {
                        console.log("Error al crear la orden: ", error);
                        setError("Error al crear la orden. Intente nuevamente más tarde.");
                    });
            })
            .catch(error => {
                console.log("No se pudo actualizar el stock.", error);
                setError("Error al crear la orden. Intente nuevamente más tarde.")
            })
            .finally( () => setIsLoading(false) );
    }

    if (isLoading) {
        return (
            <div className='p-3 loading-animation'>
                <img src="../img/loading.gif" alt="Cargando..." />
            </div>
        );
    }

    return (
        <div id="checkout">
            <h2 className="mb-4 text-center">Checkout</h2>

            {(!ordenId) ? (
                <form onSubmit={manejadorFormulario}>

                    <div className="datos-compra p-0">

                        <h3 className="fs-4 mb-3">Su compra: </h3>

                        <ul>
                            {
                                carrito.map(producto => (
                                    <li key={producto.item.id} className="productos-checkout">

                                        <span> {producto.item.nombre} x {producto.cantidad} - {producto.item.precio * producto.cantidad} </span>
                                        <img className='currency-icon d-inline-block px-1' src="../img/heart.png" alt="corazones" />

                                    </li>
                                ))
                            }
                        </ul>

                        <hr />

                        <div className="precio">
                            <span>  <strong> Total: </strong> {total} </span>
                            <img className='currency-icon d-inline-block px-1' src="../img/heart.png" alt="corazones" />
                        </div>

                    </div>


                    <h3 className="fs-4 mb-3 mt-5"> Sus datos personales: </h3>

                    <div className="form-group">
                        <label htmlFor="nombre"> Nombre </label>
                        <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="apellido"> Apellido </label>
                        <input type="text" id="apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="telefono"> Teléfono </label>
                        <input type="text" id="telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email"> Email </label>
                        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="emailConfirmacion"> Confirmá el email </label>
                        <input type="email" id="emailConfirmacion" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)} />
                    </div>



                    {
                        (error && !sinStock) && <p className="error-text mx-4"> {error} </p>
                    }

                    {
                        (sinStock) ? (
                            <>

                                <p className="error-text mx-4"> Error al crear la orden. Uno de los productos seleccionados se quedó sin stock. </p>

                                <Link to="/" className="button error-text"> Volver a la tienda </Link>

                            </>
                        ) : (
                            <button type="submit" className="button"> Finalizar compra </button>
                        )
                    }





                </form>
            ) : (
                <div className="compra-realizada">
                    <p className="m-0 px-3 text-center"> <strong> ¡Gracias por tu compra! </strong> El ID de tu orden es {ordenId}.  </p>

                    <img src="../img/happy-cat.png" alt="Gatito Contento"/>
                </div>




            )}
        </div>
    )
}

export default Checkout