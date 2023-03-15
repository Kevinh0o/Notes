import { validateArgCount } from "@firebase/util"
import { useState, useEffect } from "react"

//Estilização
import { LoginInput, AlertText, Wrap } from './styles'


const Input = ( props ) => {
    const [data, setData] = useState()
    const [styles, setStyles] = useState()
    const [alert, setAlert] = useState('')

    const handleChange = (e) =>{
        setData(e.target.value)
    }

    useEffect(() => {
      props.changeData(data)
    })

    //Função que sinalizará que algo no input está errado
    function handleValidation(){
      if(props.action !== 'login'){
        if (props.validation !== true){
          setStyles( { border : '1px solid red' } )
  
          if(props.type == 'E-mail'){
            setAlert('E-mail invalido.')
          }
  
          if(props.type == 'password'){
            setAlert('A senha precisa ter no minimo 6 caracteres.')
          }
  
        }else{
          setStyles( { border : '1px solid rgb(71, 71, 71)' } )
          setAlert('')
        }
      }
    }

    function handleAlerts(){
      return alert
    }


  return (
    <Wrap>
        <AlertText>
          { handleAlerts() }
        </AlertText>

      <div>
        <LoginInput
          style={ styles }
          placeholder={ props.placeholder } 
          onChange={ handleChange } 
          type={props.type}
          onBlur={(e)=>{ handleValidation() }}
          />
      </div>

    </Wrap>
  )
}

export default Input