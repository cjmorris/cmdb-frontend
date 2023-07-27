import './styles/App.css'
import NavBar from "./components/NavBar"
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path='/' Component={Home}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
