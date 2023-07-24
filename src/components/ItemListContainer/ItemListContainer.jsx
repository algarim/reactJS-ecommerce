// CSS
import './ItemListContainer.css'

import ItemList from '../ItemList/ItemList'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { db } from '../../services/config'
import { collection, getDocs, query, where } from "firebase/firestore";


const ItemListContainer = (props) => {
  const [productos, setProductos] = useState([]);

  const { idCategoria } = useParams();

  let titulo = idCategoria ? `Gatitos ${idCategoria}` : props.greeting;

  // Traemos los productos requiridos del inventario cada vez que se carga la página o se cambia de categoría

  useEffect(() => {
    const misProductos = idCategoria ? query(collection(db, "inventario"), where("idCat", "==", idCategoria)) : collection(db, "inventario");

    getDocs(misProductos)
      .then(res => {
        const nuevosProductos = res.docs.map(doc => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });

        setProductos(nuevosProductos);
      })
      .catch(error => console.log(error));
  }, [idCategoria])

  return (
    <>
      <div className='my-4 cat-title'>
        <h2>{titulo}</h2>
      </div>
      <ItemList productos={productos} />

      <p className='my-4 text-background' > *Para asegurar stock, nuestros gatitos son clonados regularmente en instalaciones especializadas. </p>
    </>
  )
}

export default ItemListContainer