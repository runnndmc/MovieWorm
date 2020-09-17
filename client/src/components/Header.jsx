import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'


const Header = (props) => {
    const { currentUser, handleLogout } = props

    return (

        <header>
            <h1 className='app-name'>MovieWorm</h1>
            <h4>for those devoted</h4>
            {
                currentUser ?
                    <div> 
                        <p>{currentUser.username}</p>
                        <button onClick={handleLogout}>Log Out</button>
                    </div> :
                    <Link to='/login'>Login/Register</Link>
            }
            
            {currentUser &&
                <>
                <Link to='/movies'>Movies</Link>
                </>}
        </header>
    )
}

export default Header