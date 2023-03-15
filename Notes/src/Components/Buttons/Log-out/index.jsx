import { useState } from "react"
import { useAuth } from "../../../Contexts/AuthContext"

/* Estilização */
import LogOutButton from "./styles"

const LogOut = ( props ) => {
  const [loading, setLoading] = useState()

  const { logout }  = useAuth()

  const handleClick = async (e) =>{
      e.preventDefault()

      try {
        setLoading(true)
        await logout()
      } 
      catch(error) {
        console.log(error)
      }
    setLoading(false)
  }

  return (
    <>
        <LogOutButton 
        onClick = { handleClick }
        disabled={ loading }
        >
          {props.text}
        </LogOutButton>
    </>
    
  )
}

export default LogOut
