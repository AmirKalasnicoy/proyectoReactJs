import Navbar from "./components/navbar/Navbar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import './App.css'
function App() {


  return (
    <>
      <Navbar/>
      <ItemListContainer greetings="Mensaje de bienvenida"/>
    </>
  )
}

export default App
