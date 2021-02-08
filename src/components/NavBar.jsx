import React from 'react';
import {NavLink} from 'react-router-dom'
import '../styled/styledNavBar.css'
import LogoDota from '../Logos/logodota.png'
function NavBar(){
    return(
        <div className = 'container'>
            <nav className = 'menu'>

                <div className = 'logo'>
                    <NavLink to='/'>
                        <img src = {LogoDota} alt=''/>
                    </NavLink>
                </div>
                <ul className='enlaces'>
                    <li>
                        <NavLink to='/Heroes'>
                            <h1>HEROES</h1>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/Meta'>
                            <h1>META</h1>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/Mapa'>
                            <h1>MAPA</h1>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>    
    )
}
export default NavBar;