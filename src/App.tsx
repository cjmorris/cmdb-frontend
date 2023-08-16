import './styles/styles.css'

import NavBar from "./components/NavBar"
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import Dashboard from './pages/Dashboard'
import Applications from './pages/Applications';
import Domains from './pages/Domains';
import VirtualMachines from './pages/VirtualMachines';
import Header from './components/Header';
import Login from './pages/authentication/Login';
import SignUp from './pages/authentication/SignUp';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' Component={Login}/>
          <Route path='/signup' Component={SignUp}/>
        </Routes>
        <Header/>
        <div className='app-body'>
          <NavBar/>
          <div className='standard-widget'>
            <Routes>
              <Route path='/' Component={Dashboard}/>
              <Route path='/applications' Component={Applications}/>
              <Route path='/domains' Component={Domains}/>
              <Route path='/vm' Component={VirtualMachines}/>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
