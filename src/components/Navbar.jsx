import { useContext } from 'react'
import { Link } from 'react-router'
import { UsuarioContext } from '../contexts/authContext'

function Navbar() {
  const{usuario} = useContext(UsuarioContext);
  return (
    <header>
      <strong>Portal del estudiante</strong>
      <nav aria-label="Navegación principal">
        <Link to="/">Inicio</Link>
        <Link to="/registro">Registro</Link>
        <Link to="/perfil">Mi perfil</Link>
      </nav>
      <span>{usuario? `Hola, ${usuario}` : 'Invitado'}</span>
    </header>
  )
}

export default Navbar
