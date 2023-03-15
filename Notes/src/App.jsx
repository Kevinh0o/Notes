import { Routes, Route, Link } from 'react-router-dom'

/* Componentes das rotas*/
import Home from './Pages/Home'
import Login from './Pages/Login'
import Nopage from './Pages/No Page'
import Cad from './Pages/Cadastro'
import Perfil from './Pages/Perfil'
import PasswordReset from './Pages/Password Reset/PasswordReset'

/* Componente das rotas privadas */
import PrivateRoutes from './Pages/PrivateRoutes/Firebase-auth'
import NormalRoutes from './Pages/PrivateRoutes/Normal-Route'

/* Componentes*/
import Header from './Components/Header'

/* Estilização */
import Root from './styles'


function App() {

  return (
    <Root>
      <div>
        <Header />
      </div>
      <Routes>
      <Route path="/*" element={ <Nopage /> } />

        <Route element={ <PrivateRoutes /> }>
          <Route exact path="/home" element={ <Home /> } replace/>
        </Route>

        <Route element={ <NormalRoutes /> } >
          <Route path="/" element={ <Login /> } />
          <Route path='/password-reset' element={ <PasswordReset /> } />
          <Route path="/Cad" element={ <Cad /> } />
        </Route>
      </Routes>
    </Root>
  )
}

export default App
