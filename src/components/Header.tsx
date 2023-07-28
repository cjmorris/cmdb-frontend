import { Link } from "react-router-dom"

import logo from '../images/logo-full.png';

function Header() {
  return (
    <header className='header'>
        <div className="logo">
            <Link to={'/'}>
                <img src={logo}></img>
            </Link>
        </div>
    </header>
  )
}

export default Header