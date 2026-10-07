import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import OfertaAcademica from "./pages/OfertaAcademica"
import MisSecciones from "./pages/MisSecciones"
import Horario from "./pages/Horario"
import Inscripciones from "./pages/Inscripciones"

function App() {
  const [secciones, setSecciones] = useState([])

  function agregarSeccion(nuevaSeccion) {
    setSecciones([...secciones, nuevaSeccion])
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/oferta-academica' element={<OfertaAcademica secciones={secciones} agregarSeccion={agregarSeccion} />}/>
          <Route path='/mis-secciones' element={<MisSecciones secciones={secciones} />}/>
          <Route path='/horario' element={<Horario/>}/>
          <Route path='/inscripciones' element={<Inscripciones/>}/>
        </Routes>
      </BrowserRouter>   
    </>
  )
}

export default App