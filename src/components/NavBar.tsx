import '../styles/navbar.css'

import { Link } from 'react-router-dom'
import { NavBarData } from './NavBarData'

function NavBar() {
    return (
        <>
            <nav className='navbar'>
                <ul className='navbar-list'>
                    {NavBarData.map((item,index) => {
                        return (
                            <li key={index} className='navbar-item'>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span className='navbar-title'>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
  )
}

export default NavBar