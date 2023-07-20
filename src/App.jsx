import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { CarritoProvider } from './context/CarritoContext';
import Footer from './components/Footer/Footer';
import Checkout from './components/Checkout/Checkout';


// BOOTSTRAP Styles
import 'bootstrap/dist/css/bootstrap.min.css';
// Style
import './App.css'


function App() {

  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          
          <NavBar />

          <Routes>

            <Route path='/' element={<ItemListContainer greeting='¡Bienvenidos a la mejor tienda de gatitos del mundo!' />} />
            <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
            <Route path='/item/:idItem' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/*' element={<h3> La página que busca no existe </h3>} />

          </Routes>

          <Footer/>

        </CarritoProvider>
      </BrowserRouter>
    </>
  )
}

export default App
