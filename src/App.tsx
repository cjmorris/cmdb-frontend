import './styles/App.css'
import NavBar from "./components/NavBar"
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import Dashboard from './pages/Dashboard'
import Applications from './pages/Applications';
import Domains from './pages/Domains';
import VirtualMachines from './pages/VirtualMachines';
import Header from './components/Header';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
        <NavBar/>
        <Routes>
          <Route path='/' Component={Dashboard}/>
          <Route path='/applications' Component={Applications}/>
          <Route path='/domains' Component={Domains}/>
          <Route path='/vm' Component={VirtualMachines}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
