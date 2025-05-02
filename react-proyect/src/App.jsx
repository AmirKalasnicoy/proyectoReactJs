import Navbar from "./components/navbar/Navbar";
import Cart from './components/Cart/Cart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import ItemDetail from './components/ItemDetail/ItemDetail';
import NotFound from "./components/NotFound/NotFound";
import './App.css'
import { ContextProvider } from "./context/context";
function App() {


  return (
    <ContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:categoria" element={<ItemListContainer />} />
          <Route path="/detalle/:id" element={<ItemDetail />} />
          <Route path="/carrito" element={<Cart />} />
          <Route path="*" element={<NotFound />} /> 
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  )
}

export default App
