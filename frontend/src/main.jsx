import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import SellersContextProvider from './context/SellersContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <SellersContextProvider>
    <App />
    </SellersContextProvider>
  </BrowserRouter>
)
