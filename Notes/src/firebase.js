import { initializeApp } from "firebase/app";

//Autenticação
import { 
  getAuth, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut }
from "firebase/auth";

//Banco de dados
import { 
  getFirestore }
  from "firebase/firestore";


//Configurações da API do firebase
const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_API_KEY,
  authDomain: import.meta.env.VITE_REACT_APP_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_REACT_APP_PROJECT_ID,
  storageBucket: import.meta.env.VITE_REACT_APP_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_REACT_APP_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_REACT_APP_APP_ID,
  measurementId: import.meta.env.VITE_REACT_APP_MEASUREMENT_ID
};


//Inicializa o firebase com as configurações de cada projeto
const app = initializeApp(firebaseConfig);

//Inicializa autenticação
export const auth = getAuth(app);

//Funções de autenticação
export const createUser = createUserWithEmailAndPassword
export const logInUser = signInWithEmailAndPassword
export const logOutUser = signOut


//Inicializa o banco de dados
export const db = getFirestore(app)

export default app