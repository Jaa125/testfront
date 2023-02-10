import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Logout } from '../../context/Actions';
import { Context } from '../../context/Context';
import './topbar.css'
import logo from "../../assets/imgpost/logo.jpeg";

// import booklover from '../../assets/images/booklover.jpg'


export default function TopBar() {
  const { user, dispatch, isFetching } = useContext(Context);
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight 
  });
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight
    })
  }
  
  useEffect(() => {
    window.addEventListener('resize', setDimension);
    
    return(() => {
        window.removeEventListener('resize', setDimension);
    })
  }, [screenSize])

  
  const handleLogout =() => {
    dispatch(Logout())
    window.location.replace("/")
  }
  return (
    <div className="top">
      <div className="topLeft">
      <span><img src={logo} alt=""/></span>
        {/* <i className=" topIcon fa-brands fa-square-facebook"></i>
        <i className=" topIcon fa-brands fa-square-twitter"></i>
        <i className=" topIcon fa-brands fa-square-pinterest"></i>
        <i className=" topIcon fa-brands fa-square-instagram"></i> */}
      </div>
      <div  className={
          isNavExpanded ? "topCenter expanded" : "topCenter"
        }>
        <ul className="topList" >
          <li className="topListItem"><Link className="link a" to="/" onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }} >Home</Link> </li>
          
      {screenSize.dynamicWidth <= 425 ? ( <>{user   ? <li className="topListItem" onClick={handleLogout}>Logout</li> :   (
            <>
            <li className="topListItem"><Link className="link" to="/login"  onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }} >Login</Link></li>
            <li className="topListItem"><Link className="link" to="/register"  onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}>Register</Link></li>
            </>) } </>) : ( <>{user   && <li className="topListItem" onClick={handleLogout}>Logout</li>  } </>)
      }
          
        </ul>
     
    </div>
      <div className="topRight">
        {
          user ?
            ("") :
            (
            <ul className="topList">
            <li className="topListItem"><Link className="link" to="/login" >Login</Link></li>
            <li className="topListItem"><Link className="link" to="/register" >Register</Link></li>
            </ul>)
        }

        <i className=" topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
      <span className="hamburger"onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}><i className="fa-solid fa-bars"></i></span>
    </div>
  )
}
