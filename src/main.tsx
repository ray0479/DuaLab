import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import 'regenerator-runtime/runtime';
import { ViteRuntime } from 'vite/runtime'
//import 'regenerator-runtime/runtime';
//import "babel-polyfill";

//import {JokesApi} from './components'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
     <App></App>
    </StrictMode>
  </BrowserRouter>
)
