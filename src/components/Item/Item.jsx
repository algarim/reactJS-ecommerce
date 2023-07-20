import './Item.css'
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';

//BOOTSTRAP
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Item = ({ id, img, nombre, precio, stock }) => {
    const { agregarProducto } = useContext(CarritoContext);
    const manejadorAgregar = (cantidad) => {
        const item = { id, nombre, precio, img };
        agregarProducto(item, cantidad);
    }

    return (
        <Card className='product-card'>
            <Card.Img className='product-img' variant="top" src={img} />
            <Card.Body className='p-2'>
                <Card.Title className='fs-4 mb-1'>{nombre}</Card.Title>

                <Card.Text className='m-1 precio'>
                    <span>{precio}</span>
                    <img className='currency-icon d-inline-block px-1' src="../img/heart.png" alt="corazones" />
                </Card.Text>

                <Card.Text className='my-2'>
                    Stock: {stock}*
                </Card.Text>

                <div className='d-flex justify-content-center align-items-center flex-wrap'>
                    <Button as={Link} to={`/item/${id}`} variant="primary" className='m-2'> Ver detalles </Button>

                    <ItemCount inicial={1} stock={stock} mostrarContador={false} funcionAgregar={manejadorAgregar} />
                </div>
            </Card.Body>
        </Card>
    );
}

export default Item;