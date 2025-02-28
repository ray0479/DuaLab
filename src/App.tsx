import { Routes, Route} from 'react-router'
import './App.css'
import {NavBar} from './components/navbar'
import { Footer } from './components/Footer';
import CompanyInfo from './components/Info';
import Inicio from './components/Inicio'
import { QuienesSomos } from './components/QuienesSomos'

function App() {

  return (
    <>
      <NavBar />
  
      
        <div className="container">
          <Routes>
            <Route path="/" element={<Inicio/>} />
            <Route path="info" element={<CompanyInfo/>} />
          </Routes>
        </div>
        
      
      <Footer/>
    </>
  );
}

export default App
