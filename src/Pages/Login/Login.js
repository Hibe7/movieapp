import React, { useState } from 'react'
import "./Login.css"
import {savedLike} from "../../components/ContentModal/ContentModal"


const Login = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [logged, setLogged] = useState({username: "", password:"", favorite: [...new Set(savedLike)]});


const savedLikes = () => {
  return (
    isLogged ? [...new Set(savedLike)]: [])
};
console.log(savedLikes());

const handleClick = () => {
  if((logged.password.length < 6) || (logged.username.length< 3)) {
    alert("Your Username or Password is to short")
  } else {
    setIsLogged(true);
  }
  console.log(logged);
}



    return (
      isLogged 
      ? <div className="container">
        <h2>Hello {logged.username}</h2>
        <h1>Movies you like : </h1>
        <hr />
        <div>
        <ul>
          {logged.favorite.map((val, id) => {
            return (
              <div id="movie" className="listItem">
              {val !== "" ? <li key={id}>{val}</li> : null}
              
              </div>
            )
          })}
        </ul>
      </div>
      <button
      onClick={()=>setIsLogged(false)}
      >LogOut </button>
      </div>  
      : <div className="login__container">
        <div className="login">
          
          <div className="input-container">
            <input 
            type="text" 
            placeholder="Username"
            value={logged.username}
            onChange={e => setLogged({...logged, username: e.target.value})}
            />
            
          </div>
          
          <div className="input-container">
            <input 
            type="password" 
            placeholder="Password"
            value={logged.password}
            onChange={e => setLogged({...logged, password: e.target.value})}
            />
            
          </div>
          
          <p 
          className="login__button" 
          type="submit" 
          onClick={handleClick}
          
          >Log In</p>
        </div>
        </div>
      
      
        
      )
}

export default Login
