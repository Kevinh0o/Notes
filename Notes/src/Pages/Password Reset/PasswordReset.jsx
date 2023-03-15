import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../Contexts/AuthContext'

//Estilização
import { 
    Wrap, 
    Card, 
    ResetPasswordForm, 
    PasswordResetInput, 
    SubmitButton 
} from './styles'

const PasswordReset = () => {
    const [ email, setEmail ] = useState()
    const [ loading, setLoading ] = useState( false )

    const { resetPassword } = useAuth()

    function handleChange(e){
        setEmail(e.target.value)
    }

    async function handleClick(e){
        e.preventDefault()
        setLoading(true)
        try{
            await resetPassword(email)
        }
        catch{
        }
        setLoading(false)
    }

  return (
    <Wrap>
        <div>
            <h1>
                Recuperar senha.
            </h1>
        </div>
        <Card>
            <ResetPasswordForm>
                <div>
                    <h2>
                        :)
                    </h2>
                </div>
                <div>
                    <PasswordResetInput 
                    placeholder='E-mail' 
                    onChange={ handleChange }
                    >
                    </PasswordResetInput>
                </div>

                <div>
                    <SubmitButton
                    className='button-s'
                    onClick={ handleClick }
                    disabled={loading}
                    >
                    Redefinir a senha
                    </SubmitButton>
                </div>

                <div className='aditional'>
                    Lembrou a senha? <Link to='/login'> Logar. </Link>
                </div>
            </ResetPasswordForm>
        </Card>
    </Wrap>
  )
}

export default PasswordReset