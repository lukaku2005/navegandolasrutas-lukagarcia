import './App.css'
import { BrowserRouter,Routes,Route } from "react-router-dom";

import Inicio from './componentes/inicio';
import Layout from './componentes/Layout';
import Error from './componentes/Error';
import Productos from './componentes/Productos';
import DetalleProductos from './componentes/DetalleProducto';

function App() {
  

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout/>}>
              <Route index element={<Inicio/>}/>
              <Route path='productos' element={<Productos/>}/>
              <Route path='productos/:id' element={<DetalleProductos/>}/>
              <Route path='*' element={<Error/>}/>
            </Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
