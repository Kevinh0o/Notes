import { useEffect, useState } from "react"
import { useAuth } from "../../Contexts/AuthContext"

import Form from "./Form"
import Note from "./Note"
import Loading from '../Loading'

//Icones
import AddIcon from '../../Assets/Icons/add-icon.svg'
import ReloadIcon from '../../Assets/Icons/reload-icon.svg'

//Estilização
import { Wrap, Interaction } from './styles'


const Notes = () => {
    const { post, get } = useAuth()

    const [title, setTitle] = useState()
    const [content, setContent] = useState()
    const [notes, setNotes] = useState([])
    const [reload, setReload] = useState(false)
    const [loading, setLoading] = useState(false)

    const [newNote, setNewNote] = useState(false)


    function handleCLickPost(e){
        e.preventDefault()
        setReload(true)

        const timestamp = new Date();
        
        post( 'notes', {
            notes : true,
            title : title,
            content : content,
            timestamp : timestamp
        } )
    }

    //fução que adiciona os itens do banco de dados na variavel notes.
    function addItem(data) {
        const newItem = []

        data.forEach((doc)=>{
            const a = doc.data()
            newItem.push( a )
        })

        setNotes( newItem );
      }

    //Função get da coleção 'notes' banco de dados.
    async function getData(){
        setLoading(true)
        try{
            const data = await get( 'notes' )
            addItem(data)
        }
        catch{
        }
        setLoading(false)
    }

    //Função que atualiza os dados automaticamente
    useEffect(()=>{
        if (reload == true){
            getData()
        }

        setReload(false)
    },[reload])

    useEffect(()=>{
        if (reload == false){
            setReload(true)
        }
    },[])

    //Função para ser passada como props para as notas
    function setReloadF(a){
        setReload(a)
    }

    //Função que armaneza e muda os dados de uma nova nota
    function handleChangeTitle(e){
        setTitle(e.target.value)
    }
    function handleChangeContent(e){
        setContent(e.target.value)
    }

    function changeNewNoteState(){
        if (newNote == true){
            setNewNote(false)
        }
        if (newNote == false){
            setNewNote(true)
        }
    }    

  return (
    <Wrap>
        <div>
            { loading &&
                <Loading />
            }
        </div>
        <Interaction>
                <button onClick={ changeNewNoteState }>
                    <img src={ AddIcon } />
                </button>
                <button onClick={ getData }>
                    <img src={ ReloadIcon } />
                </ button>
        </Interaction>


        <div>
            {
                newNote &&
                    <Form
                    title={ handleChangeTitle }
                    content={ handleChangeContent }
                    post={ handleCLickPost }
                    />
            }
        </div>

        <div>
            {
                notes.map((i)=>{
                    return(
                        <div key={i.timestamp}>
                            <Note 
                            title={i.title} 
                            content={i.content}
                            id={i.id}
                            date={ i.timestamp }
                            setReload={ setReloadF }
                            />
                        </div>
                    )
                })
            }
        </div>

    </Wrap>
  )
}

export default Notes