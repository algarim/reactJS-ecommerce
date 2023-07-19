import { Link } from "react-router-dom";
import imgCorazon from "../../assets/img/heart.png"
import ItemCount from '../ItemCount/ItemCount';

import { useState, useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";

//Style
import "./ItemDetail.css"

//BOOTSTRAP
import Card from 'react-bootstrap/Card';

const ItemDetail = ({ id, nombre, precio, stock, img, descripcion }) => {

    const [agregarCantidad, setAgregarCantidad] = useState(0);
    const {agregarProducto} = useContext(CarritoContext);

    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad);
        
       const item = {id, nombre, precio};
        agregarProducto(item, cantidad);
    }

    return (
        <Card className='details-card'>
            <Card.Img className='product-img' variant="top" src={img} />
            <Card.Body>
                <Card.Title className='fs-4'>{nombre}</Card.Title>

                <div className='m-0'>
                    <span>{precio}</span>
                    <img className='currency-icon d-inline-block px-1' src={imgCorazon} alt="corazones" />
                    <p> Stock: {stock} </p>
                    <p className="mt-2"> {descripcion} </p>
                </div>

                {
                    agregarCantidad > 0 ? (
                    <div>
                        <Link to='/cart' className="me-2"> Finalizar compra </Link>
                        <Link to='/' className="ms-2"> Volver a la tienda </Link>
                    </div>
                    ) : (
                    <ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
                }

            </Card.Body>
        </Card >
    );
}

export default ItemDetail