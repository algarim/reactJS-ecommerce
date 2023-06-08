import './ProductCard.css'
import imgCorazon from "../../assets/img/heart.png"

//BOOTSTRAP
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ProductCard = ({ img, nombre, precio }) => {
    return (
        <Card className='product-card'>
            <Card.Img className='product-img' variant="top" src={img} />
            <Card.Body>
                <Card.Title className='fs-4'>{nombre}</Card.Title>
                <Card.Text className='m-0'>
                    <p className='d-inline-block m-0'>Precio:</p>
                    <div>
                        <span>{precio}</span>
                        <img className='currency-icon d-inline-block px-1' src={imgCorazon} alt="corazones" />
                    </div>
                </Card.Text>
                <br />
                <Button variant="primary" className='m-0'>Agregar al carrito</Button>
            </Card.Body>
        </Card>
    );
}

export default ProductCard;