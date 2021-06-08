import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import "./NavBar.css"
import logo2 from '../images/logo2.jpeg'
import { faFacebook, faInstagram, faYoutube} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function NavBar() {

    const [click, setClick] = useState(false);
        
    const handleClick = () => setClick(!click);
    return (
        <>
            <nav className='navbar'>

                <div className='nav-container'>

                    <NavLink exact to='/' activeClassName='active' className='nav-logo'>
                  
                        <div className='logo2'>
                            <img src={logo2} alt='logo'></img>                      
                        </div>

                    </NavLink>
                   
                    <ul className={click ? "nav-menu active":"nav-menu "}>
                    
                    <a href="https://www.youtube.com/channel/UC7gilKuSRhW1XyGF-D6LGVg">
                    <FontAwesomeIcon icon={faYoutube} pulse style={{ fontSize: '1.50rem', color: 'white' }} />
                    </a>

                    <a href="https://www.facebook.com/jduc19/">
                    <FontAwesomeIcon icon={faFacebook} spin style={{ fontSize: '1.50rem', color: 'white' }} />
                    </a>

                    <a href="https://www.instagram.com/jduc19/?hl=es-la">
                    <FontAwesomeIcon icon={faInstagram} pulse style={{ fontSize: '1.50rem', color: 'white' }} />
                    </a>

                        <li className='nav-item'>
                            <NavLink exact 
                            to='/' 
                            activeClassName='active'
                            className='nav-links'
                            onClick={handleClick}>
                                Home
                               
            </NavLink>
                        </li>
                        
                        <li className='nav-item'>
                            <NavLink exact
                             to='/Biografia' 
                             activeClassName='active' 
                             className='nav-links'
                             onClick={handleClick}>
                                Biografia
                                
            </NavLink>
                        </li>

                        <li className='nav-item'>
                            <NavLink 
                             to='/Contacto' 
                             activeClassName='active' 
                             className='nav-links'
                             onClick={handleClick}>
                                Contacto
            </NavLink>
                        </li>

                        <li className='nav-item'>
                            <NavLink exact
                             to='/Videos' 
                             activeClassName='active' 
                             className='nav-links'
                             onClick={handleClick}>
                                Videos
            </NavLink>
                        </li>
                    </ul>
                   
                 
                    <div className='nav-icon' onClick={handleClick}>
                    <i className={click ? "fas fa-times":"fas fa-bars"}></i>
                    </div>
                    
                </div>
            </nav>
        </>
    );
}

export default NavBar;