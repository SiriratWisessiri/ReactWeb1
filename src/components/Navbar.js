import React, {useState} from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
    //Set state for click to toggle the menu bar
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);
  return (
    <div>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo'>
                    TRVL <i class="fa-solid fa-sailboat"></i>
                </Link>
               {/* Handle click. Setstate and handleClick funtion are above */}
                <div className='menu-icon' onClick={handleClick}> 
                    <i className={click ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'} />
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-munu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                            Products
                        </Link>
                    </li>
                    <li>
                        <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Sign Up
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar