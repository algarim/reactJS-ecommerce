import imgCorazon from "../../assets/img/heart.png"
import Item from "../Item/Item";
import ItemCount from '../ItemCount/ItemCount';
import "./ItemDetail.css"

//BOOTSTRAP
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemDetail = ({ img, nombre, precio, descripcion }) => {
    return (
        <Card className='details-card'>
            <Card.Img className='product-img' variant="top" src={img} />
            <Card.Body>
                <Card.Title className='fs-4'>{nombre}</Card.Title>
                <Card.Text className='m-0'>
                    <p className='d-inline-block m-0'>Precio:</p>
                    <div>
                        <span>{precio}</span>
                        <img className='currency-icon d-inline-block px-1' src={imgCorazon} alt="corazones" />
                        <p className="mt-2"> {descripcion} </p>
                    </div>
                </Card.Text>

                <div className="add-to-cart-button">
                    <Button variant="primary" className='mt-2'>Agregar al carrito</Button>
                    <ItemCount />
                </div>
            </Card.Body>
        </Card >
    );
}

export default ItemDetail