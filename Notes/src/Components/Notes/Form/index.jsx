//Estilização
import { Wrap, Content } from './styles'

//Icones
import SendIcon from '../../../Assets/Icons/send-icon.svg'

const Form = ( props ) => {

  return (
    <div>

      <Wrap>
        <Content>

          <div>
            <input
            onChange={props.title}
            className="note-input"
            placeholder='Titulo'
            />

            <textarea
            onChange={props.content}
            placeholder='Escreva algo aqui'
            />
          </div>

          <button
          onClick={ props.post }
          className="note-button"
          >
            <img src={ SendIcon } />
          </button>

      </Content>
      </Wrap>

    </div>
  )
}

export default Form