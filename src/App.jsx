// BOOTSTRAP Styles
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {

  return (
    <>
      <BrowserRouter>

        <NavBar />

        <Routes>

          <Route path='/' element={<ItemListContainer greeting='¡Bienvenidos a la mejor tienda de gatitos del mundo!' />} />
          <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
          <Route path='/item/:idItem' element={<ItemDetailContainer />} />
          <Route path='/*' element={ <h3> La página que busca no existe </h3> } />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
