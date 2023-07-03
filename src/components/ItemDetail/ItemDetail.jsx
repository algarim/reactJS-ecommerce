import { Link } from "react-router-dom";
import imgCorazon from "../../assets/img/heart.png"
import ItemCount from '../ItemCount/ItemCount';
import "./ItemDetail.css"
import { useState } from "react";

//BOOTSTRAP
import Card from 'react-bootstrap/Card';

const ItemDetail = ({ img, nombre, precio, stock, descripcion }) => {

    // 1) Creamos un estado con la cantidad de productos agregados
 const [agregarCantidad, setAgregarCantidad] = useState(0);

 // 2) Creamos una función manejadora de la cantidad:
 const manejadorCantidad = (cantidad) => {
   setAgregarCantidad(cantidad);
   console.log("Productos agregados" + cantidad);
 }

    return (
        <Card className='details-card'>
            <Card.Img className='product-img' variant="top" src={img} />
            <Card.Body>
                <Card.Title className='fs-4'>{nombre}</Card.Title>

                <Card.Text className='m-0'>
                    <span>{precio}</span>
                    <img className='currency-icon d-inline-block px-1' src={imgCorazon} alt="corazones" />
                    <p className="mt-2"> {descripcion} </p>
                </Card.Text>

                {
                    agregarCantidad > 0 ? ( <Link to='/cart'> Finalizar compra </Link> ) : (<ItemCount inicial='1' stock={stock} funcionAgregar={manejadorCantidad} />)
                }

            </Card.Body>
        </Card >
    );
}

export default ItemDetail