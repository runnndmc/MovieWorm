import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'


const Header = (props) => {
    const { currentUser, handleLogout } = props

    return (

        <header>
            <div className='logo-tag'>
                <Link to='/'><h1>MovieWorm</h1></Link>
               
                <h4 className='tag'>for those devoted</h4>
            </div>
            {
                currentUser ?
                    <div className='log-in-fo'> 
                        <p>{currentUser.username}</p>
                        <button onClick={handleLogout}>Log Out</button>
                    </div> :
                    <div className='log-in-fo'>
                    <Link to='/login'>Login/Register</Link>
                    </div>
            }
            
            <div className='all-movies'>
            {currentUser &&
                <>
                <Link to='/movies'>Movies</Link>
                </>
            }
            </div>
        </header>
    )
}

export default Header