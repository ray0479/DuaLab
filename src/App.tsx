import { useState } from 'react'
import React, { useEffect } from 'react'
import { Routes, Route} from 'react-router'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './styles/App.css'
import {NavBar} from './components/navbar'
import CompanyInfo from './components/Info';
import Inicio from './components/Inicio'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Dua Lab</h1>
      <NavBar />
      
      {/* <LoginProvider>*/}
        <div className="container">
          <Routes>
            <Route path="info" element={<CompanyInfo/>} />
            <Route path="/" element={<Inicio/>} />
          </Routes>
        </div>
      {/*</LoginProvider> */}
    </div>
  );
}

export default App
