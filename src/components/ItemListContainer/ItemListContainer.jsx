import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useState, useEffect } from 'react'
import { getProductosDeUnaCategoria, getTodosLosProductos } from '../../../asyncmock'
import { useParams } from 'react-router-dom'

const ItemListContainer = (props) => {
  const [productos, setProductos] = useState([]);

  const {idCategoria} = useParams();

  let titulo = idCategoria ? `Gatitos ${idCategoria}` : props.greeting ;

  useEffect( () => {
    const getProductos = idCategoria ? getProductosDeUnaCategoria : getTodosLosProductos;    

    getProductos(idCategoria)
    .then(respuesta => setProductos(respuesta))
    .catch(error => console.log(error))
  }, [idCategoria] )

  return (
    <>
      <h2>{titulo}</h2>
      <ItemList productos ={productos}/>
    </>
  )
}

export default ItemListContainer