//Componentes
import Notes from '../../Components/Notes/Index'

//Estilização
import Wrap from './styles'


function Home() {

  return (
    <Wrap>

      <div>
        <h1>
          Notas
        </h1>
      </div>

        <div>
          <Notes />
        </div>

    </Wrap>
  )
}

export default Home