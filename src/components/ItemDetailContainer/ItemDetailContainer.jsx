import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useState, useEffect } from 'react'
import { getUnProducto } from '../../../asyncmock'
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);

  const {idItem} = useParams();

  useEffect( () => {
    getUnProducto(idItem)
      .then(respuesta => setProducto(respuesta))
      .catch(error => console.log(error))
  }, [])

  return (
    <div className='m-4'>
      <ItemDetail {...producto} />
    </div>
  )
}

export default ItemDetailContainer