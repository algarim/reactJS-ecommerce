import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useState, useEffect } from 'react'
//import { getUnProducto } from '../../../asyncmock'
import { useParams } from 'react-router-dom';
import { db } from '../../services/config';
import { doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  const { idItem } = useParams();

  useEffect(() => {
    setIsLoading(true);

    const miProducto = doc(db, "inventario", idItem);

    getDoc(miProducto)
      .then(res => {
        const data = res.data();
        const nuevoProducto = { id: res.id, ...data };

        setProducto(nuevoProducto);
        setIsLoading(false);
      })
      .catch(error => console.log(error))
  }, [idItem])

  if (isLoading) {
    return (
      <div className='p-3 loading-animation'>
        <img src="../img/loading.gif" alt="Cargando..."/>
      </div>
    );
  }

  return (
    <div className='m-4'>
      <ItemDetail {...producto} />
    </div>
  )
}

export default ItemDetailContainer