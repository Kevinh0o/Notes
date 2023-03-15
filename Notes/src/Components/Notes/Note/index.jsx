import { useEffect, useState } from "react"
import { useAuth } from "../../../Contexts/AuthContext"

//Estilização
import { Wrap, Interaction, Content } from './styles'

//Icones
import DeleteIcon from '../../../Assets/Icons/delete-icon.svg'
import EditIcon from '../../../Assets/Icons/edit-icon.svg'


const Note = ( props ) => {
  const { erase, update } = useAuth()
  const [ data, setData ] = useState({content : 'alterado2'})
  const [ date, setDate ] = useState('')

  function handleClickErase(){
    props.setReload(true)
    erase( 'notes', props.id )
  }

  function handleClickUpdate(){
    props.setReload(true)
    update( 'notes', props.id, data)
  }

  useEffect(()=>{
    const newDate = new Date(props.date.seconds * 1000)
    setDate( newDate.toLocaleString() )
  },[])

  return (
    <Wrap>
      <Interaction>
       <div>
          <button
          onClick={ handleClickErase }
          >
            <img src={ DeleteIcon }/>
          </button>
        </div>

        <div>
          <p>{ date }</p>
        </div>

{/*        <div>
          <button
          onClick={ handleClickUpdate }
          >
            <img src={ EditIcon }/>
          </button>
        </div>*/}
      </Interaction>


        <Content>
          <h2>
              {props.title}
          </h2>
          <p>
              {props.content}
          </p>
        </Content>

    </Wrap>
  )
}

export default Note