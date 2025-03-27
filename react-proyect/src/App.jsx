import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Route, Routes } from 'react-router';
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import ItemDetail from './components/ItemDetail/ItemDetail';
import './App.css'
function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:categoria" element={<ItemListContainer />} />
          <Route path="/detalle/:id" element={<ItemDetail />} />
          <Route path="*" element={<p>404 Not Found</p>} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
