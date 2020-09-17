import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const LoginPage = (props) => {
    const [formData, setFormData] = useState({
        username: '', 
        password: ''
    })
    const { username, password } = formData

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prevState => ({
            ...prevState, 
            [name]: value
        }))
    }

    return(
        <form onSubmit={(e)=> {
            e.preventDefault()
            props.loginSubmit(formData)
        }}>
            <h2>Login</h2>
            <label>Username:
                <input 
                    type='text'
                    name='username'
                    value={username}
                    onChange={handleChange}
                />
            </label>
            <label>Password:
                <input 
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                />
            </label>
            <Link to='/register'>Register</Link>
            <button>Submit</button>
        </form>
    )
}

export default LoginPage