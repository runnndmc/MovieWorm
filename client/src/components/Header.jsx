import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'


const Header = (props) => {
    const { currentUser, handleLogout } = props

    return (

        <header className='header'>
            <div className='logo-tag'>
                <h1>MovieWorm</h1>
               
                <h4 className='tag'>for those devoted</h4>
            </div>
            {
                currentUser ?
                    <div> 
                        <p>{currentUser.username}</p>
                        <button onClick={handleLogout}>Log Out</button>
                    </div> :
                    <Link to='/login'>Login/Register</Link>
            }
            <hr />
            {currentUser &&
                <>
                <Link to='/movies'>Movies</Link>
                </>}
        </header>
    )
}

export default Header