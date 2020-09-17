import React from 'react'
import Header from '../components/Header'

import './Layout.css'

const Layout = (props) => {
    const { currentUser, handleLogout } = props
    return(
        <>
        <Header
            currentUser={currentUser}
            handleLogout={handleLogout}
        />
            <main>
                <h3> hello </h3>
                {props.children}
            </main>

       </>
    )
}

export default Layout