import './styles/styles.css'

import NavBar from "./components/NavBar"
import { Routes, Route, BrowserRouter, Navigate} from 'react-router-dom';
import Dashboard from './pages/Dashboard'
import Applications from './pages/Applications';
import Domains from './pages/Domains';
import VirtualMachines from './pages/VirtualMachines';
import Header from './components/Header';
import Login from './pages/authentication/Login';
import SignUp from './pages/authentication/SignUp';
import AuthenticatedComponent from './components/AuthenticatedComponent';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to='/dashboard'/>} />
          <Route path='/login' Component={Login}/>
          <Route path='/signup' Component={SignUp}/>
          <Route path='/dashboard' Component={() => <AuthenticatedComponent component={<Dashboard/>} />}/>
          <Route path='/applications' Component={() => <AuthenticatedComponent component={<Applications/>} />}/>
          <Route path='/domains' Component={() => <AuthenticatedComponent component={<Domains/>} />}/>
          <Route path='/vm' Component={() => <AuthenticatedComponent component={<VirtualMachines/>} />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
