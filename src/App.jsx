import Header from "./components/Header/Header"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from "react-bootstrap"
import MiContenedor from "./components/MiContenedor"
import MiBoton from "./components/MiBoton/MiBoton"
import { Clicker2 } from "./components/Clicker2"
import { useEffect, useState } from "react"

function App() {

  const [mostrar, setMostrar] = useState(true)

  const handleMostrar = () => {
    setMostrar(!mostrar)
  }

  return (
    <div>
      <Header />

      <button onClick={handleMostrar}>Mostrar</button>

      {
        mostrar ? <Clicker2 /> : null
      }

    </div>
   
  )
}

export default App
