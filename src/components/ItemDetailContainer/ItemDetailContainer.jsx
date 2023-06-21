import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useState, useEffect } from 'react'
import { getUnProducto } from '../../../asyncmock'

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    getUnProducto(4)
      .then(respuesta => setProducto(respuesta))
      .catch(error => console.log(error))
  }, [])

  return (
    <div className='mx-4'>
      <ItemDetail {...producto} />
    </div>
  )
}

export default ItemDetailContainer