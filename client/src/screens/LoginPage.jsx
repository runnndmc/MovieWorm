import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './LoginPage.css'

const LoginPage = (props) => {
    const [formData, setFormData] = useState({
        username: '', 
        password: ''
    })
    const {username, password} = formData

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData(prevState => ({
            ...prevState, 
            [name]: value
        }))
    }

    return(
        <>
  
        <form 
            className='login-form'
            onSubmit={(e)=> {
            e.preventDefault()
            props.loginSubmit(formData)
        }}>
            <h2 className='login-title'>Login</h2>
            <label>Username:</label>
                <input 
                    type='text'
                    name='username'
                    value={username}
                    onChange={handleChange}
                />
            
            <label>Password:</label>
                <input 
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                />
            <div className='login-submit'>
                <button className='login-submit-button'>Submit</button>
            </div>
        </form>
        <div className='reg'>
        <Link to='/register'><button className='re-route-register'>Register</button></Link>
        </div>
        </>
    )
}

export default LoginPage