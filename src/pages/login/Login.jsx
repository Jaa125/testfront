import axios from 'axios'
import React, { useRef } from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { LoginStart, LoginSuccess } from '../../context/Actions'
import { Context } from '../../context/Context'
// import LoadingSpinner from '../../components/loading/LoadingSpinner'

import './login.css'



export default function Login() {
  const userRef = useRef()
  const passRef = useRef()
  const { dispatch, isFetching } = useContext(Context)
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    // dispatch(LoginStart())
    try {
      const res = await axios.post("/auth/login", {
        phoneNumber: userRef.current.value,
        password: passRef.current.value,
      });
      // dispatch(LoginSuccess(res.data))
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data })
      window.location.replace("/")
      
    } catch (e) {
      dispatch({ type: "LOGIN_FAILURE" })
    }

  }
 
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label >Numéro de Téléphone</label>
        <input type="text" className="loginInput" placeholder="Entrer votre numéro de téléphone" ref={userRef}/>
        <label >Mot de passe</label>
        <input type="password" className="loginInput" placeholder="Entrer votre Mot de passe" ref={passRef} />
        <button className="loginButton" type="submit" disabled={isFetching}>Login</button>
        <button className="loginRegisterButton"><Link className="link" to="/register">Register  </Link></button>
      </form>

      


    </div>
  )
}
