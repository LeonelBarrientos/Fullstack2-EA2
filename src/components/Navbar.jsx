import { Link } from 'react-router'

function Navbar({ nombre }) {
  return (
    <header>
      <strong>Portal del estudiante</strong>
      <nav aria-label="Navegación principal">
        <Link to="/">Inicio</Link>
        <Link to="/registro">Registro</Link>
        <Link to="/perfil">Mi perfil</Link>
      </nav>
      <span>{nombre ? `Hola, ${nombre}` : 'Invitado'}</span>
    </header>
  )
}

export default Navbar
