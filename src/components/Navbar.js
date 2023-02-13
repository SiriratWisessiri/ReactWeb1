import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css'


function Navbar() {
    //Set state for click to toggle the menu bar
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    ////Function to shown button when screen size is bigger than 960
    const showButtton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        }else{
            setButton(true);
        }
    };

    //Fix the sign up button to render only one time, notshowing up once resize and refresh
    useEffect(() => {
        showButtton();
    }, []);
    window.addEventListener('resize', showButtton);
    ////
  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/ReactWeb1' className='navbar-logo' onClick={closeMobileMenu}>
                    TRVL 
                    <i class="fa-solid fa-sailboat"></i>
                </Link>
               {/* Handle click. Setstate and handleClick funtion are above */}
                <div className='menu-icon' onClick={handleClick}> 
                    <i className={click ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'} />
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/ReactWeb1' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/ReactWeb1/services' className='nav-links' onClick={closeMobileMenu}>
                            Services
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/ReactWeb1/products' className='nav-links' onClick={closeMobileMenu}>
                            Products
                        </Link>
                    </li>
                    <li>
                        <Link to='/ReactWeb1/sign-up' className='nav-links' onClick={closeMobileMenu}>
                            Sign Up
                        </Link>
                    </li>
                </ul>
                {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
            </div>
        </nav>
    </>
  );
}

export default Navbar;

