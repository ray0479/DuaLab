import { Routes, Route} from 'react-router'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './styles/App.css'
import {NavBar} from './components/navbar'
import CompanyInfo from './components/Info';
import Inicio from './components/Inicio'
import { QuienesSomos } from './components/QuienesSomos'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div>
      <NavBar />
      
      {/* <LoginProvider>*/}
        <div className="container">
          <Routes>
            <Route path="/" element={<Inicio/>} />
            <Route path="info" element={<CompanyInfo/>} />
          </Routes>
        </div>
      {/*</LoginProvider> */}
    </div>
  );
}

export default App
