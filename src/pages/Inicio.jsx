import { Link } from 'react-router'

function Inicio() {
  return (
    <>
      <h1>Bienvenido al portal</h1>
      <p>Registra tu nombre para ver tu perfil de estudiante.</p>
      <Link to="/registro">Comenzar registro</Link>
    </>
  )
}

export default Inicio
