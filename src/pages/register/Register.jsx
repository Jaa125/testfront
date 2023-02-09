
import React, { useContext, useEffect, useState } from 'react'
import './register.css'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'
import axios from 'axios'

export default function Register () {
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
    const [cin, setCin] = useState("")
    const [email, setEmail] = useState("")
    const [regionsData, setRegions] = useState([]);
    const [region, setSelectedRegion] = useState("");
  
    useEffect(() => {
      const getReg = async () => {
        const res = await axios.get("https://test-api-kqa6.onrender.com/api/regions")
        setRegions(res?.data)
      
      }
      getReg()
     console.log(regionsData)
       
    }, []);

  const [password, setPassword] = useState("")
  const [error, setErr] = useState(false)
  const { dispatch, isFetching } = useContext(Context)
const handleSubmit = async (e) => {
  e.preventDefault()
  setErr(false)
  try{
    console.log(region)
    const res = await axios.post("https://test-api-kqa6.onrender.com/api/auth/register",{
      firstname,
      lastname,
      phoneNumber,
      cin,
      email,
      region,
      password
    });
    res.data && window.location.replace("https://test-front-mtfn.onrender.com/login")
   
  }catch(err){
    setErr(true)
  }



}

  return (
    <div className="register">
        <span className="registerTitle">Register</span>
        <form className="registerForm" onSubmit={handleSubmit}>
          <div className="registerdiv">   
            <label htmlFor="">Nom</label>
            <input type="text" className="registerInput" placeholder="Entrer votre Nom" onChange={(e) => setLastname(e.target.value)}/>
            </div>
            <div className="registerdiv"> 
            <label htmlFor="">Prénom</label>
            <input type="text" className="registerInput" placeholder="Entrer votre prénom" onChange={(e) => setFirstname(e.target.value)}/>
            </div>
            <div className="registerdiv"> 
            <label htmlFor="">Email</label>
            <input type="email" className="registerInput" placeholder="Entrer votre email" onChange={(e) => setEmail(e.target.value)}/>
            </div>
        
            <div className="registerdiv"> 
            <label htmlFor="">Numéro du CIN</label>
            <input type="text" className="registerInput" placeholder="Entrer votre prénom" onChange={(e) => setCin(e.target.value)}/>
            </div>
            <div className="registerdiv"> 
            <label htmlFor="">Numéro de Téléphone</label>
            <input type="text" className="registerInput" placeholder="Entrer votre mot de passe" onChange={(e) => setPhoneNumber(e.target.value)}/>
            </div>
            <div className="registerdiv"> 
            <label htmlFor="">Mot de passe</label>
            <input type="password" className="registerInput" placeholder="Entrer votre mot de passe" onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className="registerdiv"> 
            <label htmlFor="">Région</label>
            <select className="regionSelect" value={region} onChange={(e) => setSelectedRegion(e.target.value)}>
            <option value="">--Votre Région--</option>

        {regionsData.map((regg) => (
          <option key={regg._id} value={regg.name}>
            {regg.name} 
          </option>
        ))}
      </select>
          </div>
          
            <button className="registerButton" disabled={isFetching} type="submit">register</button>
            <button className="registerLoginButton">  <Link className="link" to="/login">Login</Link></button>
      
        </form>
       
        
     {/* {error && <span style={{color:"red", marginTop:'10px'}}> Something went wrong</span>  } */}
        
    </div>
  )
}
