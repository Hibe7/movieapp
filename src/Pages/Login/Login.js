import React from 'react'
import "./Login.css"



const Login = () => {
    return (
        <div className="login__container">
        <div className="login">
          
          <div className="input-container">
            <input type="text" placeholder="Username"/>
            
          </div>
          
          <div className="input-container">
            <input type="password" placeholder="Password"/>
            
          </div>
          
          <p className="login__button" type="submit">Log In</p>
        </div>
        </div>
      )
}

export default Login
