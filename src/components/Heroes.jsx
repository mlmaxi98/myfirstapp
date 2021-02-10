import React from 'react';
//import {NavLink} from 'react-router-dom'
import '../styled/Heroes.css'
import agilidad from '../Heroes/app'
function Heroes(){
    return(
        <div className ='container'>
            {/* <div className ='body'>
                <img src= 'https://i.redd.it/8le3puzyk45y.png' alt='' className='fondo'></img>
            </div> */}
            <ul className = 'heroes-a'>
                {agilidad.map(heroe =><li>

                <img src = {heroe.profilePic}></img>
                </li>)
                }
            </ul>
        </div>
    )
}

export default Heroes