import { Link } from "react-router-dom";
import ItemCount from '../ItemCount/ItemCount';

import { useState, useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";

//Style
import "./ItemDetail.css"

//BOOTSTRAP
import Card from 'react-bootstrap/Card';

const ItemDetail = ({ id, nombre, precio, stock, img, descripcion }) => {

    const [agregarCantidad, setAgregarCantidad] = useState(0);
    const { agregarProducto } = useContext(CarritoContext);

    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad);

        const item = { id, nombre, precio, img };
        agregarProducto(item, cantidad);
    }

    return (
        <Card className='detail-card'>
            <Card.Img className='product-img' variant="top" src={img} />
            <Card.Body>
                <Card.Title className='fs-4 text-center'>{nombre}</Card.Title>

                <div className='m-0 text-center'>
                    <span>{precio}</span>
                    <img className='currency-icon d-inline-block px-1' src="../img/heart.png" alt="corazones" />

                    <Card.Text className='my-2 text-center'>
                        Stock: {stock}*
                    </Card.Text>

                    <Card.Text className="my-3"> {descripcion} </Card.Text>
                </div>

                {
                    agregarCantidad > 0 ? (
                        <div className="detail-finalizar">
                            <Link to='/cart' className="button button-alt"> Finalizar compra </Link>
                            <Link to='/' className="button"> Volver a la tienda </Link>
                        </div>
                    ) : (
                        <ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
                }

            </Card.Body>
        </Card >
    );
}

export default ItemDetail