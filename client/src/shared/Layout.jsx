import React from 'react'
import Header from '../components/Header'

import './Layout.css'

const Layout = (props) => {
    const { currentUser, handleLogout } = props
    return(
        <>
        <div className='body-container'>
        <Header
            currentUser={currentUser}
            handleLogout={handleLogout}
        />
        
        
            <main>
                <div className='find-your-movies'>
                {props.children}
                </div>
            </main>
            </div>
      
       </>
    )
}

export default Layout