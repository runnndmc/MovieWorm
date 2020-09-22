import React, {useState} from 'react'
import './Register.css'

const Register = (props) => {
    const [formData, setFormData] = useState({
        username: '', 
        email: '', 
        password:''
    })
    const { username, email, password } = formData 
    const { registerSubmit } = props
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prevState => ({
            ...prevState, 
            [name]: value
        }))
    }
 

    return (
        
        <form 
            className='register-form'
            onSubmit={(e) => {
                e.preventDefault()
                registerSubmit(formData)
            }}
        >
            
         <h2 className='register-title'>Register here</h2>
         <label>Username:</label>
             <input
                type='text'
                name='username'
                value={username}
                onChange={handleChange}
            />
         
         <label>Email:</label>
             <input
                type='email'
                name='email'
                value={email}
                onChange={handleChange}
            />
         
         <label>Password:</label>
             <input
                type='password'
                name='password'
                value={password}
                onChange={handleChange}
            />
         <div className='button-conatiner'>
         <button className='register-submit'>Submit</button>
         </div>
        
        </form>
    )
}

export default Register