import './App.css'

// BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ProductCard from './components/ProductCard/ProductCard';

function App() {

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting ='¡Bienvenidos a la mejor tienda de gatitos del mundo!' />

      <div className='product-list'>
      <ProductCard nombre = "Juanito" precio= "50" img = "https://placekitten.com/300/199" />
      <ProductCard nombre = "Coquito" precio= "30" img = "https://placekitten.com/300/201" />
      <ProductCard nombre = "Florentina" precio= "75" img = "https://placekitten.com/301/200" />
      <ProductCard nombre = "Enriqueta" precio= "100" img = "https://placekitten.com/301/199" />
      </div>
    </>
  )
}

export default App
