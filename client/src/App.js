import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import './App.css';
import Layout from './layouts/Layout'
import LoginPage from './screens/LoginPage'
import Register from './screens/Register'
import MainContainer from './containers/MainContainer'
import {loginUser, registerUser, removeToken, verifyUser} from './services/auth'


function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const history = useHistory()

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser()
      setCurrentUser(userData)
      history.push('/')
    }
    handleVerify()
  }, []) 

  const loginSubmit = async (loginData) => {
    const userData = await loginUser(loginData)
    setCurrentUser(userData)
    history.push('/')
  }

  const registerSubmit = async (registerData) => {
    const userRegData = await registerUser(registerData)
    setCurrentUser(userRegData)
    history.push('/')
  }

  const handleLogout = () => {
    localStorage.removeItem('authToken')
    removeToken()
    setCurrentUser(null)
    history.push('/')
  }

  return (
    <Layout 
      currentUser = {currentUser}
      handleLogout = {handleLogout}
    >

      <Switch>

        <Route path='/login'>
          <LoginPage loginSubmit = {loginSubmit} />
        </Route>

        <Route path ='/register'>
          <Register registerSubmit = {registerSubmit} />
        </Route>

        <Route path ='/' component={MainContainer}>
 
      </Switch>
    </Layout>
   
  );
}

export default App;
