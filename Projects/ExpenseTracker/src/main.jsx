import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './Theme.js'
import GlobalState from './Context/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <GlobalState>
  <ChakraProvider theme={theme}>    
    <App />
  </ChakraProvider>
  </GlobalState>
)
