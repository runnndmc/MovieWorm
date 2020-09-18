import React from 'react'
import Header from '../components/Header'

import './Layout.css'

const Layout = (props) => {
    const { currentUser, handleLogout } = props
    return(
        <div className='body-container'>
        <Header
            currentUser={currentUser}
            handleLogout={handleLogout}
        />
            <main>
                {props.children}
            </main>

       </div>
    )
}

export default Layout