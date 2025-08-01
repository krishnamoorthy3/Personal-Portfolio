import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import {AppContextProvider} from "./context/AppContext.jsx"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
      <BrowserRouter>
        <AppContextProvider>
          <App />
        </AppContextProvider>
      
      </BrowserRouter>
    
  </StrictMode>,
)
