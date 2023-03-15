import { Navigate } from "react-router-dom"

function Nopage() {

  return (
    <div>
      <Navigate to="/" />
      <h1>
        Página não encontrada
      </h1>
    </div>
  )
}

export default Nopage
