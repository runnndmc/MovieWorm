import React, {useState} from 'react'
import Header from '../components/Header'

import './Layout.css'

const Layout = (props) => {
    const { currentUser, handleLogout } = props
    return(
        <Header
            currentUser = {currentUser}
            handleLogout = {handleLogout}
        >
            <main>
                {props.children}
            </main>

        </Header>
    )
}

export default Layout