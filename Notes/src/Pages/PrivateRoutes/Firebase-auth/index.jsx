import { Navigate, Outlet } from 'react-router-dom'

  /* Login context */
import { useAuth } from '../../../Contexts/AuthContext'

function PrivateRoutes() {

  /* Chamando current user para autenticação */
  const { currentUser } = useAuth()

  return (
    /*Se for verdade vai carregar a página normalmente, se for falso vai
    carregar a página dada no componente Navigate. <Outlet /> carrega
    os componentes filho da aplicação*/
    currentUser ? <Outlet /> : <Navigate to='/' />
  )
}

export default PrivateRoutes
