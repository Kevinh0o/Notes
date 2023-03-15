import { useEffect, useState } from "react"
import { useAuth } from "../../../Contexts/AuthContext"

//Componentes
import Loading from '../../Loading'

/* Estilização */
import SubmitButton from './styles'


const Submit = ( props ) => {
  const [loading, setLoading] = useState()

  const { signup, login }  = useAuth()

  const handleClick = async (e) =>{
      e.preventDefault()

      if ( props.login == 'true' ){
        try {
          setLoading(true)
          await login(props.email, props.password)
        } 
        catch(error){
        }
      }
      else{
        try {
          setLoading(true)
          await signup(props.email, props.password)
        } 
        catch(error) {
          alert(error)
        }
      }

    setLoading(false)
  }

  return (
    <>
        <SubmitButton
        className="button-s"
        type="submit"
        onClick = { handleClick }
        disabled={
          loading ||
          !props.isValidEmail ||
          !props.isPasswordLongEnough
        }

        >
          {loading &&
            <Loading />
          }
          {props.text}
        </SubmitButton>
    </>
  )
}

export default Submit
