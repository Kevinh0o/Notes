import { useState } from 'react'
import { Link } from 'react-router-dom'

/* Componentes */
import Input from '../../Components/Input'
import Submit from '../../Components/Buttons/Submit'

/* Estilização */
import { Wrap, Card, LoginForm } from './styles'


function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function changePassword(data) {
    setPassword(data)
  }

  function changeEmail(data) {
    setEmail(data)
  }

  function isValidEmail(email) {
    const emailR = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailR.test(email)
  }

  /* Testa se a senha é valida */
  function isPasswordLongEnough(pass) {
    const passR = /[a-zA-Z0-9]{6}$/
    return passR.test(pass)
  }

  return (

    <div>


      <Wrap>
        <h1>
          Entrar
        </h1>
        <Card>
          <LoginForm>
            <div>
              <h2>
                :)
              </h2>
            </div>
            <div>
              <Input 
              changeData={ changeEmail }
              placeholder='E-mail'
              type='E-mail'
              validation={ isValidEmail(email) }
              action='login'
              />
            </div>
              
            <div>
              <Input 
              changeData={ changePassword }
              type='password'
              placeholder='Password'
              validation={ isPasswordLongEnough(password) }
              action='login'
              />
            </div>

            <div>
              <Submit
                text='Conectar :)'
                email={ email }
                password={ password }
                login='true'
                isPasswordLongEnough={ isPasswordLongEnough(password) }
                isValidEmail={ isValidEmail(email) }
              />
            </div>

            <div>
              <Link to='/cad'>
                  Ainda não tem uma conta?
              </Link>
            </div>

            <div>
              <Link to='/password-reset'>
                Esqueceu a senha?
              </Link>
            </div>

          </LoginForm>
        </Card>
      </Wrap>
    </div>
  )
}

export default Login
