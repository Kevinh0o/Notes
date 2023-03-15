import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'

import App from './App'

//Estilização global
import Root from './styles'
import './styles.css'

import { AuthContextProvider } from './Contexts/AuthContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>
      <AuthContextProvider>
        <Root>
          <App />
        </Root>
      </AuthContextProvider>
    </BrowserRouter>

  </React.StrictMode>,
)
