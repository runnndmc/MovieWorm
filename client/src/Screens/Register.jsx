import React, {useState} from 'react'

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
            
         <h2>Register here</h2>
         <label>Username:
             <input
                type='text'
                name='username'
                value={username}
                onChange={handleChange}
            />
         </label>
         <label>Email:
             <input
                type='email'
                name='email'
                value={email}
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
         <button>Submit</button>
        </form>
    )
}

export default Register