import LogOut from '../Buttons/Log-out'

import { useAuth } from '../../Contexts/AuthContext'
/* Contexts */

/* Components */

/* Estilização */
import Wrap from './styles'


const Header = () => {

  const { currentUser } = useAuth()

  return (
    <>

      <Wrap>
        <ul>
            {currentUser ? 
              <li> <span> Logado como : </span>{currentUser.email} </li>
            : 
              <h1> <li> Seja bem-vindo! </li> </h1>}
            {currentUser ? <LogOut text='Sair'/> : <li>  </li>}
        </ul>
      </Wrap>

    </>
  )
}

export default Header