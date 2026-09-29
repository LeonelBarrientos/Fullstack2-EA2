import { useState } from 'react'
import { Link, Route, Routes } from 'react-router'
import Navbar from './components/Navbar'
import Inicio from './pages/Inicio'
import Registro from './pages/Registro'
import Perfil from './pages/Perfil'

function App() {
  // En la siguiente clase moveremos este estado a un contexto.
  const [nombre, setNombre] = useState('')

  return (
    <>
      <Navbar nombre={nombre} />

      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/registro" element={<Registro setNombre={setNombre} />} />
          <Route path="/perfil" element={<Perfil nombre={nombre} />} />
          <Route path="*" element={
            <>
              <h1>Página no encontrada</h1>
              <Link to="/">Ir al inicio</Link>
            </>
          } />
        </Routes>
      </main>
    </>
  )
}

export default App
