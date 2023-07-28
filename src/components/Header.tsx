import { Link } from "react-router-dom"

function Header() {
  return (
    <header className='header'>
        <div className="logo">
            <Link to={'/'}>
                <img src='../../images/logo-full.png'></img>
            </Link>
        </div>
    </header>
  )
}

export default Header