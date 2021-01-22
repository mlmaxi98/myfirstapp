import React from 'react';
import {NavLink} from 'react-router-dom'
import {StyledNavBar} from '../styled/styledNavBar.jsx'
import LogoDota from '../Logos/logodota.png'
function NavBar(){
    return(
        <StyledNavBar>
            <div className = 'logo'>
                <NavLink to='/'>
                    <img src = {LogoDota} alt=''/>
                </NavLink>
            </div>
            <div className = 'Menu'>
                <div>
                    <NavLink to='/Heroes'>
                        <h1>Heroes</h1>
                    </NavLink>
                </div>
                <div>
                    <NavLink to='/Parches'>
                        <h1>Parches</h1>
                    </NavLink>
                </div>
            </div>
        </StyledNavBar>
    )
}
export default NavBar;