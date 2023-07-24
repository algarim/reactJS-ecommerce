import { useContext, useState } from "react"
import { db } from "../../services/config"
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore"
import { CarritoContext } from "../../context/CarritoContext";

// CSS
import "./Checkout.css"

const Checkout = () => {

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");

    const { carrito, vaciarCarrito, total } = useContext(CarritoContext);


    // FUNCIONES Y VALIDACIONES

    const manejadorFormulario = (event) => {
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

                await updateDoc(productoRef, {
                    stock: stockActual - productoOrden.cantidad
                })
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
    }

    return (
        <div id="checkout">
            <h2 className="mb-4">Checkout</h2>

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
                        error && <p style={{ color: "red" }}> {error} </p>
                    }


                    <button type="submit" className="button"> Finalizar compra </button>


                </form>
            ) : (
                <>
                    <p className="m-0"> <strong> ¡Gracias por tu compra! </strong> </p>
                    <p> Tu número de orden es {ordenId}. </p>
                </>




            )}
        </div>
    )
}

export default Checkout