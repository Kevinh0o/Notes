import { sendPasswordResetEmail } from 'firebase/auth'

import { 
    createContext, 
    useContext, 
    useState, 
    useEffect } 
from 'react'

import { 
    auth,
    db,
    createUser,
    logInUser,
    logOutUser } 
from '../firebase'

import { 
    addDoc,
    collection,
    query,
    where,
    getDocs,
    doc,
    orderBy,
    updateDoc,
    deleteDoc
} from 'firebase/firestore'

/* Inicializando Context */
export const AuthContext = createContext()

/* Hook de utilização do context */
export function useAuth(){
    return useContext(AuthContext)
}

/* Provider */
export const AuthContextProvider = ( {children} ) => {

    /*  Variavel que armazna o usuario */
    const [currentUser, setCurrentUser] = useState()

    /* Função de cadastro*/
    async function signup(email, password){
        try{
            await createUser(auth, email, password)
        }
        catch(error){
            alert(error)
        }
    }

    /* Função de login*/
    async function login(email, password){
        try{
            await logInUser(auth, email, password)
        }
        catch(error){
            alert('Usuario invalido')
        }
    }

    /* Função de resetar a senha*/
    async function resetPassword(email){
        try{
            await sendPasswordResetEmail(auth, email)
            alert('E-mail para recuperação de senha enviado')
        }
        catch(error){
            alert('E-mail não cadastrado')
        }
    }

    /* Função de logout */
    async function logout(){
        try{
            await logOutUser(auth)
        }
        catch(error){
            alert(error)
        }
    }

    //função de update no banco de dados
    async function update (path, id, data) {
        try{
            updateDoc( doc(db, 'users', currentUser.email, path, id), data)
        }
        catch(error){
            alert(error)
        }
    }

    //Função que atualiza o id de um documento ao ser criado, utilizado junto ao
    // post
    async function updateId (id, path) {
        try{
            updateDoc( doc(db, 'users', currentUser.email, path, id),
            { id : id})
        }
        catch(error){
            alert(error)
        }
    }

    //Função de delete do banco de dados
    async function erase( path, id ) {
        try{
            deleteDoc( doc(db, 'users', currentUser.email, path, id) )
        }
        catch(error){
            alert(error)
        }
    }

    //função de post banco de dados
    async function post( path, data ){
        try{
            const docRef = await
                addDoc( collection( db, 'users', currentUser.email, path ), data);

                updateId(docRef.id, path)
        }
        catch(error){
            alert(error)
        }
    }

    //Função de get banco de dados
    async function get( path ){

        try{
            const q = await 
                query( 
                    collection( db, 'users', currentUser.email, path ), 
                    where( 'notes', '==', true ),
                    orderBy( 'timestamp' ));

            const querySnap = await
                getDocs(q)

            return querySnap
        }
        catch(error){
            console.log(error)
        }
    }

    /* Função que verifica o estado do usuario */
    useEffect(() =>{
        const unsubscribe = auth.onAuthStateChanged(user =>{
            setCurrentUser(user)
        })

        return unsubscribe
    }, [])
    
    /* Informação do contexto / informação de login*/
    const value={
        currentUser,
        signup,
        login,
        logout,
        resetPassword,
        post,
        get,
        erase,
        updateId,
        update
    }

    return (
        <AuthContext.Provider value={ value }>
            {children}
        </AuthContext.Provider>
    )
}