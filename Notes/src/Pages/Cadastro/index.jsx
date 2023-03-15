import { useState } from 'react'
import { Link } from 'react-router-dom'

/* Componentes */
import Input from '../../Components/Input'
import Submit from '../../Components/Buttons/Submit'

/* Estilização */
import {
  Wrap,
  Card,
  SignInForm,
} from './styles'



function Cad() {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  function changePassword(data) {
    setPassword(data)
  }

  function changeEmail(data) {
    setEmail(data)
  }

  /*Função que testa se o email é valido */
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

    <Wrap>
        <h1>
          Cadastrar
        </h1>
      <Card>
        <SignInForm>
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
              />
            </div>

            <div>
              <Input 
              changeData={ changePassword }
              type='password'
              placeholder='Password'
              validation={ isPasswordLongEnough(password) }
              />
            </div>

            <div>
              <Submit
              text='Cadastrar'
              email={ email }
              password={ password }
              login='false'
              isPasswordLongEnough={ isPasswordLongEnough(password) }
              isValidEmail={ isValidEmail(email) }
              />
            </div>

            <div>
              <Link to='/login'>
                Já tem uma conta?
              </Link>
            </div>
        </SignInForm>
      </Card>
    </Wrap>
  )
}

export default Cad