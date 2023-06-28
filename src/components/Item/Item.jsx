import './Item.css'
import imgCorazon from "../../assets/img/heart.png"

//BOOTSTRAP
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({ id, img, nombre, precio }) => {
    return (
        <Card className='product-card'>
            <Card.Img className='product-img' variant="top" src={img} />
            <Card.Body className='p-2'>
                <Card.Title className='fs-4 mb-1'>{nombre}</Card.Title>
                
                <Card.Text className='m-1'>
                        <span>{precio}</span>
                        <img className='currency-icon d-inline-block px-1' src={imgCorazon} alt="corazones" />
                </Card.Text>
                
                <Button as={Link} to={`/item/${id}`} variant="primary" className='my-2 btn-primary'>Ver detalles</Button>
            </Card.Body>
        </Card>
    );
}

export default Item;